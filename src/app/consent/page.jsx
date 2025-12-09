import { SectionContainer } from '@/components/shared/SectionContainer';
import { Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata() {
  return buildMetadata({
    title: 'Информированное согласие — Яна Дубровская',
    description:
      'Условия работы: конфиденциальность, оплата, отмена, формат сессий и совместные ожидания.',
    path: '/consent',
  });
}

const consentItems = [
  {
    title: 'ОТКРЫТОСТЬ',
    text: [
      'Вы сами определяете, чем готовы делиться. На любой вопрос можно ответить: «Я пока не хочу об этом говорить».',
    ],
  },
  {
    title: 'КОНФИДЕНЦИАЛЬНОСТЬ',
    text: [
      'Всё, что обсуждается на сессии, остаётся между нами.',
      'Исключения возможны только в случае угрозы жизни или здоровью. Для супервизии используется обезличенная информация — только с вашего согласия.',
    ],
  },
  {
    title: 'ФОРМАТ И СЕТТИНГ',
    text: [
      'Сессия длится 50 минут и проходит онлайн.',
      'При опоздании время не продлевается. Для работы важно выбрать удобное пространство с устойчивым интернетом. Вы можете вести записи или фиксировать заметки между встречами.',
    ],
  },
  {
    title: 'ОПЛАТА',
    text: [
      'Стоимость сессии — 4000 ₽.',
      'Оплата производится заранее. При неоплате встреча не проводится.',
    ],
  },
  {
    title: 'АЛКОГОЛЬ И ВЕЩЕСТВА',
    text: [
      'Обе стороны обязуются не употреблять алкоголь и психоактивные вещества (за исключением необходимых по медицинским показаниям) за 12 часов до сессии.',
    ],
  },
  {
    title: 'ПЕРЕРЫВЫ',
    text: [
      'Сессии проходят без пауз, за исключением кратких — по взаимному согласию.',
    ],
  },
  {
    title: 'СОТРУДНИЧЕСТВО',
    text: [
      'Терапия строится на активном участии обеих сторон.',
      'Вы можете задавать вопросы, давать обратную связь и обсуждать, как сделать работу более точной и полезной.',
    ],
  },
  {
    title: 'ТЕЛЕФОН',
    text: [
      'На время сессии желательно отключить уведомления и убрать телефон, если он не используется для связи.',
    ],
  },
  {
    title: 'ЗАПИСЬ',
    text: [
      'Запись — через Telegram или WhatsApp.',
      'Если вы хотите прекратить консультации или взять паузу — лучше проговорить это на сессии, чтобы мы смогли завершить работу экологично.',
    ],
  },
  {
    title: 'ОТМЕНА',
    text: [
      'Отмену возможно осуществить не позднее, чем за 24 часа.',
      'При более поздней отмене — сессия оплачивается полностью. Если сессия отменена терапевтом менее чем за 24 часа — следующая проводится бесплатно.',
    ],
  },
];

function ConsentGrid() {
  const leftColumn = consentItems.slice(0, 5);
  const rightColumn = consentItems.slice(5);

  return (
    <div className='text-balance mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-x-16 md:gap-y-10'>
      {[leftColumn, rightColumn].map((column, columnIndex) => (
        <div key={columnIndex} className='space-y-8'>
          {column.map((item) => (
            <section key={item.title} className='space-y-2'>
              <div className='flex items-start gap-3'>
                <Check className='mt-[3px] h-4 w-4 shrink-0 text-[#3C7A4F]' />
                <h2 className='font-lora font-semibold uppercase tracking-[0.02em] text-[clamp(0.938rem,0.866rem+0.357vw,1.188rem)] text-[#33251B] dark:text-white '>
                  {item.title}
                </h2>
              </div>
              <div className='pl-7 space-y-1.5'>
                {item.text.map((p) => (
                  <p
                    key={p}
                    className='text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9] '>
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

function InformedConsentSection() {
  return (
    <SectionContainer
      id='informed-consent'
      className='relative z-10 bg-white dark:bg-black max-md:pt-16 md:pt-16 pb-24 max-md:pb-[clamp(12.5rem,8.036rem+22.321vw,18.75rem)] md:pb-[clamp(18.75rem,11.607rem+14.881vw,25rem)]'>
      <div className='relative px-0'>
        <div className='mb-6 md:mb-8 max-w-3xl'>
          <h1 className='font-lora font-bold uppercase leading-tight text-[clamp(1.5rem,1.286rem+1.071vw,2.25rem)] text-[#33251B] dark:text-white'>
            Информированное согласие
          </h1>
          <p className='mt-4 text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9] '>
            Добро пожаловать в терапию. Ниже — основные положения, которые
            помогут сделать нашу работу комфортной, прозрачной и безопасной.
          </p>
        </div>

        <ConsentGrid />

        <div className='mt-12 flex justify-center'>
          <a
            href='https://drive.google.com/file/d/14AmUUXMpByEGwHh3S7wk6hzuQeB_Gb5v/view?usp=sharing'
            target="_blank"
            rel='noreferrer'
            className='inline-flex items-center justify-center rounded-[999px] bg-[#E2823A] px-8 py-3 text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] font-medium text-white shadow-sm transition hover:bg-[#C86C2C] text-center'>
            Скачать информированное согласие
          </a>
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
  );
}

export default function InformedConsentPage() {
  return (
    <div className='relative z-0 flex min-h-screen flex-col bg-[#F5D1BA] text-[#33251B] dark:bg-[#0F0D0C] dark:text-[#F5E5DA]'>
      <Header />
      <main>
        <InformedConsentSection />
        <Footer />
      </main>
    </div>
  );
}
