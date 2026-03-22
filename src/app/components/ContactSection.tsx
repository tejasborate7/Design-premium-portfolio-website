import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saurabh.kanade@design.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(180,231,255,0.35),_transparent_55%)]"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            Let's Create Something Epic
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's collaborate and bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:items-stretch">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative h-full rounded-3xl border border-white/40 dark:border-white/10 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-pink-500/10 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Let's talk about your project</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  I'm always excited to take on new challenges and collaborate on innovative projects.
                  Whether you need a complete brand identity, stunning UI designs, or creative visual content,
                  I'm here to help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl transition-all ${
                      info.label === 'Phone' ? 'p-5 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.15)]' : 'p-4 sm:p-5'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium text-sm sm:text-base">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl p-6 sm:p-8 flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-2xl bg-input-background dark:bg-white/5 border border-transparent dark:border-white/10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/25 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-2xl bg-input-background dark:bg-white/5 border border-transparent dark:border-white/10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/25 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full min-h-[180px] px-4 py-3.5 rounded-2xl bg-input-background dark:bg-white/5 border border-transparent dark:border-white/10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/25 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium shadow-[0_18px_45px_rgba(168,85,247,0.45)] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
