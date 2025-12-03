'use client';

import { useRef, useCallback } from 'react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

export function ConsultationSection() {
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
    <div className='relative'>
      <div className='relative w-[100%] md:max-w-[1100px] m-auto'>
        <svg
          className='absolute top-[-100px] right-[clamp(3.75rem,5.179rem+-2.976vw,2.5rem)] z-11 hidden md:block md:w-[clamp(6.875rem,4.375rem+5.208vw,9.063rem)] overflow-visible'
          width='145'
          height='144'
          viewBox='0 0 145 144'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            ref={blobRef}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M143.03 55.8253C136.266 39.5185 109.867 47.9047 95.1979 38.048C80.3857 28.095 78.0285 2.29346 60.2858 0.226117C41.1269 -2.00623 23.401 12.6521 12.2729 28.3857C0.877116 44.4979 -1.66604 64.6061 0.931741 84.1447C3.74008 105.267 8.21474 129.847 27.0868 139.805C45.411 149.474 66.7772 136.903 85.951 129.006C100.41 123.051 111.701 113.316 121.309 100.998C131.997 87.2953 149.679 71.8565 143.03 55.8253Z'
            fill='#E2823B'
          />
        </svg>
      </div>
      <SectionContainer
        id='pricing'
        className='relative bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pt-14 max-md:pb-20 md:pb-40 xl:pb-20 md:pt-10'>
        <div className='mx-auto max-w-[680px] text-center'>
          <h2 className='mt-3 md:mt-4 font-lora uppercase font-semibold text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)]'>
            Индивидуальная консультация
          </h2>
          <p className='mx-auto mt-4 md:mt-6 max-w-[576px] text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
            Работаю очно в Москве и онлайн. Удобный формат — по Zoom, Meet или в
            Telegram. После сессии сохраняю для вас ключевые выводы и
            упражнения.
          </p>
        </div>

        <div className='flex flex-col mx-auto mt-8 md:mt-12 w-full max-w-[640px] rounded-[36px] bg-white/95 p-5 md:p-8 shadow-[0_15px_30px_rgba(160,92,51,0.2)] dark:bg-[#000000]/50'>
          <div className='flex flex-col items-center gap-4 md:gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left'>
            <div>
              <div className='flex items-center justify-center md:justify-start gap-2 md:gap-3'>
                <Video className='h-[clamp(1.125rem,1.018rem+0.536vw,1.5rem)] w-[clamp(1.125rem,1.018rem+0.536vw,1.5rem)] text-[#E17737] dark:text-[#F2C6A2]' />
                <h3 className='font-lora font-semibold text-[#3B2C21] dark:text-[#F5E5DA] text-[clamp(1.125rem,1.089rem+0.179vw,1.25rem)] leading-tight'>
                  Онлайн-формат
                </h3>
              </div>
              <p className='mt-2 md:mt-3 text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
                Zoom, Meet, WhatsApp, Telegram
              </p>
            </div>
            <div className='text-center md:text-right'>
              <p className='font-lora font-semibold text-[#E17737] dark:text-[#F4B26E] leading-relaxed text-[clamp(1.75rem,1.607rem+0.714vw,2.25rem)]'>
                4000 ₽/час
              </p>
            </div>
          </div>

          <Button
            className='w-max rounded-full px-10 md:px-12 py-4 md:py-[20px] text-[clamp(1rem,0.982rem+0.089vw,1.063rem)] font-semibold text-white transition bg-[#E08A48] hover:bg-[#CF7A39] dark:bg-[#F4B26E] dark:text-[#2B1F17] dark:hover:bg-[#F2C080] mx-auto mt-8'
            asChild>
            <a href='#contacts'>Связаться со мной</a>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
