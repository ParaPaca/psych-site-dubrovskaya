'use client';

import { useRef, useCallback } from 'react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

export function ContactsBlobs() {
  const config = [
    { shiftX: -20, shiftY: 10, scale: 1.03 },
    { shiftX: 10, shiftY: 14, scale: 1.02 },
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
        className='absolute top-0 left-[clamp(5rem,7.143rem+-4.464vw,3.125rem)] z-11 hidden md:block md:w-[clamp(7.5rem,3.929rem+7.44vw,10.625rem)] overflow-visible'
        width='179'
        height='218'
        viewBox='0 0 179 218'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        focusable='false'>
        <path
          ref={(el) => (blobRefs.current[0] = el)}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M55.5653 54.7438C63.3704 44.6694 80.166 55.5192 92.2532 51.4372C104.458 47.3153 110.996 29.7918 123.746 31.7183C137.513 33.7986 147.078 47.3713 151.844 60.4412C156.724 73.8255 154.68 88.3134 149.164 101.429C143.2 115.608 135.42 131.879 120.386 135.234C105.788 138.492 93.292 125.682 81.4358 116.544C72.4953 109.653 66.4778 100.73 62.123 90.3276C57.2789 78.7561 47.8922 64.6478 55.5653 54.7438Z'
          fill='#E2823B'
        />
        <path
          ref={(el) => (blobRefs.current[1] = el)}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.2573 161.14C20.9606 167.516 31.2933 164.146 37.0788 167.967C42.9208 171.826 43.9237 181.94 50.8917 182.697C58.4158 183.514 65.3265 177.709 69.6453 171.503C74.0679 165.148 75.0049 157.252 73.9265 149.596C72.7607 141.319 70.9307 131.69 63.4957 127.842C56.2766 124.105 47.9312 129.102 40.4318 132.259C34.7768 134.639 30.3758 138.492 26.6431 143.354C22.4911 148.762 15.5996 154.872 18.2573 161.14Z'
          fill='#7C725E'
        />
      </svg>
    </div>
  );
}
