import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYWJzdHJhY3QlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQxMzI0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'tall',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1695671538019-0b45bdb5b608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBkZXNpZ24lMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3NzQxNTI2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'short',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1772037441173-3840bb55b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGRlc2lnbiUyMGdyYWRpZW50fGVufDF8fHx8MTc3NDE1MjYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'medium',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1686164439898-9790e48910ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvc3RlciUyMGRlc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDE1MjYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'short',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1516646878057-11a11c9372fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBtb2Rlcm58ZW58MXx8fHwxNzc0MTUyNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'tall',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwd29ya3xlbnwxfHx8fDE3NzQxMTAxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      height: 'medium',
    },
  ];

  const getHeight = (type: string) => {
    switch (type) {
      case 'tall':
        return 'h-96';
      case 'short':
        return 'h-64';
      default:
        return 'h-80';
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative overflow-hidden bg-[var(--glass-bg)]/30">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
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
              Creative Gallery
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            Visual Playground
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A collection of creative explorations and visual experiments
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 768: 3 }} gutter="1rem">
          <Masonry gutter="1rem">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative ${getHeight(image.height)} rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500`}>
                  <img
                    src={image.url}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-xl rounded-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
