
import React from 'react';
import Section from './Section';
import { MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react';

const About: React.FC = () => {
  const infoCards = [
    { icon: <MapPin className="text-primary" />, label: 'Location', value: 'Lahore, Pakistan' },
    { icon: <GraduationCap className="text-secondary" />, label: 'Degree', value: 'BS Software Engineering (GPA: 3.46)' },
    { icon: <Briefcase className="text-primary" />, label: 'Experience', value: 'Amazon Seller Assistant' },
    { icon: <Languages className="text-secondary" />, label: 'Languages', value: 'English (C1), Urdu (B2)' },
  ];

  return (
    <Section id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            As a dedicated Software Engineering student at Superior University, I am passionate about creating innovative digital solutions. My journey is unique, combining rigorous academic training with hands-on experience in the e-commerce sector.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I've spent significant time working as an E-Commerce Assistant, where I mastered Amazon's ecosystem. This experience has sharpened my analytical skills, attention to detail, and customer-centric approach, which I now bring to my software development projects.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-6">
            <div className="p-4 bg-card rounded-2xl border border-white/5 shadow-xl">
              <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="p-4 bg-card rounded-2xl border border-white/5 shadow-xl">
              <h4 className="text-3xl font-bold text-secondary mb-1">2+</h4>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoCards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-card rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group shadow-lg"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">{card.label}</h4>
              <p className="text-gray-200 font-medium">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
