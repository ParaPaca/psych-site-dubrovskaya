'use client';

import { useCallback, useRef } from 'react';

import { SectionContainer } from '@/components/shared/SectionContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

const programs = [
  {
    id: 'cbt',
    title: 'Когнитивно-поведенческая терапия (КПТ)',
    description:
      'Помогает замечать автоматические мысли и привычные реакции, менять стратегии поведения и формировать устойчивые навыки самоподдержки.',
  },
  {
    id: 'schema',
    title: 'Схема-терапия',
    description:
      'Исследуем глубинные жизненные сценарии, с которыми вы идёте по жизни, и смотрим, как заменить их на более поддерживающие.',
  },
  {
    id: 'emdr',
    title: 'EMDR-терапия',
    description:
      'Работаю с травматическим опытом и болезненными воспоминаниями, мягко снижая интенсивность переживаний и возвращая контроль.',
  },
  {
    id: 'art',
    title: 'Арт-терапия, метафоры, трансовые техники',
    description:
      'Использую творческие и телесно-ориентированные подходы, когда слов не хватает. Это расширяет доступ к чувствам и ресурсам.',
  },
];

export function ApproachSection() {
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
    <div className='relative'>
      <div className='relative w-full md:max-w-[1100px] m-auto'>
        <svg
          className='absolute top-[-85px] left-[clamp(3.75rem,5.179rem+-2.976vw,2.5rem)] z-11 hidden md:block md:w-[clamp(8.75rem,0.179rem+17.857vw,16.25rem)] overflow-visible'
          width='316'
          height='278'
          viewBox='0 0 316 278'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
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
      <SectionContainer
        id='approach'
        className='relative bg-white dark:bg-[#000000] max-md:pt-40 md:pb-25 max-md:pb-20'>
        <div className='pointer-events-none absolute inset-x-0 top-0 z-0 h-[clamp(6.25rem,5.179rem+5.357vw,10rem)] overflow-hidden'>
          <svg
            viewBox='0 0 1100 120'
            preserveAspectRatio='xMidYMax slice'
            className='h-full w-full'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='dark:fill-[#1B1B1B]'
              d='M1100 -121V70.0256C1041.72 84.7592 983.436 99.4929 905.208 88.364C826.981 77.2352 728.808 40.2439 644.722 52.4512C560.636 64.6586 490.636 126.065 423.194 119.692C355.753 113.32 290.87 39.169 220.764 19.5948C150.658 0.0206146 75.329 35.0231 0 70.0256V-121L1100 -121Z'
              fill='#FFF3EC'
            />
          </svg>
        </div>

        <div className='relative grid gap-5 md:gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:pt-28 xl:pt-40 pt-10'>
          <div>
            <div className='text-left'>
              <h2 className=' font-lora font-semibold uppercase text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)]'>
                Мой подход
              </h2>
            </div>

            <h3 className='mt-3 md:mt-4 font-lora font-semibold text-[#322820] dark:text-white text-[clamp(1.125rem,1.089rem+0.179vw,1.25rem)] leading-normal'>
              Индивидуально. Научно. Бережно.
            </h3>

            <div className='mt-1 md:mt-6 space-y-2 md:space-y-4 text-[#4E3A2C] dark:text-[#D4C2B9]'>
              <p className='leading-relaxed '>
                Работаю с современными методами доказательной психотерапии и
                помогаю возвращать себе чувство опоры и устойчивости.
              </p>
              <p className='leading-relaxed '>
                Вместе исследуем, что важно именно вам, и выбираем те
                инструменты, которые подходят вашей скорости и чувствительности.
              </p>
            </div>
          </div>

          <div className='rounded-3xl bg-[#FFF7F2]/90 p-4 md:p-6 shadow-[0_15px_30px_rgba(160,92,51,0.2)] dark:border-white/5 dark:bg-[#1E1E1E]/90'>
            <Accordion type='single' collapsible defaultValue='cbt'>
              {programs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className='border-none'>
                  <AccordionTrigger className='font-lora text-left font-semibold text-[#3B2C21] dark:text-[#F5E5DA] text-[clamp(1.125rem,1.089rem+0.179vw,1.25rem)] leading-normal  py-2 md:py-3'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className='text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
