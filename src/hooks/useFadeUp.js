import { useEffect, useRef } from 'react';

/**
 * Returns a ref to attach to any element.
 * When that element enters the viewport, the class "visible" is added to it,
 * which triggers the CSS fade-up transition defined in index.css.
 */
export function useFadeUp(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('fade-up');
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

export default useFadeUp;
