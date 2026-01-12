
import React from 'react';
import { SKILLS } from '../constants.tsx';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const revealRef = useReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
          <img 
            src="https://picsum.photos/seed/creative/800/1000" 
            alt="About Sufyan" 
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover aspect-[4/5]"
          />
        </div>

        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Discovery My Story</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            I blend <span className="text-blue-600">Technical Skills</span> with <span className="text-purple-600">Creative Vision</span>
          </h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I am a passionate Full-Stack Developer based in Pakistan, dedicated to building software that matters. With half a decade of experience, I've worked with startups and established businesses to deliver complex web architectures.
          </p>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            My philosophy is simple: write clean code, focus on the user, and never stop learning. Whether it's a sleek landing page or a heavy-duty data dashboard, I ensure every pixel serves a purpose.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-blue-600 mb-2 font-bold text-2xl">Creative</div>
              <p className="text-slate-500 text-sm">Visual problem solver with a keen eye for aesthetics.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-purple-200 transition-all">
              <div className="text-purple-600 mb-2 font-bold text-2xl">Reliable</div>
              <p className="text-slate-500 text-sm">Committed to deadlines and quality assurance.</p>
            </div>
          </div>
        </div>
      </div>

      <section ref={revealRef} className="reveal">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
