
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-card/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Masood Ahmad
        </a>
        
        <div className="flex gap-6 mb-8">
          {[Github, Linkedin, Twitter].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="p-3 bg-white/5 rounded-full hover:bg-primary transition-all duration-300 text-gray-400 hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm flex items-center gap-1.5 mb-2">
          Made with <Heart size={14} className="text-red-500" /> by Masood Ahmad
        </p>
        <p className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
