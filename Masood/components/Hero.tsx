
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 inline-block"
          >
            Welcome to my portfolio
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Masood Ahmad</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
            Software Engineering Student | E-Commerce Specialist
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
            I specialize in building functional web applications and managing Amazon e-commerce operations. Combining technical prowess with market awareness to deliver results.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-primary rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Contact Me <ArrowRight size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Download CV <Download size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white/10 p-4 bg-card shadow-2xl overflow-hidden">
               <img 
                src="https://picsum.photos/seed/masood/600/600" 
                alt="Masood Ahmad" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
