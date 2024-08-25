import { useEffect, useRef, useState } from 'react';

function rafDebounce(fn) {
  let animationFrameId = null;
  return (...args) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animationFrameId = requestAnimationFrame(() => {
      fn(...args);
    });
  };
}

export function useResizeObserver(ref) {
  const [dimensions, setDimensions] = useState(null);
  const resizeObserver = useRef(null);

  useEffect(() => {
    const observeTarget = ref.current;
    const debouncedCallback = rafDebounce(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });

    resizeObserver.current = new ResizeObserver(debouncedCallback);

    if (observeTarget) resizeObserver.current.observe(observeTarget);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [ref]);

  return dimensions;
}