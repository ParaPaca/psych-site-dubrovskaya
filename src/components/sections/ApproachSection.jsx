import { SectionContainer } from '@/components/shared/SectionContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ApproachBlobs } from './ApproachBlobs';

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
  return (
    <div className='relative'>
      <ApproachBlobs />
      <SectionContainer
        id='approach'
        className='relative bg-white dark:bg-[#000000] max-md:pt-40 md:pb-25 max-md:pb-20'>
        <div className='pointer-events-none absolute inset-x-0 top-0 z-0 h-[clamp(6.25rem,5.179rem+5.357vw,10rem)] overflow-hidden'>
          <svg
            viewBox='0 0 1100 120'
            preserveAspectRatio='xMidYMax slice'
            className='h-full w-full'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            focusable='false'>
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
