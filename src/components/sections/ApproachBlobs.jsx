'use client';

import { useCallback, useRef } from 'react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

export function ApproachBlobs() {
  const config = [
    { shiftX: 10, shiftY: 14, scale: 1.02 },
    { shiftX: -20, shiftY: 10, scale: 1.03 },
  ];

  const blobRefs = useRef([]);

  const handleParallax = useCallback(({ x, y }) => {
    blobRefs.current.forEach((el, i) => {
      if (!el) return;

      const cfg = config[i];
      el.style.transform = `
      translate3d(${x * cfg.shiftX}px, ${y * cfg.shiftY}px, 0)
      scale(${cfg.scale})
    `;
    });
  }, []);

  useGlobalMouseParallax(handleParallax);

  return (
    <div className='relative w-full md:max-w-[1100px] m-auto'>
      <svg
        className='absolute top-[-85px] left-[clamp(3.75rem,5.179rem+-2.976vw,2.5rem)] z-11 hidden md:block md:w-[clamp(8.75rem,0.179rem+17.857vw,16.25rem)] overflow-visible'
        width='316'
        height='278'
        viewBox='0 0 316 278'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        focusable='false'>
        <path
          ref={(el) => (blobRefs.current[0] = el)}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M288.393 153.037C278.014 137.253 251.948 151.361 234.553 143.942C216.988 136.45 209.337 109.802 190.272 111.187C169.687 112.682 153.994 131.644 145.452 150.413C136.704 169.633 138.063 191.279 144.711 211.296C151.898 232.934 161.53 257.873 183.363 264.556C204.563 271.045 224.501 253.548 243.071 241.402C257.074 232.244 266.991 219.748 274.62 204.873C283.106 188.328 298.597 168.554 288.393 153.037Z'
          fill='#D9642E'
        />
        <path
          ref={(el) => (blobRefs.current[1] = el)}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M44.5671 109.57C34.888 102.627 44.4433 86.5654 40.2138 75.416C35.943 64.1578 19.3497 58.6558 20.7097 46.6802C22.1782 33.7486 34.5261 24.3466 46.5698 19.4448C58.9032 14.4251 72.5061 15.8348 84.9472 20.5354C98.3965 25.617 113.863 32.3233 117.515 46.25C121.061 59.7724 109.527 71.8863 101.4 83.2756C95.2715 91.8641 87.1449 97.7923 77.5781 102.219C66.9367 107.142 54.0825 116.396 44.5671 109.57Z'
          fill='#7C725E'
        />
      </svg>
    </div>
  );
}
