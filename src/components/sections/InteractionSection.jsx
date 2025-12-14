'use client';

import { useRef, useCallback } from 'react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

const steps = [
  {
    number: '1',
    title: 'Запись на консультацию',
    description:
      'Я работаю с понедельника по субботу, с 11:00 до 22:00 (по МСК). Мы договариваемся о времени и формате связи, оплата — до начала сессии.',
  },
  {
    number: '2',
    title: 'Перед консультацией',
    description:
      'Ссылку на онлайн-сессию я присылаю за 10 минут до начала. Важно подготовить спокойное пространство и стабильный интернет.',
  },
  {
    number: '3',
    title: 'Первая консультация',
    description:
      'Мы уточняем ваш запрос — даже если он пока не сформулирован. Вместе наметим направление работы и шаги к изменениям.',
  },
  {
    number: '4',
    title: 'После встречи',
    description:
      'По желанию обсудим продолжение и удобный график. Буду благодарна за обратную связь — она помогает сделать сессии точнее и бережнее.',
  },
];

function ArrowSlot({ className = '', flip = false }) {
  return (
    <div
      className={`hidden md:flex shrink-0 items-center justify-center ${
        flip ? 'md:scale-x-[-1]' : ''
      } ${className}`}
      aria-hidden='true'>
      <div className='h-[clamp(2rem,1.571rem+2.143vw,3.5rem)] w-[clamp(4rem,3rem+5vw,7.5rem)]'>
        <svg
          className='w-[clamp(3.75rem,0.893rem+5.952vw,6.25rem)]'
          width='100'
          height='68'
          viewBox='0 0 100 68'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3 4.26198C31.5671 -0.358036 88.7012 5.18598 88.7012 64.3221M88.7012 64.3221L96.3459 48.8552M88.7012 64.3221L79.7577 48.8552'
            stroke='#D9642E'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
}

function StepCard({ number, title, description, className = '' }) {
  return (
    <div
      className={`relative w-full md:max-w-[583px] rounded-3xl bg-white/95 p-4 md:p-6 shadow-[0_15px_30px_rgba(160,92,51,0.2)] dark:bg-[#1F1F1F] ${className}`}>
      <div className='flex items-start gap-3 md:gap-4'>
        <div className='flex h-[clamp(2.25rem,2.107rem+0.714vw,2.75rem)] w-[clamp(2.25rem,2.107rem+0.714vw,2.75rem)] shrink-0 items-center justify-center rounded-full bg-[#F2DBC7] text-[#9C6B4F] dark:bg-[#3B2A1F] dark:text-[#F2C6A2]'>
          <span className='font-lora font-semibold text-[clamp(1rem,0.929rem+0.357vw,1.25rem)] leading-none'>
            {number}
          </span>
        </div>
        <div className='min-w-0'>
          <h3 className='font-lora font-semibold uppercase text-[#3B2C21] dark:text-[#F5E5DA] text-[clamp(1.063rem,1.009rem+0.268vw,1.25rem)] leading-tight '>
            {title}
          </h3>
          <p className='mt-2 md:mt-3 text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function InteractionSection() {
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
    <SectionContainer
      id='format'
      className='bg-white dark:bg-[#000000] max-md:pt-20 pb-50 md:pb-70'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='mt-2 md:mt-3 font-lora font-semibold uppercase text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)]'>
          Формат взаимодействия
        </h2>
      </div>

      <div className='md:hidden mx-auto mt-5 space-y-4'>
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>

      <div className='hidden md:flex md:flex-col md:gap-10 xl:gap-20 mt-8 md:mt-12'>
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex w-full items-center justify-start gap-[clamp(2.5rem,-0.357rem+5.952vw,5rem)] ${
              index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
            }`}>
            <StepCard {...step} />
            {index !== 3 ? (
              <ArrowSlot flip={index === 1 || index === 3} />
            ) : (
              <div className='relative'>
                <svg
                  className='md:block md:w-[clamp(5.625rem,1.411rem+8.78vw,9.313rem)] overflow-visible'
                  width='149'
                  height='158'
                  viewBox='0 0 149 158'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'>
                  <path
                    ref={(el) => blobRefs.current[0] = el}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M57.0468 49.8856C44.3918 51.8331 45.7386 71.8771 36.2615 80.5071C26.6918 89.2215 8.10999 86.4246 3.58869 98.5654C-1.2935 111.675 5.96965 126.694 15.13 137.25C24.5107 148.061 38.2356 153.326 52.4474 154.871C67.811 156.542 85.898 157.636 96.1726 146.063C106.149 134.826 100.985 117.604 98.7346 102.734C97.0376 91.5204 92.1312 81.8851 85.1139 72.9891C77.3082 63.0938 69.4878 47.971 57.0468 49.8856Z'
                    fill='#D9642E'
                  />
                  <path
                    ref={(el) => blobRefs.current[1] = el}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M140.924 21.2756C137.914 16.5927 130.19 20.6692 125.087 18.4293C119.935 16.1676 117.763 8.29201 112.141 8.6411C106.071 9.01806 101.388 14.5568 98.8132 20.0609C96.1762 25.6974 96.5097 32.0797 98.4069 37.9983C100.458 44.3965 103.219 51.7748 109.632 53.8114C115.858 55.7889 121.787 50.6946 127.296 47.1733C131.451 44.5179 134.412 40.8665 136.706 36.5071C139.257 31.658 143.883 25.8794 140.924 21.2756Z'
                    fill='#7C725E'
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(6.25rem,5.179rem+5.357vw,10rem)] overflow-hidden'>
        <svg
          viewBox='0 0 1100 120'
          preserveAspectRatio='xMidYMax slice'
          className='h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'>
          <path
            className='dark:fill-[#1B1B1B]'
            d='M0 241.155L0 50.129C58.2822 35.3953 116.564 20.6617 194.792 31.7905C273.019 42.9193 371.192 79.9107 455.278 67.7033C539.364 55.496 609.364 -5.9101 676.806 0.462298C744.247 6.83469 809.13 80.9855 879.236 100.56C949.342 120.134 1024.67 85.1314 1100 50.129V241.155H0Z'
            fill='#FFF3EC'
          />
        </svg>
      </div>
    </SectionContainer>
  );
}
