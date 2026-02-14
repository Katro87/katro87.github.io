
import React from 'react';
import Section from './Section';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BS Software Engineering',
      institution: 'Superior University Lahore',
      period: '2023 – Current',
      grade: 'GPA: 3.46',
      icon: <GraduationCap className="text-primary" />
    },
    {
      degree: 'FSC Pre-Engineering',
      institution: 'Superior College Okara',
      period: '2021 – 2023',
      grade: 'First Division',
      icon: <Award className="text-secondary" />
    }
  ];

  return (
    <Section id="education">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {education.map((edu, idx) => (
          <div key={idx} className="w-full bg-card p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               {React.cloneElement(edu.icon as React.ReactElement, { size: 100 })}
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex gap-6 items-center">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 font-medium">{edu.institution}</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-primary font-bold text-lg mb-1">{edu.grade}</p>
                <p className="text-gray-500 text-sm font-semibold uppercase">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
