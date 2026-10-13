import type { AnchorHTMLAttributes } from 'react';
/** Pages is a static host: native navigation avoids server-oriented prefetches. */
export default function Link(props:AnchorHTMLAttributes<HTMLAnchorElement>){return <a {...props}/>;}
