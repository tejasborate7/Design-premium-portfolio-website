import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export function HomeAboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#0a0b0f', minHeight: '520px' }}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Artwork Images ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[360px] sm:h-[420px]"
          >
            {/* White bracket / frame outline */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{
                top: '16px',
                left: '-12px',
                width: '90px',
                height: '90px',
                borderTop: '2.5px solid rgba(255,255,255,0.7)',
                borderLeft: '2.5px solid rgba(255,255,255,0.7)',
              }}
            />

            {/* Main large artwork — left-bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="absolute bottom-0 left-0 overflow-hidden rounded-sm shadow-2xl"
              style={{ width: '200px', height: '260px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=500&q=85&auto=format&fit=crop"
                alt="Design artwork"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.1) saturate(1.1)' }}
              />
            </motion.div>

            {/* Stats badge on top of left image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute z-20 flex flex-col items-start"
              style={{ bottom: '22px', left: '210px' }}
            >
              <span className="text-4xl sm:text-5xl font-bold text-white leading-none">500+</span>
              <span className="text-sm text-white/55 mt-1 tracking-wide">Projects Done</span>
            </motion.div>

            {/* Secondary artwork — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute top-0 right-0 overflow-hidden rounded-sm shadow-2xl"
              style={{ width: '200px', height: '240px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=85&auto=format&fit=crop"
                alt="Creative artwork"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.05) brightness(0.9)' }}
              />
            </motion.div>

            {/* Small square accent — bottom-left corner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute z-20"
              style={{
                bottom: '38px',
                left: '18px',
                width: '52px',
                height: '52px',
                background: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(255,255,255,0.15)',
              }}
            />
          </motion.div>

          {/* ── RIGHT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: '#00c2ff' }}
            >
              About Me
            </span>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight"
            >
              Every story deserves to be seen, not just told
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '480px' }}>
              With a background in advertising, branding, and motion design, I've worked with brands
              that trust creativity to do more than decorate — they trust it to{' '}
              <em className="text-white/80 not-italic font-medium">deliver.</em>
            </p>

            {/* Know More CTA */}
            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:brightness-110 active:scale-95"
                style={{
                  background: '#00c2ff',
                  letterSpacing: '0.03em',
                }}
              >
                Know More
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
    </section>
  );
}
