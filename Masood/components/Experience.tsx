
import React from 'react';
import Section from './Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'E-Commerce Assistant (Amazon Seller)',
      location: 'Lahore, Pakistan',
      period: 'May 2025 – Current',
      description: [
        'Product hunting and sourcing from various marketplaces',
        'Product listing management and optimization',
        'Efficient order management and fulfillment tracking',
        'Inventory tracking and stock optimization',
        'Professional customer support and dispute resolution'
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-white/5 rounded-[40px]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>
        
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            {/* Dot */}
            <div className="absolute left-[-6px] md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background z-10"></div>
            
            <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12">
              <div className="p-8 bg-card rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl group">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {exp.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-secondary" /> {exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
