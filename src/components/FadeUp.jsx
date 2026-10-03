import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

/**
 * Wraps children in a div that fades up when it enters the viewport.
 * Usage: <FadeUp delay={150}>...</FadeUp>
 */
function FadeUp({ children, delay = 0, style = {}, className = '' }) {
  const ref = useFadeUp(delay);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default FadeUp;
