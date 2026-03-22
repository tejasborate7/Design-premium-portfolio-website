import { motion } from 'motion/react';
import { Download } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden pt-24 lg:pt-0"
      style={{ background: '#08090d' }}
    >
      {/* ─── LEFT: Text Content ─── */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 px-8 sm:px-12 lg:px-20 xl:px-28 py-10 lg:py-0 relative z-10 flex-grow lg:flex-grow-0">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.12] tracking-tight text-white mb-5 text-center lg:text-left"
        >
          I am Tarun, Visual
          <br />
          Designer &amp;
          <br />
          Content Creator
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-sm sm:text-base text-white/50 max-w-sm leading-relaxed mb-10 text-center lg:text-left"
        >
          I specialize in transforming brand ideas into scroll-stopping visuals and campaign stories that actually connect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Download CV — outlined style matching the design */}
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 border border-white/40 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 w-fit"
            style={{ letterSpacing: '0.04em' }}
          >
            <span className="underline underline-offset-4 decoration-white/60 group-hover:decoration-black">
              Download CV
            </span>
            <Download className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Explore Work — ghost */}
          <button
            onClick={onExploreWork}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white/60 text-sm font-medium hover:text-white transition-colors duration-300 w-fit"
          >
            Explore Work
          </button>
        </motion.div>
      </div>

      {/* ─── RIGHT: Portrait Photo (Desktop) ─── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden"
      >
        {/* Subtle blue/teal glow that matches the image lighting */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #08090d 0%, transparent 18%)',
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=90&auto=format&fit=crop"
          alt="Tarun - Visual Designer & Content Creator"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.88) contrast(1.05)' }}
        />
      </motion.div>

      {/* ─── BOTTOM: Portrait Photo (Mobile) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:hidden w-full flex justify-center items-end mt-10 relative px-4"
      >
        <div className="w-[280px] sm:w-[340px] aspect-[4/5] overflow-hidden rounded-t-full relative z-0 opacity-70">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-top pointer-events-none"
          />
          {/* Gradient fade out at the bottom to blend with next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090d] to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
