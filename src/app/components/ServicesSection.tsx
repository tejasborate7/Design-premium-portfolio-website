import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Smartphone, Share2, Sparkles } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Creating memorable brand identities that resonate with your audience and stand out in the market.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that provide exceptional user experiences.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Crafting eye-catching social media content that drives engagement and builds your online presence.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Sparkles,
      title: 'Visual Design',
      description: 'Transforming ideas into stunning visual narratives through creative design solutions.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
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
              What I Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1 sm:hover:scale-105 sm:hover:-translate-y-2">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 sm:mb-6 shadow-lg`}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-2xl sm:rounded-3xl`} />
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className={`absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r ${service.gradient} opacity-20 skew-x-12 group-hover:left-full transition-all duration-1000`} />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-30 rounded-2xl sm:rounded-3xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
