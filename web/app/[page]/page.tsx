import { notFound } from 'next/navigation';
import { infoPages } from '@/lib/pages';
import { Breadcrumb,ContactCTA,Steps } from '@/components/ui';
type Key=keyof typeof infoPages;
export function generateStaticParams(){return Object.keys(infoPages).map(page=>({page}));}
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const {page}=await params;const p=infoPages[page as Key];return p?{title:p.title,description:p.intro,alternates:{canonical:`/${page}/`}}:{};}
export default async function Page({params}:{params:Promise<{page:string}>}){const {page}=await params;const p=infoPages[page as Key];if(!p)notFound();return <div className="container info-page"><Breadcrumb items={[{label:p.title}]}/><section className="page-hero"><span className="eyebrow">{p.eyebrow}</span><h1>{p.headline}</h1><p>{p.intro}</p></section>{'steps' in p&&<Steps items={[...p.steps]}/>}<div className="info-sections">{p.sections.map((s,i)=><section key={s.title}><span className="section-number">0{i+1}</span><div><h2>{s.title}</h2><p>{s.body}</p></div></section>)}</div><div className="section"><ContactCTA title="Let’s clarify the next step." message={`Hi Sufyan, I read your ${p.title} page. I would like to clarify [my question] before starting.`} subject={`Question about ${p.title}`}/></div></div>}
