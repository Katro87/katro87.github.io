import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { projects } from '@/lib/projects';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','services','projects','about','how-it-works','contact','faq','privacy','terms',...services.map(s=>`services/${s.slug}`),...projects.map(p=>`projects/${p.slug}`)].map(p=>({url:`https://katro87.github.io/${p?p+'/':''}`,changeFrequency:'monthly',priority:p===''?1:p==='services'?0.9:0.7}));}
