'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='relative flex min-h-screen flex-col bg-[#F5D1BA] text-[#33251B] dark:bg-[#0F0D0C] dark:text-[#F5E5DA] z-0'>
      <Header />
      <main>
        <SectionContainer className='relative z-10 bg-white dark:bg-black max-md:pt-16 md:pt-16 max-md:pb-[clamp(12.5rem,8.036rem+22.321vw,18.75rem)] md:pb-[clamp(18.75rem,11.607rem+14.881vw,25rem)]'>
          <div className='relative px-0'>
            <div className='mb-6 md:mb-8'>
              <h1 className='font-lora font-bold uppercase leading-tight text-[clamp(1.75rem,1.393rem+1.786vw,3rem)] text-[#33251B] dark:text-white '>
                Что-то пошло не так
              </h1>
            </div>

            <div className='max-w-184 space-y-4'>
              <p className='text-[clamp(0.938rem,0.884rem+0.268vw,1.125rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9] '>
                Произошла непредвиденная ошибка. Попробуйте обновить страницу.
              </p>
              <p className='text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9] '>
                Если ошибка повторяется, вы можете вернуться на главную или
                связаться со мной через раздел контактов.
              </p>

              <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Button
                  type='button'
                  onClick={() => reset()}
                  className='inline-flex items-center gap-2 rounded-full px-6 py-3 text-[clamp(0.938rem,0.902rem+0.179vw,1.063rem)] font-semibold bg-[#E08A48] text-white hover:bg-[#CF7A39] dark:bg-[#F4B26E] dark:text-[#2B1F17] dark:hover:bg-[#F2C080]'>
                  <RotateCcw className='h-4 w-4' />
                  Попробовать снова
                </Button>

                <Button
                  asChild
                  variant='outline'
                  className='inline-flex items-center gap-2 rounded-full border-[#C89A78] bg-transparent px-6 py-3 text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] font-medium text-[#4E3A2C] hover:bg-[#F5E2D4] dark:border-[#3D3027] dark:text-[#F5E5DA] dark:hover:bg-[#1C1511]'>
                  <a href='/'>
                    На главную
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className='pointer-events-none absolute inset-x-0 bottom-[100px] z-0 overflow-hidden'>
            <svg
              width='1100'
              height='178'
              viewBox='0 0 1100 178'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full w-full'
              preserveAspectRatio='xMidYMax slice'
              aria-hidden='true'
              focusable='false'>
              <path
                d='M455.277 67.7035C539.364 55.4961 609.364 -5.91012 676.806 0.46228C744.247 6.83476 809.13 80.9848 879.236 100.559C949.342 120.133 1024.67 85.1308 1100 50.1283V127.87C1041.72 142.604 983.435 157.337 905.208 146.208C826.981 135.08 728.809 98.0882 644.723 110.295C560.636 122.503 490.636 183.909 423.194 177.536C355.753 171.164 290.87 97.014 220.764 77.4398C150.658 57.8657 75.3289 92.868 0 127.87V50.1283C58.2821 35.3947 116.565 20.6616 194.792 31.7904C273.019 42.9193 371.191 79.9106 455.277 67.7035Z'
                fill='#F5D2BA'
                className='dark:fill-[#0F0D0C]'
              />
            </svg>
          </div>
        </SectionContainer>
        <Footer />
      </main>
    </div>
  );
}
