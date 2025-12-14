'use client';

import { useRef, useCallback } from 'react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

export function ConsultationBlob() {
  const blobRef = useRef(null);

  const handleParallax = useCallback(({ x, y }) => {
    const shiftX = 10;
    const shiftY = -20;
    if (blobRef.current) {
      blobRef.current.style.transform = `translate3d(${x * shiftX}px, ${
        y * shiftY
      }px, 0)`;
      blobRef.current.style.transformOrigin = '50% 50%';
    }
  }, []);

  useGlobalMouseParallax(handleParallax);

  return (
    <div className='relative w-full md:max-w-[1100px] m-auto'>
      <svg
        className='absolute top-[-100px] right-[clamp(3.75rem,5.179rem+-2.976vw,2.5rem)] z-11 hidden md:block md:w-[clamp(6.875rem,4.375rem+5.208vw,9.063rem)] overflow-visible'
        width='145'
        height='144'
        viewBox='0 0 145 144'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        focusable='false'>
        <path
          ref={blobRef}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M143.03 55.8253C136.266 39.5185 109.867 47.9047 95.1979 38.048C80.3857 28.095 78.0285 2.29346 60.2858 0.226117C41.1269 -2.00623 23.401 12.6521 12.2729 28.3857C0.877116 44.4979 -1.66604 64.6061 0.931741 84.1447C3.74008 105.267 8.21474 129.847 27.0868 139.805C45.411 149.474 66.7772 136.903 85.951 129.006C100.41 123.051 111.701 113.316 121.309 100.998C131.997 87.2953 149.679 71.8565 143.03 55.8253Z'
          fill='#E2823B'
        />
      </svg>
    </div>
  );
}
