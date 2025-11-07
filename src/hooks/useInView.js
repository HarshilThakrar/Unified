import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for detecting when element enters viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isInView] - Ref to attach to element and visibility state
 */
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optionally unobserve after first intersection
          if (options.triggerOnce !== false) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isInView];
};

export default useInView;
