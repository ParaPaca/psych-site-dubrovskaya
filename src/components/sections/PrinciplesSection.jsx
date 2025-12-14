'use client';

import { SectionContainer } from '@/components/shared/SectionContainer';
import { useRef, useCallback } from 'react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';

const principles = {
  confidentiality: {
    title: 'Конфиденциальность',
    description:
      'Всё, что вы рассказываете, остаётся между нами. Я поддерживаю пространство безопасности и доверия.',
  },
  openness: {
    title: 'Открытость и искренность',
    description:
      'Мы говорим честно и мягко. Ценности, эмоции и ожидания проговариваются — это основа для изменений и опоры.',
  },
  nonjudgment: {
    title: 'Безоценочное отношение',
    description:
      'В кабинете нет «правильно» и «неправильно». Мы исследуем опыт, не критикуя себя за чувства и действия.',
  },
  individual: {
    title: 'Индивидуальный подход',
    description:
      'Каждый запрос уникален. Мы подбираем техники под вашу скорость изменений и уровень ресурса.',
  },
};

function Card({ title, description }) {
  return (
    <div className='group relative overflow-hidden rounded-3xl max-md:rounded-xl bg-white/95 p-4 md:p-6 transition md:hover:-translate-y-0.5 md:hover:shadow-[0_15px_30px_rgba(160,92,51,0.35)] dark:bg-[#000000] shadow-[0_10px_25px_rgba(160,92,51,0.2)] backdrop-blur text-balance'>
      <div className='absolute inset-x-6 top-0 h-1 rounded-b-full bg-linear-to-r from-[#F4A35F] via-[#E97737] to-[#C66A44] opacity-80' />
      <h3 className='font-lora font-semibold text-[#3B2C21] dark:text-[#F5E5DA] text-[clamp(1.125rem,1.089rem+0.179vw,1.25rem)] leading-tight'>
        {title}
      </h3>
      <p className='mt-2 md:mt-3 text-[#4E3A2C] dark:text-[#D4C2B9] leading-relaxed'>
        {description}
      </p>
    </div>
  );
}

export function PrinciplesSection() {
  const { confidentiality, openness, nonjudgment, individual } = principles;
  const blobRef = useRef(null);

  const handleParallax = useCallback(({ x, y }) => {
    const shift = 12;
    if (blobRef.current) {
      blobRef.current.style.transform = `translate3d(${x * shift}px, ${
        y * shift
      }px, 0)`;
      blobRef.current.style.transformOrigin = '20% 50%';
    }
  }, []);

  useGlobalMouseParallax(handleParallax);

  return (
    <SectionContainer
      id='principles'
      className='bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pb-10 md:pb-10'>
      <div className='mx-auto text-left'>
        <h2 className='mt-2 md:mt-3 font-lora font-semibold text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)] uppercase'>
          Принципы моей работы
        </h2>
      </div>
      <div className='md:hidden relative mt-5'>
        <div
          className='flex snap-x snap-mandatory overflow-x-auto gap-3 px-4 -mr-4 pb-8'
          aria-label='Свайпайте вправо, чтобы увидеть больше'>
          {[confidentiality, openness, nonjudgment, individual].map((item) => (
            <div key={item.title} className='min-w-[85%] snap-start'>
              <Card {...item} />
            </div>
          ))}
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <div className='flex items-center gap-1 text-[#A07256] dark:text-[#E7C2A8] opacity-60 w-[50px] overflow-visible'>
            <svg
              width='87'
              height='26'
              viewBox='0 0 87 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              focusable='false'>
              <path
                d='M83.7936 11.5003C83.7936 11.5003 62.9932 15.5003 42.9932 11.5003C22.9932 7.50032 3.00049 11.5003 3.00049 11.5003M83.7936 11.5003L73.8971 22.4039M83.7936 11.5003L71.4932 3.00022'
                stroke='#D9642E'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='relative mt-14 hidden md:grid md:grid-cols-2 md:gap-6 xl:gap-8'>
        <Card {...confidentiality} />
        <div>
            <svg
              className='absolute top-[-30px] right-[50px] z-11 hidden md:block md:w-[clamp(5rem,3.571rem+2.976vw,6.25rem)] overflow-visible'
              width='102'
              height='104'
              viewBox='0 0 102 104'
              fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            focusable='false'>
            <path
              ref={blobRef}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M98.6602 81.4606C90.8542 91.3751 74.3033 80.5011 62.3021 84.4488C50.1838 88.435 43.5769 105.735 30.9648 103.728C17.346 101.561 7.97652 88.0475 3.35619 75.0689C-1.37528 61.7781 0.758705 47.4485 6.32131 34.5046C12.3348 20.5116 20.1631 4.46123 35.077 1.25629C49.5578 -1.85561 61.8363 10.9255 73.5085 20.0663C82.3103 26.9592 88.2019 35.8408 92.4358 46.1754C97.1452 57.6709 106.334 71.7137 98.6602 81.4606Z'
              fill='#7C725E'
            />
          </svg>
        </div>
        <Card {...openness} />
        <Card {...nonjudgment} />
        <div />
        <Card {...individual} />
      </div>
    </SectionContainer>
  );
}
