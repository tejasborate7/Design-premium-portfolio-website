import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Saurabh transformed our brand identity completely. His attention to detail and creative vision exceeded our expectations.',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=667eea&color=fff&size=200',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      content: 'Working with Saurabh was a pleasure. He delivered stunning designs that perfectly captured our vision and resonated with our audience.',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=764ba2&color=fff&size=200',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Marketing Director, GrowthLabs',
      content: 'Exceptional designer with a keen eye for aesthetics. Our social media engagement increased by 300% after implementing his designs.',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=f093fb&color=fff&size=200',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
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
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Feedback from amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105">
                {/* Quote Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 sm:mb-6">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-purple-500/30"
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-2xl rounded-2xl sm:rounded-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
