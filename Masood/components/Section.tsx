
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
