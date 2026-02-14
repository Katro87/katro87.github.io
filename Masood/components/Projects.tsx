
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Academic Web & Mobile Apps',
      description: 'Comprehensive platforms built using modern frontend frameworks with integrated backend logic and optimized databases. Focused on scalability and user experience.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: 'https://picsum.photos/seed/web/600/400'
    },
    {
      title: 'Amazon Sales Tracker',
      description: 'An internal tool designed for product hunting and sales monitoring. Helps in tracking inventory levels and predicting stock-out dates based on historical data.',
      tags: ['Python', 'Excel API', 'React', 'Charts.js'],
      image: 'https://picsum.photos/seed/amazon/600/400'
    },
    {
      title: 'SDLC Workflow Optimizer',
      description: 'A project management dashboard focusing on the Software Development Life Cycle. Implements kanban boards, bug tracking, and automated version control logs.',
      tags: ['TypeScript', 'Firebase', 'Framer Motion'],
      image: 'https://picsum.photos/seed/sdlc/600/400'
    }
  ];

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl flex flex-col h-full"
          >
            <div className="relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 text-gray-300 hover:text-white transition-all">
                  <Github size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary/20 text-gray-300 hover:text-white transition-all">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
