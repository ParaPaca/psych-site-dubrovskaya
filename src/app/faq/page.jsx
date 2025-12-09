import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Check, XCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata() {
  return buildMetadata({
    title: 'FAQ — ответы на частые вопросы',
    description:
      'Как проходит консультация, сколько встреч может понадобиться и что важно учесть перед сессией.',
    path: '/faq',
  });
}

const faqItems = [
  {
    id: 'who-i-work-with',
    title: 'С КЕМ Я РАБОТАЮ?',
    type: 'text',
    paragraphs: ['Я консультирую взрослых (18+), индивидуально.'],
  },
  {
    id: 'who-i-dont-work-with',
    title: 'С КЕМ Я НЕ РАБОТАЮ?',
    type: 'text',
    paragraphs: [
      'Я не провожу консультации для детей и подростков, а также не работаю с активными зависимостями (алкоголь, наркотики).',
    ],
  },
  {
    id: 'how-many-sessions',
    title: 'СКОЛЬКО ПОНАДОБИТСЯ ВСТРЕЧ?',
    type: 'text',
    paragraphs: [
      'Это зависит от ваших задач, темы и запроса. Иногда достаточно нескольких встреч, иногда работа занимает месяцы.',
      'Мы будем ориентироваться на то, что актуально именно для вас.',
    ],
  },
  {
    id: 'before-session',
    title: 'ЧТО ВАЖНО УЧЕСТЬ ПЕРЕД КОНСУЛЬТАЦИЕЙ?',
    type: 'list',
    items: [
      {
        icon: 'cross',
        text: 'Пожалуйста, не приходите на сессию в состоянии алкогольного или наркотического опьянения.',
      },
      {
        icon: 'check',
        text: 'Подумайте, как вы хотите, чтобы я к вам обращалась: на «ты» или на «вы», по имени или имени и отчеству.',
      },
      {
        icon: 'check',
        text: 'Постарайтесь быть честны с собой и со мной.',
      },
      {
        icon: 'check',
        text: 'Фокусируйтесь на мыслях и чувствах, которые занимают вас в последнее время.',
      },
      {
        icon: 'check',
        text: 'Если получится — сформулируйте, чего вы ожидаете от первой встречи и от нашей совместной работы в целом.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'БУДЕТ ЛИ СОХРАНЯТЬСЯ КОНФИДЕНЦИАЛЬНОСТЬ?',
    type: 'text',
    paragraphs: [
      'Да, абсолютно. Всё, чем вы делитесь на сессии, остаётся между нами.',
      'Ваша личная информация и данные защищены, и вы можете чувствовать себя в безопасности.',
    ],
  },
];

function FaqContent({ item }) {
  if (item.type === 'text') {
    return (
      <div className='space-y-2'>
        {item.paragraphs.map((p) => (
          <p
            key={p}
            className='text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9]'>
            {p}
          </p>
        ))}
      </div>
    );
  }

  if (item.type === 'list') {
    return (
      <ul className='space-y-2'>
        {item.items.map((point) => (
          <li key={point.text} className='flex items-start gap-3'>
            {point.icon === 'cross' ? (
              <XCircle className='mt-1 h-4 w-4 shrink-0 text-[#CF4A33]' />
            ) : (
              <Check className='mt-1 h-4 w-4 shrink-0 text-[#3C7A4F]' />
            )}
            <p className='text-[clamp(0.875rem,0.839rem+0.179vw,1rem)] leading-relaxed text-[#4E3A2C] dark:text-[#D4C2B9]'>
              {point.text}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export function FAQSection() {
  return (
    <SectionContainer
      id='faq'
      className='text-balance relative z-10 bg-white dark:bg-black max-md:pt-16 md:pt-16 pb-24 max-md:pb-[clamp(12.5rem,8.036rem+22.321vw,18.75rem)] md:pb-[clamp(18.75rem,11.607rem+14.881vw,25rem)]'>
      <div className='relative px-0'>
        <div className='mb-8 md:mb-12'>
          <h1 className='font-lora font-bold uppercase leading-tight text-[clamp(1.5rem,1.286rem+1.071vw,2.25rem)] text-[#33251B] dark:text-white'>
            Вопросы и ответы
          </h1>
        </div>
        <div className='max-w-[720px]'>
          <Accordion
            type='single'
            collapsible
            defaultValue='who-i-work-with'
            className='w-full space-y-1'>
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className='border-b border-[#E7D2C4] py-1 last:border-b-0'>
                <AccordionTrigger className='flex w-full items-start justify-between gap-4 py-4 text-left [&[data-state=open]>span.icon-wrap>span]:rotate-45 cursor-pointer'>
                  <span className='font-lora font-semibold uppercase tracking-[0.02em] text-[clamp(0.938rem,0.866rem+0.357vw,1.188rem)] text-[#33251B] dark:text-white'>
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className='pb-5'>
                  <FaqContent item={item} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default function FAQPage() {
  return (
    <div className='relative flex min-h-screen flex-col bg-[#F5D1BA] text-[#33251B] dark:bg-[#0F0D0C] dark:text-[#F5E5DA] z-0'>
      <Header />
      <main>
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
