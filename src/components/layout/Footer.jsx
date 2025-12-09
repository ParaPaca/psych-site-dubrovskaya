'use client';

import Image from 'next/image';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { useRef, useCallback } from 'react';
import { useGlobalMouseParallax } from '@/hooks/useGlobalMouseParallax';
import WhatsAppIcon from '../shared/WhatsAppIcon';
import TelegramIcon from '../shared/TelegramIcon';

const nav = [
  { label: 'Главная', href: '/', strong: true },
  { label: 'Услуги', href: '/#services' },
  { label: 'Формат работы', href: '/#format' },
  { label: 'Стоимость', href: '/#pricing' },
  { label: 'Образование', href: '/education' },
  { label: 'Информированное согласие', href: '/consent' },
  { label: 'FAQ', href: '/faq' },
];

export function Footer() {
  const blobRef = useRef(null);

  const handleParallax = useCallback(({ x, y }) => {
    const shift = 12;
    if (blobRef.current) {
      blobRef.current.style.transform = `translate3d(${x * shift}px, ${
        y * shift
      }px, 0)`;
      blobRef.current.style.transformOrigin = '50% 50%';
    }
  }, []);

  useGlobalMouseParallax(handleParallax);

  return (
    <footer className='relative'>
      <SectionContainer className='relative bg-white dark:bg-[#000000] pt-10 md:pt-10 pb-8 md:pb-16'>
        <div className='max-w-[650px] m-auto flex flex-col items-center justify-between gap-6 md:gap-8 rounded-[36px] max-md:rounded-xl bg-white/95 px-4 md:px-10 py-6 md:py-11 text-center shadow-[0_0px_48px_rgba(160,92,51,0.12)] dark:border-white/5 dark:bg-[#1E1E1E] md:flex-row md:text-left'>
          <div className='flex flex-col gap-3 md:gap-4 max-md:order-2'>
            <div>
              <h3 className='font-lora font-extrabold uppercase text-[#3B2C21] dark:text-[#ffffff] text-[clamp(1.25rem,1.107rem+0.714vw,1.75rem)] leading-tight'>
                Дубровская Яна
              </h3>
              <p className='text-[#4E3A2C] mt-2 dark:text-[#CDBBAC] text-[clamp(0.875rem,0.839rem+0.179vw,1rem)]'>
                Клинический психолог
              </p>
            </div>
            <nav aria-label='footer navigation' className='mt-2 md:mt-3'>
              <ul className='space-y-2'>
                {nav.map(({ label, href, strong }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`text-[#2D2824] dark:text-[#E9D9CC] leading-relaxed hover:underline underline-offset-2  ${
                        strong ? 'font-semibold' : 'font-normal'
                      }`}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='flex flex-col items-center gap-3 md:gap-4 max-md:order-1'>
            <div className='relative overflow-hidden rounded-full h-[clamp(7.063rem,6.402rem+3.304vw,9.375rem)] w-[clamp(7.063rem,6.402rem+3.304vw,9.375rem)]'>
              <Image
                src='/photoSmall.png'
                alt='Яна Дубровская'
                fill
                className='object-cover bg-[#F5E7DE]'
              />
            </div>
            <div className='flex justify-center items-center gap-2 md:gap-3'>
              <a
                href='https://t.me/yana_dubrovsk'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-[#D99460] text-white h-[clamp(2.5rem,2.286rem+1.071vw,3.25rem)] w-[clamp(2.5rem,2.286rem+1.071vw,3.25rem)] hover:brightness-95 transition'
                aria-label='Telegram'>
                <TelegramIcon className='h-[clamp(1.125rem,1.054rem+0.357vw,1.375rem)] w-[clamp(1.125rem,1.054rem+0.357vw,1.375rem)]' />
              </a>
              <a
                href='https://wa.me/79161418794'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-[#D99460] text-white h-[clamp(2.5rem,2.286rem+1.071vw,3.25rem)] w-[clamp(2.5rem,2.286rem+1.071vw,3.25rem)] hover:brightness-95 transition'
                aria-label='WhatsApp'>
                <WhatsAppIcon className='h-[clamp(1.125rem,1.054rem+0.357vw,1.375rem)] w-[clamp(1.125rem,1.054rem+0.357vw,1.375rem)]' />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-5 md:mt-8 flex flex-col items-center gap-2 md:gap-3 text-center'>
          <p className='text-[#6F6258] dark:text-[#BDAEA4] text-[clamp(0.75rem,0.714rem+0.179vw,0.875rem)]'>
            © {new Date().getFullYear()} Яна Дубровская
          </p>
          <a
            href='https://t.me/parapaca'
            target='_blank'
            rel='noreferrer'
            className='underline text-[#3B2C21] dark:text-[#E9D9CC] text-[clamp(0.75rem,0.714rem+0.179vw,0.875rem)]'>
            Создание сайта: TG parapaca
          </a>
        </div>
      </SectionContainer>
      <div className='relative w-full md:max-w-[1100px] m-auto'>
        <svg
          className='absolute bottom-10 right-[clamp(5rem,7.143rem+-4.464vw,3.125rem)] z-11 hidden md:block md:w-[clamp(6.25rem,4.821rem+2.976vw,7.5rem)] overflow-visible'
          width='209'
          height='170'
          viewBox='0 0 209 170'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          loading='lazy'
          aria-hidden='true'
          focusable='false'>
          <path
            ref={blobRef}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M206.686 80.671C196.912 57.1067 158.764 69.2253 137.566 54.9817C116.162 40.599 112.756 3.3143 87.1164 0.326867C59.4307 -2.89902 33.8157 18.2831 17.7349 41.0192C1.26734 64.3022 -2.40769 93.3597 1.34628 121.594C5.40449 152.117 11.8706 187.637 39.1419 202.026C65.6215 215.999 96.4969 197.833 124.204 186.421C145.098 177.816 161.414 163.749 175.299 145.948C190.743 126.147 216.295 103.837 206.686 80.671Z'
            fill='#E2823B'
          />
        </svg>
      </div>
    </footer>
  );
}
