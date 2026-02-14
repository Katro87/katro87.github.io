
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Megaphone, Terminal, Database, ShieldCheck, PieChart, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Software Development',
      icon: <Code className="text-primary" />,
      skills: [
        { name: 'Version Control', icon: <Terminal size={16} /> },
        { name: 'Debugging', icon: <ShieldCheck size={16} /> },
        { name: 'Databases', icon: <Database size={16} /> },
        { name: 'SDLC', icon: <Code size={16} /> }
      ]
    },
    {
      title: 'E-Commerce',
      icon: <ShoppingCart className="text-secondary" />,
      skills: [
        { name: 'Product Sourcing', icon: <ShoppingCart size={16} /> },
        { name: 'Inventory Mgt', icon: <PieChart size={16} /> },
        { name: 'Customer Service', icon: <Users size={16} /> },
        { name: 'Market Awareness', icon: <PieChart size={16} /> }
      ]
    },
    {
      title: 'Marketing & Mgt',
      icon: <Megaphone className="text-primary" />,
      skills: [
        { name: 'Facebook Marketing', icon: <Megaphone size={16} /> },
        { name: 'Engagement', icon: <Users size={16} /> },
        { name: 'Project Management', icon: <Terminal size={16} /> }
      ]
    }
  ];

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{cat.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {cat.skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-gray-400 group-hover:text-primary transition-colors">{skill.icon}</span>
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
