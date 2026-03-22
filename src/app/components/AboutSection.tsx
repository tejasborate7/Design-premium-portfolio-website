import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Photoshop', level: 85 },
    { name: 'Illustrator', level: 80 },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Depth layer */}
      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* About Me Badge */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-purple-500/20 shadow-[0_4px_15px_rgba(168,85,247,0.05)]"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-[#0A0A0A] rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-10 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-white/5"
        >
          <div className="grid lg:grid-cols-[4fr_6fr] gap-8 lg:gap-16 items-center">
            
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-muted mx-auto max-w-[260px] sm:max-w-sm lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="The Digital Curator"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
                The Digital Curator
              </h2>
              
              <div className="text-muted-foreground text-sm sm:text-lg leading-relaxed mb-7 sm:mb-10">
                <p>
                  I specialize in creating high-end digital aesthetics that bridge the gap between art
                  and utility. My approach is rooted in structural minimalism and atmospheric depth,
                  ensuring every pixel serves a purpose in the narrative.
                </p>
              </div>

              {/* Skills — always 3 equal columns */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border border-gray-100 dark:border-white/10 rounded-2xl px-3 sm:px-6 py-3 sm:py-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none min-w-0"
                  >
                    <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] dark:text-[#6366f1] mb-2 truncate">
                      {skill.name}
                    </span>
                    <div className="h-1.5 w-full bg-indigo-50 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-[#4f46e5] dark:bg-[#6366f1] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
