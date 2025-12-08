'use client';

import { useEffect, useRef } from 'react';

export function useGlobalMouseParallax(onChange) {
  const frameRef = useRef(null);
  const reduceMotionQuery = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    reduceMotionQuery.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const shouldSkip = () =>
      window.innerWidth < 768 ||
      (reduceMotionQuery.current && reduceMotionQuery.current.matches);

    const handlePointerMove = (e) => {
      if (shouldSkip()) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(() => {
          onChange({ x, y });
          frameRef.current = null;
        });
      }
    };

    const handlePointerLeave = () => {
      onChange({ x: 0, y: 0 });
    };

    const handleReduceChange = () => {
      if (shouldSkip()) {
        onChange({ x: 0, y: 0 });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    reduceMotionQuery.current?.addEventListener('change', handleReduceChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      reduceMotionQuery.current?.removeEventListener(
        'change',
        handleReduceChange
      );
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [onChange]);
}
