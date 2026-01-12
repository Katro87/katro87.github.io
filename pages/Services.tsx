
import React from 'react';
import { ICONS } from '../constants.tsx';
import { useReveal } from '../hooks/useReveal';

const Services: React.FC = () => {
  const revealRef = useReveal();

  const services = [
    {
      title: 'Web Application Development',
      description: 'Custom React and Next.js applications tailored to your business logic. Scalable, secure, and performant.',
      icon: <ICONS.Code />,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Domain & Hosting Services',
      description: 'Complete management of your digital assets. From registration to cloud deployment and SSL setup.',
      icon: <ICONS.Globe />,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'UI/UX Design Systems',
      description: 'Creating cohesive design languages and interactive prototypes that convert visitors into customers.',
      icon: <ICONS.Device />,
      gradient: 'from-cyan-600 to-emerald-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Premium Offerings</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Solutions for Your Digital Needs</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          From initial discovery to final deployment, I offer end-to-end services to ensure your project's success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {services.map((service, idx) => (
          <div key={idx} className="group p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.gradient}`}></div>
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <section ref={revealRef} className="reveal bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <h2 className="text-3xl font-bold mb-12 text-center">Service Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-4 font-semibold text-slate-400">Feature</th>
                <th className="py-4 font-semibold text-blue-400">Standard</th>
                <th className="py-4 font-semibold text-purple-400">Professional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="py-6">Responsive Layout</td>
                <td className="py-6 text-green-400">Included</td>
                <td className="py-6 text-green-400">Included</td>
              </tr>
              <tr>
                <td className="py-6">SEO Optimization</td>
                <td className="py-6 text-slate-500">Basic</td>
                <td className="py-6 text-green-400">Advanced</td>
              </tr>
              <tr>
                <td className="py-6">API Integration</td>
                <td className="py-6 text-slate-500">Up to 2</td>
                <td className="py-6 text-green-400">Unlimited</td>
              </tr>
              <tr>
                <td className="py-6">Monthly Support</td>
                <td className="py-6 text-slate-500">-</td>
                <td className="py-6 text-green-400">24/7 Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Services;
