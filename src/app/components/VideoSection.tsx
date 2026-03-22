import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Brand Motion Graphics',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Product Showcase Animation',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    },
    {
      id: 'ZbZSe6N_BXs',
      title: 'UI Animation Demo Reel',
      thumbnail: 'https://img.youtube.com/vi/ZbZSe6N_BXs/maxresdefault.jpg',
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'Design Process Timelapse',
      thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
    },
  ];

  return (
    <>
      <section id="videos" className="py-16 sm:py-24 relative overflow-hidden bg-[var(--glass-bg)]/30">
        {/* Background Elements */}
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
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
                Visual Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-3">
              Motion & Animation 🎬
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Watch my design process and creative animations come to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-xl" />
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-xl font-bold group-hover:text-purple-500 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo || ''}
      />
    </>
  );
}
