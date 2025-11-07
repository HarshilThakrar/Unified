import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Full width video section with centered play button
 */
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden" data-cursor="video">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        data-cursor="video"
        preload="none"
      >
        <source src="/building-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
          onClick={handlePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          data-cursor="video"
        >
          <motion.button
            className="w-24 h-24 md:w-32 md:h-32 bg-transparent border-2 border-[#0095AA] rounded-full flex items-center justify-center hover:border-[#0095AA] transition-all duration-300"
            style={{ borderColor: '#0095AA' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Play Video"
            data-cursor="play-video"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-primary ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        </motion.div>
      )}

      {/* Pause Button (when playing) */}
      {isPlaying && (
        <motion.div
          className="absolute bottom-8 right-8 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
            onClick={handlePause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Pause Video"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;

