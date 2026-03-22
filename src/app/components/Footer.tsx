import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="py-12 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Saurabh Kanade
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> by Saurabh
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2026 All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] hover:border-purple-500/50 flex items-center justify-center transition-all hover:shadow-lg hover:shadow-purple-500/20"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[var(--glass-border)]">
          <p className="text-center text-xs text-muted-foreground">
            Designed & Developed with passion for creating beautiful experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
