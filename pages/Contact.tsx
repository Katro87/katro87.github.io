
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''} bg-slate-900 text-white p-4 rounded-2xl flex items-center gap-4 shadow-2xl border border-white/10`}>
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
        </div>
        <div>
          <p className="font-bold">Success!</p>
          <p className="text-sm text-slate-400">Your message has been delivered.</p>
        </div>
        <button onClick={() => setShowToast(false)} className="ml-4 text-slate-500 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Inquiries</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">Start a <span className="text-blue-600">Conversation</span></h1>
          <p className="text-lg text-slate-600 mb-12 max-w-md leading-relaxed">
            Ready to bring your vision to life? Fill out the form or reach me directly via email.
          </p>

          <div className="grid gap-6">
            <div className="group flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <a href="mailto:sufyan.rasheed@katro87.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">sufyan.rasheed@katro87.com</a>
            </div>
            
            <div className="group flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all">
              <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span className="text-lg font-bold text-slate-900">Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="e.g. Sufyan Rasheed"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="e.g. email@example.com"
                />
              </div>
            </div>
            <div className="relative group">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Subject</label>
              <input 
                required
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                placeholder="Briefly, what is this about?"
              />
            </div>
            <div className="relative group">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Message</label>
              <textarea 
                required
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all resize-none placeholder:text-slate-300"
                placeholder="How can I help your project?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
