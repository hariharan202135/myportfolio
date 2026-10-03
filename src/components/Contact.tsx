import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Download, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name || 'Recruiter')}&body=${encodeURIComponent(formState.message + '\n\nSender Email: ' + formState.email)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-gray-950 border-t border-gray-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Meaningful.</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            "I'm always interested in opportunities to learn, build and contribute to impactful software projects."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass-card glass-card-hover p-6 rounded-3xl border border-gray-800 flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-cyan-400 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">GitHub Profile</h3>
                <p className="text-xs text-gray-400 mt-1">"Explore my code and projects."</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass-card glass-card-hover p-6 rounded-3xl border border-gray-800 flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-purple-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">LinkedIn Network</h3>
                <p className="text-xs text-gray-400 mt-1">"Connect with me professionally."</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.a>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-gray-800 flex items-center space-x-4 block"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Email Address</div>
                <div className="text-sm font-bold text-white mt-0.5 break-all">{PERSONAL_INFO.email}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Click to launch mail client</div>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-gray-800 flex items-center space-x-4 block"
            >
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">Direct Phone</div>
                <div className="text-sm font-bold text-white mt-0.5">{PERSONAL_INFO.phone}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Available for phone & WhatsApp</div>
              </div>
            </a>

            <div className="glass-card p-5 rounded-2xl border border-gray-800 flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Location</div>
                <div className="text-sm font-bold text-white mt-0.5">{PERSONAL_INFO.location}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Open to Relocation & Remote Roles</div>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.resumePath}
              download="N_Hariharan_Resume_Final_October.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-card p-4 rounded-2xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 flex items-center justify-center space-x-2 text-xs font-mono font-bold transition-all shadow-lg"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Official Resume PDF</span>
            </a>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-base font-bold text-white">Mail Client Initiated!</div>
                  <p className="text-xs text-gray-300">
                    Your email software opened with your message ready. Thank you for connecting!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-cyan-400 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Your Name / Company</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Recruiter Name"
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Your Contact Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Hariharan, we reviewed your portfolio and would like to discuss an opportunity..."
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all active:scale-95"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Me</span>
                    </button>

                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 rounded-xl font-semibold text-sm text-purple-300 bg-purple-950/40 border border-purple-500/40 hover:bg-purple-500/20 flex items-center space-x-2"
                    >
                      <LinkedinIcon className="w-4 h-4 text-purple-400" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 rounded-xl font-semibold text-sm text-gray-300 bg-gray-900 border border-gray-800 hover:text-white flex items-center space-x-2"
                    >
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
