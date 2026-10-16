import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { Breadcrumb,ContactCTA } from '@/components/ui';

export const metadata={title:'Projects & Case Studies',description:'Public products and private automation systems by Sufyan Rasheed, independent software engineer and founder of CustomWebX Technologies.',alternates:{canonical:'/projects/'}};

export default function Page(){
  const publicProjects=projects.filter(p=>p.slug==='kandrex'||p.slug==='customwebx'||p.slug==='rental-platform');
  const privateProjects=projects.filter(p=>p.slug==='outreach-automation'||p.slug==='facebook-publishing');
  return <div className="container"><Breadcrumb items={[{label:'Projects'}]}/><section className="page-hero"><span className="eyebrow">PRODUCTS, SYSTEMS & ENGINEERING WORK</span><h1>The work behind<br/><span className="serif-accent">the founder.</span></h1><p>I build and operate software products while developing private systems that reduce repetitive work. Public products are separated from confidential automation work so the scope and evidence are clear.</p></section><ProjectGroup title="Public products" intro="Products and company work that can be discussed openly." items={publicProjects}/><ProjectGroup title="Private automation systems" intro="Confidential internal systems described by purpose and engineering value, without exposing private code or implementation details." items={privateProjects}/><div className="section project-links"><span className="eyebrow">OPEN LINKS</span><div className="button-row"><a className="text-link" href="https://github.com/Katro87">GitHub <ArrowUpRight size={18}/></a><a className="text-link" href="https://customwebx.com/">CustomWebX <ArrowUpRight size={18}/></a><a className="text-link" href="https://kandrex.com/">Kandrex <ArrowUpRight size={18}/></a></div></div><div className="section"><ContactCTA title="Have a problem worth building for?" message="Hi Sufyan, I explored your projects and would like to discuss a system for [my use case]." subject="Project case study inquiry"/></div></div>
}

function ProjectGroup({title,intro,items}:{title:string;intro:string;items:typeof projects}){
  return <section className="project-group"><div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>{title}</h2></div><p>{intro}</p></div><div className="project-index">{items.map((p,i)=><Link key={p.slug} className={`project-index-row work-${i}`} href={`/projects/${p.slug}/`}><span className="project-index-number">0{i+1}</span><div><span className="eyebrow">{p.type}</span><h2>{p.name}</h2><p>{p.summary}</p></div><span className="project-status">{p.status}</span><ArrowUpRight size={32}/></Link>)}</div></section>
}
