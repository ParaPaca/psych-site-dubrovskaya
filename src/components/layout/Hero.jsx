'use client';

import { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

export default function Hero() {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  const shift1 = 18;
  const shift2 = 26;
  const shift3 = 22;
  const maskPath =
    'M359.678 343.961C330.647 418.46 276.879 449.161 198.374 436.062C119.868 422.963 63.8517 385.713 30.3234 324.313C-3.20491 262.912 -8.92925 191.482 13.1504 110.024C35.23 28.5657 90.6334 -7.66074 179.361 1.3447C268.088 10.3501 327.58 51.0793 357.838 123.532C388.095 195.985 388.708 269.461 359.678 343.961Z';
  const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 439"><path d="${maskPath}" fill="white"/></svg>`;
  const maskUrl = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

  const updateBlobsTransform = useCallback(({ x, y }) => {
    if (blob1Ref.current) {
      blob1Ref.current.style.transform = `translate3d(${x * shift1}px, ${
        y * shift1
      }px, 0) scale(1.02)`;
      blob1Ref.current.style.transformOrigin = '50% 50%';
    }

    if (blob2Ref.current) {
      blob2Ref.current.style.transform = `translate3d(${x * -shift2}px, ${
        y * -shift2
      }px, 0) scale(1.03)`;
      blob2Ref.current.style.transformOrigin = '50% 50%';
    }

    if (blob3Ref.current) {
      blob3Ref.current.style.transform = `translate3d(${x * shift3}px, ${
        y * -shift3
      }px, 0) scale(1.02)`;
      blob3Ref.current.style.transformOrigin = '50% 50%';
    }
  }, []);

  useGlobalMouseParallax(updateBlobsTransform);

  useEffect(() => {
    return () => {
      [blob1Ref.current, blob2Ref.current, blob3Ref.current].forEach((el) => {
        if (el) {
          el.style.transform = 'translate3d(0px, 0px, 0) scale(1)';
        }
      });
    };
  }, []);

  return (
    <div className='relative'>
      <div className='relative w-full md:max-w-[1100px] m-auto'>
        <svg
          className='absolute top-[clamp(21.875rem,14.732rem+14.881vw,28.125rem)] right-[clamp(3.75rem,5.179rem+-2.976vw,2.5rem)] z-11 hidden md:block md:w-[clamp(8.75rem,3.036rem+11.905vw,13.75rem)] will-change-transform overflow-visible'
          viewBox='0 0 260 590'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          loading='lazy'
          focusable='false'>
          <path
            ref={blob1Ref}
            className='transition-transform duration-100'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M210.437 502.48C201.13 500.002 196.007 514.219 186.872 517.304C177.648 520.42 165.689 512.883 158.908 519.884C151.587 527.443 152.058 539.984 155.183 550.023C158.383 560.303 166.25 568.074 175.576 573.429C185.657 579.218 197.79 585.432 208.363 580.559C218.629 575.828 220.269 562.403 223.208 551.478C225.424 543.239 224.952 535.119 222.802 526.871C220.411 517.697 219.588 504.916 210.437 502.48Z'
            fill='#D9642E'
          />
          <path
            ref={blob2Ref}
            className='transition-transform duration-100'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M88.8086 166.857C111.795 171.429 107.726 207.952 124.366 224.482C141.168 241.174 175.373 237.55 182.669 260.1C190.547 284.449 176.061 311.314 158.464 329.873C140.443 348.878 114.922 357.402 88.8086 359.088C60.5788 360.911 27.4148 361.463 9.55261 339.49C-7.79105 318.155 3.03216 287.095 8.33886 260.1C12.3405 239.743 22.0849 222.528 35.6304 206.832C50.6976 189.373 66.2106 162.362 88.8086 166.857Z'
            fill='#E2823B'
          />
          <path
            ref={blob3Ref}
            className='transition-transform duration-100'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M133.366 50.9089C141.431 39.88 159.754 51.0084 172.587 46.2741C185.544 41.4937 192.029 22.519 205.751 24.2045C220.568 26.0245 231.222 40.2862 236.718 54.1516C242.347 68.3506 240.587 83.9383 235.065 98.1587C229.095 113.532 221.241 131.201 205.229 135.244C189.682 139.169 175.908 125.812 162.93 116.372C153.143 109.252 146.429 99.8689 141.452 88.8495C135.917 76.5923 125.437 61.7514 133.366 50.9089Z'
            fill='#7C725E'
          />
        </svg>
      </div>
      <SectionContainer
        id='main'
        className='relative z-10 bg-white dark:bg-black max-md:pt-10 max-md:pb-30 md:pb-60'>
        <div className='relative overflow-visible px-0'>
          <div className='flex flex-col gap-4 md:gap-8 xl:gap-12 md:flex-row md:items-center md:justify-between'>
            <div className='order-2 w-full md:order-1 md:w-auto'>
              <div
                className='relative mx-auto w-[clamp(11.25rem,9.107rem+10.714vw,18.75rem)] aspect-381/439 overflow-hidden'
                style={{
                  maskImage: maskUrl,
                  WebkitMaskImage: maskUrl,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}>
                <Image
                  src='/photoBig.png'
                  alt='Яна Дубровская'
                  fill
                  className='object-cover bg-[#F5E7DE] dark:bg-[#1B1B1B]'
                  priority
                  sizes="(min-width: 1100px) 300px, (min-width: 768px) 240px, 180px"
                />
              </div>
            </div>

            <div className='contents md:flex md:flex-col md:order-2 md:flex-1 md:min-w-0'>
              <div className='order-1 w-full text-center md:order-0 md:text-left'>
                <p className='mt-1 leading-normal text-[clamp(0.875rem,0.804rem+0.357vw,1.125rem)] text-[#4E3A2C] dark:text-[#D4C2B9]'>
                  <span className='block'>Клинический психолог.</span>
                  <span className='block'>КПТ, Схема-терапия, EMDR</span>
                </p>
                <h1 className='mt-1 md:mt-2 font-lora font-extrabold uppercase leading-tight text-[clamp(1.75rem,1.393rem+1.786vw,3rem)] text-[#33251B] dark:text-white'>
                  Яна Дубровская
                </h1>
              </div>

              <div className='order-3 w-full text-center md:order-0 md:text-left'>
                <p className='mx-auto mt-4 md:mt-6 max-w-[52ch] text-[clamp(1.063rem,1.045rem+0.089vw,1.125rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9] md:mx-0'>
                  Помогаю людям находить опору в себе, справляться с тревогой,
                  улучшать отношения и достигать личных целей.
                </p>
                <div className='mt-5 md:mt-8 flex flex-col items-center gap-3 md:gap-4 md:flex-row md:items-center md:justify-start'>
                  <Button
                    className='w-max rounded-full px-10 md:px-12 py-4 md:py-5 text-[clamp(1rem,0.982rem+0.089vw,1.063rem)] font-semibold text-white transition bg-[#E08A48] hover:bg-[#CF7A39] dark:bg-[#F4B26E] dark:text-[#2B1F17] dark:hover:bg-[#F2C080] md:w-auto'
                    asChild>
                    <a href='#contacts'>Связаться со мной</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(6.563rem,5.58rem+4.911vw,10rem)] overflow-hidden'>
          <svg
            aria-hidden='true'
            viewBox='0 0 1100 105'
            preserveAspectRatio='xMidYMax meet'
            className='h-full w-full block'
            xmlns='http://www.w3.org/2000/svg'
            focusable='false'>
            <g clipPath='url(#clip0_36_357)'>
              <path
                className='dark:fill-[#1B1B1B]'
                d='M0 237.556V46.5833C84.6272 69.9824 169.254 93.3815 234.514 88.5972C299.773 83.8128 345.665 50.845 423.958 35.1249C502.251 19.4049 612.946 20.9327 689.792 30.5416C766.637 40.1505 809.635 57.8406 872.361 61.8611C935.088 65.8815 1017.54 56.2324 1100 46.5833V237.556H0Z'
                fill='#FFF3EC'
              />
            </g>
          </svg>
        </div>
      </SectionContainer>
    </div>
  );
}
