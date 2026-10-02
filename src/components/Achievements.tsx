import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, BookOpen, Cpu } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const getBadgeIcon = (badgeType: string) => {
    switch (badgeType) {
      case 'Elite+Silver':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Harvard':
        return <BookOpen className="w-6 h-6 text-purple-400" />;
      case 'University':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-gray-950/80 border-t border-gray-900">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-400">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Milestones that reflect my learning journey and technical growth.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-gray-800 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                item.badgeType === 'Elite+Silver'
                  ? 'from-cyan-400 via-blue-500 to-purple-500'
                  : item.badgeType === 'Harvard'
                  ? 'from-red-500 via-purple-500 to-cyan-400'
                  : item.badgeType === 'University'
                  ? 'from-emerald-400 via-teal-500 to-cyan-400'
                  : 'from-blue-500 via-indigo-500 to-purple-500'
              }`} />

              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gray-900 border border-gray-800 shadow-md">
                    {getBadgeIcon(item.badgeType)}
                  </div>

                  <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider border ${
                    item.badgeType === 'Elite+Silver'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : item.badgeType === 'Harvard'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {item.issuer}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mt-1">
                    {item.issuer}
                  </div>
                </div>

                {/* Score & Details */}
                <div className="bg-gray-900/80 p-4 rounded-2xl border border-gray-800/80 space-y-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Verification Highlight</div>
                  <div className="text-sm font-bold text-gray-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item.details}</span>
                  </div>
                </div>

              </div>

              {/* Verified Footer */}
              <div className="pt-6 mt-6 border-t border-gray-900 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400/90">
                  <Sparkles className="w-3.5 h-3.5" /> Verified Milestone
                </span>
                <span className="text-emerald-400 font-semibold">Verified</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
