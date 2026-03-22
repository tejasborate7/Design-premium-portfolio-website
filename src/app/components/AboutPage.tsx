import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function AboutPage() {
  const ref = useRef(null);
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      style={{
        background: '#0d0d0d',
        minHeight: '100vh',
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}
        >
          <span
            style={{ color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}
            onClick={() => navigate('/')}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            Home
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.75)' }}>Portfolio</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16" style={{ paddingTop: '40px', paddingBottom: '48px' }}>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(36px, 7vw, 80px)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '40px',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          Tarun Keswani
        </motion.h1>

        {/* ── Two-column: Image (left) + Content (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="w-full lg:max-w-[320px]"
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: 'transparent',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tarun Keswani"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.05) brightness(0.88)',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Who i am + short bio — pure transparent, no card/box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              background: 'transparent',
            }}
          >
            {/* Who i am? */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#c8e600', fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>
                *
              </span>
              <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>
                Who i am?
              </h2>
            </div>

            {/* Role + Arrow Button */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                fontWeight: 700,
                lineHeight: 1.35,
                margin: 0,
              }}>
                Motion Designer, Video Editor &amp;{' '}
                Content Creator.
              </h3>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#e84d2b',
                  marginTop: '4px',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                aria-label="Go back home"
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <ArrowUpRight style={{ width: '22px', height: '22px', color: '#ffffff' }} strokeWidth={2.5} />
              </a>
            </div>

            {/* Short bio paragraph */}
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: '15px',
              lineHeight: 1.75,
              margin: 0,
            }}>
              I turn creative chaos into structured storytelling, the kind that makes people stop
              scrolling. For me, design isn't just visual; it's emotional strategy disguised as art.
              From leading ad campaigns for TATA Capital, Croma, and Odoo to creating UGC-style
              videos that bring brands closer to people. I live for that moment when an idea goes
              from concept to connection, when pixels start speaking, colors carry intent, and a
              video becomes a story worth watching twice.
            </p>
          </motion.div>
        </div>

        {/* ── Full-width: Long Bio below both columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ marginTop: '72px' }}
        >
          <p style={{
            color: 'rgba(255,255,255,0.70)',
            fontSize: '15px',
            lineHeight: 1.8,
            margin: 0,
          }}>
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

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16" style={{ paddingBottom: '40px' }}>
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '16px' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
