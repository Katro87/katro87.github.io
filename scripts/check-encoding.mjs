import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
const files=execFileSync('git',['ls-files'],{encoding:'utf8'}).trim().split('\n');
const bad=[];
for(const path of files){
 if(!/\.(html|tsx?|jsx?|txt|json|css)$/.test(path))continue;
 try{if(/\uFFFD|\u00e2[\u20ac\u2020\u0153]|\u00c3[\u0080-\u00bf]|\u00c2[\u0080-\u00bf]/.test(readFileSync(path,'utf8')))bad.push(path);}catch{}
}
if(bad.length){console.error('Broken text encoding:',bad.join(', '));process.exit(1);}
console.log('Text encoding check passed.');
