import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import { ConsultationBlob } from './ConsultationBlob';

export function ConsultationSection() {
  return (
    <div className='relative'>
      <ConsultationBlob />
      <SectionContainer
        id='pricing'
        className='relative bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pt-14 max-md:pb-20 md:pb-40 xl:pb-20 md:pt-10'>
        <div className='mx-auto max-w-[680px] text-center'>
          <h2 className='mt-3 md:mt-4 font-lora uppercase font-semibold text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)]'>
            Индивидуальная консультация
          </h2>
          <p className='mx-auto mt-4 md:mt-6 max-w-xl text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
            Работаю очно в Москве и онлайн. Удобный формат — по Zoom, Meet или в
            Telegram. После сессии сохраняю для вас ключевые выводы и
            упражнения.
          </p>
        </div>

        <div className='flex flex-col mx-auto mt-8 md:mt-12 w-full max-w-[640px] rounded-[36px] bg-white/95 p-5 md:p-8 shadow-[0_15px_30px_rgba(160,92,51,0.2)] dark:bg-[#0E0E0E]'>
          <div className='flex flex-col items-center gap-4 md:gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left'>
            <div>
              <div className='flex items-center justify-center md:justify-start gap-2 md:gap-3'>
                <Video
                  className='h-[clamp(1.125rem,1.018rem+0.536vw,1.5rem)] w-[clamp(1.125rem,1.018rem+0.536vw,1.5rem)] text-[#E17737] dark:text-[#F2C6A2]'
                  strokeWidth={0}
                  fill='currentColor'
                />
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
            className='w-max rounded-full px-10 md:px-12 py-4 md:py-5 text-[clamp(1rem,0.982rem+0.089vw,1.063rem)] font-semibold text-white transition bg-[#E08A48] hover:bg-[#CF7A39] dark:bg-[#F4B26E] dark:text-[#2B1F17] dark:hover:bg-[#F2C080] mx-auto mt-8'
            asChild>
            <a href='#contacts'>Связаться со мной</a>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
