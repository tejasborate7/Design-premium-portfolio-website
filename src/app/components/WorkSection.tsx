import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NDE1MjYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Mobile App Interface',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDE1MjYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Creative Poster Series',
      category: 'Visual Design',
      image: 'https://images.unsplash.com/photo-1686164439898-9790e48910ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvc3RlciUyMGRlc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDE1MjYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1762690717850-d006c1416a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBkZXNpZ258ZW58MXx8fHwxNzc0MTUyNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwd29ya3xlbnwxfHx8fDE3NzQxMTAxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      title: 'Digital Art Collection',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1516646878057-11a11c9372fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBtb2Rlcm58ZW58MXx8fHwxNzc0MTUyNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my recent design work across various disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 sm:hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Desktop-only: hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <button className="inline-flex items-center gap-2 text-white text-sm hover:gap-3 transition-all">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Mobile: always-visible info bar */}
                <div className="sm:hidden flex items-center justify-between px-4 py-3 border-t border-[var(--glass-border)]">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-0.5">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
