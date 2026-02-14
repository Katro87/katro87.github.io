
import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Mail />, text: 'masoodkhalid3198@gmail.com' },
    { icon: <Phone />, text: '03286465899' },
    { icon: <MapPin />, text: 'Lahore, Pakistan' },
  ];

  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-3xl font-bold">Let's Talk!</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Whether you have a question about my experience, want to discuss a project, or just want to say hi, my inbox is always open.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="p-4 bg-card border border-white/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary shadow-lg">
                  {info.icon}
                </div>
                <span className="text-gray-300 font-medium text-lg">{info.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-3xl border border-white/5 shadow-2xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white resize-none"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Send Message <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
