"""Check every exported route, local asset, anchor and page-specific inquiry."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote, parse_qs
import re
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'web' / 'out'
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[]; self.ids=set(); self.h1=0; self.images=[]; self.title=False; self.canonical=False; self.main=False; self.copy=[]; self.script=0
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='h1': self.h1+=1
        if tag=='title': self.title=True
        if tag=='main': self.main=True
        if tag=='script': self.script+=1
        if tag=='a': self.links.append(a.get('href',''))
        if tag=='link' and a.get('rel')=='canonical': self.canonical=True
        if tag=='img': self.images.append(a)
        if tag in ('script','link') and (a.get('src') or a.get('href','').startswith('/_next/')): self.links.append(a.get('src') or a['href'])
    def handle_endtag(self,tag):
        if tag=='script': self.script-=1
    def handle_data(self,data):
        if not self.script:self.copy.append(data)
files=[OUT/'index.html',*[p for p in OUT.rglob('index.html') if p!=OUT/'index.html' and not p.relative_to(OUT).parts[0].startswith('_') and p.relative_to(OUT).parts[0]!='404'],OUT/'404.html']
assert len(list((OUT/'services').glob('*/index.html')))==35, 'Missing service routes'
assert len(list((OUT/'projects').glob('*/index.html')))==4, 'Missing project routes'
assert len(files)==49, f'Expected 48 pages + 404, found {len(files)}'
pages={p:Page(p.read_text(encoding='utf-8')) for p in files}
errors=[]; counts=[]
for p,page in pages.items():
    rel=str(p.relative_to(OUT))
    if page.h1!=1:errors.append(f'{rel}: expected exactly one H1, got {page.h1}')
    if not page.title or not page.main:errors.append(f'{rel}: missing title or main')
    if p.name!='404.html' and not page.canonical:errors.append(f'{rel}: missing canonical')
    for img in page.images:
        if not img.get('alt'):errors.append(f'{rel}: image missing alt')
        page.links.append(img.get('src',''))
    for href in page.links:
        u=urlsplit(href)
        if not href or href=='#':errors.append(f'{rel}: dead link {href!r}');continue
        if u.scheme or u.netloc:continue
        target=OUT/unquote(u.path).lstrip('/') if u.path else p
        if target.is_dir():target=target/'index.html'
        if not target.exists():errors.append(f'{rel}: missing target {href}');continue
        if u.fragment and target.suffix=='.html':
            dest=pages.get(target) or Page(target.read_text(encoding='utf-8'))
            if unquote(u.fragment) not in dest.ids:errors.append(f'{rel}: missing anchor {href}')
    if p.parent.parent.name=='services':
        text=' '.join(page.copy)
        count=len(re.findall(r'\b[\w’-]+\b',text));counts.append(count)
        service_links=[h for h in page.links if h.startswith('https://wa.me/') and p.parent.name.replace('-',' ') not in h]
        msgs=[parse_qs(urlsplit(h).query).get('text',[''])[0] for h in page.links if h.startswith('https://wa.me/')]
        if not any('My goal is' in m for m in msgs):errors.append(f'{rel}: missing service-specific WhatsApp message')
        if len(page.ids.intersection({'overview','scope','requirements','process','deliverables','pricing','questions'}))!=7:errors.append(f'{rel}: incomplete service sections')
assert not errors,'\n'.join(errors)
assert (OUT/'sitemap.xml').exists() and (OUT/'robots.txt').exists()
print(f'PASS: {len(files)} HTML pages, 35 services, four case studies; local links, assets, anchors, headings, metadata and service inquiry messages.')
print(f'Service page word counts including navigation: min {min(counts)}, max {max(counts)}.')
