import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  const categories = ['Branding', 'UI Design', 'Visual Storytelling'];

  return (
    <section
      id="home"
      className="relative overflow-x-hidden pt-24 pb-16 sm:pt-36 sm:pb-24 lg:min-h-[90vh] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[120px] will-change-transform" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] will-change-transform" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* TEXT — always first on mobile */}
          <div className="w-full space-y-5 sm:space-y-8 order-1 lg:order-1">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl xs:text-5xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-foreground/90 mb-1">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent pb-1 drop-shadow-sm">
                  Saurabh Kanade
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Visual Designer crafting meaningful digital experiences
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row flex-wrap gap-2 sm:gap-3"
            >
              {categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] hover:border-purple-400/50 hover:bg-foreground/5 text-foreground/80 transition cursor-default whitespace-nowrap"
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-4 w-full"
            >
              <button
                onClick={onExploreWork}
                className="group relative overflow-hidden w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white hover:scale-[1.02] hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)] transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={onContact}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] hover:bg-foreground/5 text-foreground transition-all duration-300 font-semibold text-center text-sm sm:text-base"
              >
                Contact
              </button>
            </motion.div>
          </div>

          {/* IMAGE — appears below text on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end w-full order-2 lg:order-2"
          >
            {/* Badge sits outside card — positioned relative to this container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] group">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-[3rem] blur-[80px] lg:blur-[100px] -z-10" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="relative rounded-[1.5rem] lg:rounded-[2rem] backdrop-blur-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-3 lg:p-4"
              >
                {/* Top Reflection */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 blur-[1px] rounded-t-[1.5rem] lg:rounded-t-[2rem]" />

                {/* Image */}
                <div className="aspect-[4/5] rounded-xl lg:rounded-2xl overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/10 z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                    alt="Design Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Badge — anchored inside card, no negative overflow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute top-5 right-4 sm:top-8 sm:-right-5 lg:-right-8 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-background/95 dark:bg-black/95 backdrop-blur-md border border-[var(--glass-border)] shadow-xl z-20"
                >
                  <span className="text-[11px] sm:text-sm font-semibold whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    5+ Years Experience
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
