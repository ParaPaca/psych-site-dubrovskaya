import { SectionContainer } from '@/components/shared/SectionContainer';
import {
  Brain,
  HeartPulse,
  MessageCircleHeart,
  ShieldQuestion,
  Sparkle,
  Waypoints,
} from 'lucide-react';

const requests = [
  { icon: Sparkle, label: 'Эмоциональные сложности' },
  { icon: HeartPulse, label: 'Тревога, стресс, выгорание' },
  { icon: Brain, label: 'Заниженная самооценка, вина, стыд' },
  { icon: MessageCircleHeart, label: 'Отношения в семье, паре, коллективе' },
  {
    icon: ShieldQuestion,
    label: 'Утрата опоры и уверенности в движении вперёд',
  },
  { icon: Waypoints, label: 'Повторяющиеся деструктивные сценарии' },
];

export function RequestsSection() {
  return (
    <SectionContainer
      id='services'
      className='relative z-10 py-0 bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pt-10 max-md:pb-30 md:pb-10'>
      <div className='max-w-[536px]'>
        <div className='text-left'>
          <h2 className='mt-3 md:mt-4 font-lora uppercase  font-semibold leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)] text-[#322820] dark:text-white'>
            С какими запросами я работаю
          </h2>
        </div>
        <div className='mx-auto mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-5'>
          {requests.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className='flex flex-nowrap items-center gap-3 md:gap-4 rounded-full bg-white/95 pl-3 md:pl-4 pr-4 md:pr-5 py-2 md:py-3 shadow-[5px_10px_15px_rgba(160,92,51,0.2)] backdrop-blur dark:bg-[#000000]/95'>
              <span className='flex h-[clamp(2.125rem,2.054rem+0.357vw,2.375rem)] w-[clamp(2.125rem,2.054rem+0.357vw,2.375rem)] flex-shrink-0 items-center justify-center rounded-full bg-[#F2DBC7] text-[#9C6B4F] dark:bg-[#433528] dark:text-[#F2C6A2]'>
                <Icon className='h-[clamp(1rem,0.929rem+0.357vw,1.25rem)] w-[clamp(1rem,0.929rem+0.357vw,1.25rem)]' />
              </span>
              <p className='font-medium text-[#3B2C21] dark:text-[#F5E5DA] text-left leading-relaxed break-words whitespace-normal'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
