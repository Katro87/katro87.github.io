
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const Home: React.FC = () => {
  const revealRef = useReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-widest uppercase mb-6 reveal active">
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Elevating <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital</span> through <span className="text-slate-800">Innovation</span>
          </h1>
          <div className="mb-10 h-12">
             <span className="text-xl md:text-2xl text-slate-600 font-medium typewriter-text">
               Web Developer & UI/UX Specialist
             </span>
          </div>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Hi, I'm Sufyan Rasheed. I engineer performant web architectures and immersive user experiences that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <NavLink to="/projects" className="group relative bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
              Explore Portfolio
            </NavLink>
            <NavLink to="/contact" className="group flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors">
              Let's Talk
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NavLink>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative animated-border-container">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/katro87/800/800" 
              alt="Sufyan Rasheed" 
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      <section ref={revealRef} className="reveal max-w-7xl mx-auto px-4 py-24 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center bg-white/50 backdrop-blur-sm rounded-[3rem] p-12 border border-white/50">
          {[
            { label: 'Experience', val: '5+' },
            { label: 'Projects', val: '50+' },
            { label: 'Clients', val: '20+' },
            { label: 'Retention', val: '100%' }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">{stat.val}</h3>
              <p className="text-slate-500 font-semibold uppercase tracking-widest text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
