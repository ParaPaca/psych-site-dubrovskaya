'use client';

import WhatsAppIcon from '@/components/shared/WhatsAppIcon';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';
import { useRef, useCallback } from 'react';
import TelegramIcon from '../shared/TelegramIcon';

const contacts = [
  {
    href: 'https://t.me/yana_dubrovsk',
    label: 'Telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://wa.me/79161418794',
    label: 'WhatsApp',
    icon: WhatsAppIcon,
  },
];

export function ContactsSection() {
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
    <div className='relative'>
      <div className='relative w-full md:max-w-[1100px] m-auto'>
        <svg
          className='absolute top-0 left-[clamp(5rem,7.143rem+-4.464vw,3.125rem)] z-11 hidden md:block md:w-[clamp(7.5rem,3.929rem+7.44vw,10.625rem)] overflow-visible'
          width='179'
          height='218'
          viewBox='0 0 179 218'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
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
      <SectionContainer
        id='contacts'
        className='relative bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pt-20 max-md:pb-50 md:pb-60 bg-linear-to-b from-[#FFF3EC] to-[#F9DDC9] dark:from-[#1B1B1B] dark:to-[#000000]/20'>
        <div className='mx-auto text-center max-w-[680px]'>
          <h2 className='uppercase font-lora font-semibold text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)] '>
            Буду рада ответить на ваши вопросы
          </h2>
          <p className='mt-3 md:mt-6 text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
            Напишите в удобном мессенджере — договоримся о консультации или
            обсудим, как могу быть полезна.
          </p>
        </div>
        <div className='mx-auto mt-5 md:mt-10 flex flex-col items-center gap-3 md:gap-4 md:flex-row md:justify-center'>
          {contacts.map(({ href, label, icon: Icon }) => (
            <Button
              key={label}
              asChild
              className='min-w-[172px] group h-auto rounded-full bg-white/95 px-5 md:px-8 py-3 md:py-4 text-md font-semibold text-[#3B2C21] shadow-[0_16px_38px_rgba(160,92,51,0.1)] transition hover:-translate-y-px hover:text-[#ffffff] hover:bg-[#E2823A] dark:bg-[#000000]/50 dark:text-[#F5E5DA] dark:hover:bg-[#34261D]'
              variant='ghost'>
              <a href={href} target='_blank' rel='noreferrer'>
                <span className='flex items-center gap-3'>
                  <Icon className='group-hover:text-[#ffffff] transition h-[clamp(1rem,0.929rem+0.357vw,1.25rem)] w-[clamp(1rem,0.929rem+0.357vw,1.25rem)] text-[#E17737] dark:text-[#F2C6A2]' />
                  {label}
                </span>
              </a>
            </Button>
          ))}
        </div>
        <p className='mt-10 md:mt-12 text-center text-[#8D7768] dark:text-[#BDAEA4]'>
          Берегите себя, и до связи 💛
        </p>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(6.25rem,5.179rem+5.357vw,9rem)] overflow-hidden'>
          <svg
            aria-hidden='true'
            viewBox='0 0 1100 120'
            preserveAspectRatio='xMidYMax slice'
            className='h-full w-full'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='dark:fill-[#000000]'
              d='M0 122.022V23.8078C46.1918 13.2801 92.3836 2.75246 151.25 1.41491C210.116 0.077357 281.657 7.92991 332.292 6.91491C382.926 5.8999 412.653 -3.98266 458.333 1.80776C504.013 7.59819 565.646 29.0616 630.208 31.2721C694.77 33.4825 762.262 16.44 812.014 7.70062C861.766 -1.03873 893.778 -1.47491 938.819 2.59348C983.861 6.66186 1041.93 15.2348 1100 23.8078V122.022H0Z'
              fill='#ffffff'
            />
          </svg>
        </div>
      </SectionContainer>
    </div>
  );
}
