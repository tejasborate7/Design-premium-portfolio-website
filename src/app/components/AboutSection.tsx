import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0d0d0d] min-h-screen"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-white/50"
        >
          <span
            className="hover:text-white/80 cursor-pointer transition-colors"
            onClick={() => {
              const el = document.getElementById('home');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white/80">Portfolio</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-12 lg:mb-16 tracking-tight"
        >
          Tarun Keswani
        </motion.h1>

        {/* Two-column layout: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '3/4', maxWidth: '350px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tarun Keswani"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.05) brightness(0.9)' }}
              />
              {/* subtle vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.45) 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Who i am? */}
            <div className="flex items-center gap-3">
              <span
                className="text-2xl font-bold"
                style={{ color: '#c8e600', lineHeight: 1 }}
              >
                *
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Who i am?
              </h2>
            </div>

            {/* Role + Arrow Button */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-[480px]">
                Motion Designer, Video Editor &amp;{' '}
                Content Creator.
              </h3>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-shrink-0 flex items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#e84d2b',
                  marginTop: '4px',
                }}
                aria-label="Contact"
              >
                <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.5} />
              </a>
            </div>

            {/* Short bio paragraph */}
            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '600px' }}
            >
              I turn creative chaos into structured storytelling, the kind that makes people stop
              scrolling. For me, design isn't just visual; it's emotional strategy disguised as art.
              From leading ad campaigns for TATA Capital, Croma, and Odoo to creating UGC-style
              videos that bring brands closer to people. I live for that moment when an idea goes
              from concept to connection, when pixels start speaking, colors carry intent, and a
              video becomes a story worth watching twice.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />

            {/* Long bio paragraph */}
            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              Every idea begins with a beat, a rhythm I've been chasing since the day I first spoke
              into a microphone. Before stepping behind the design desk, I was a voiceover artist,
              learning how tone, silence, and storytelling could move people. That experience still
              echoes in my work; only now, I speak through visuals, motion, and design. Through
              Tarun Creates, my personal creative label, I shape stories that perform, blending
              strategy with spontaneity, design with direction, and emotion with execution. My work
              spans motion design, branding, animation, and on-camera presentation, all stitched
              together by one simple idea: make it memorable. With a strong foundation in Adobe
              Creative Suite and AI-powered design tools, I create visuals that don't just look good
              but communicate with purpose. My creative journey has been recognized through honors
              like the Creative Catalyst Award (2025), Amaze Festival Winner (2023), and a proud
              moment as a Cortokino 2025 Jury Member, where I evaluated animation films by emerging
              creators. Over the years, I've mentored students and conducted workshops on animation,
              storytelling, and performance in front of the camera, sharing insights that merge art,
              emotion, and technology. Today, I'm a designer who directs, a presenter who performs,
              and a storyteller who still talks to timelines, because some creative habits are too
              good to let go. At heart, my goal remains simple: to make creativity not just seen,
              but felt, one frame at a time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10">
        <div className="w-full h-px bg-white/10" />
        <div className="flex justify-end pt-4">
          <span className="text-sm text-white/40">All rights reserved</span>
        </div>
      </div>
    </section>
  );
}
