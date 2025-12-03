import { cn } from '@/lib/utils';

export function SectionContainer({ id, className, children }) {
  return (
    <div className='relative overflow-hidden pt-0 md:pt-0 md:px-10 max-md:px-0'>
      <section
        id={id}
        className={cn(
          'relative md:pt-24 md:pb-40 overflow-hidden z-[1] mx-auto w-full max-w-[1100px] px-6 md:px-[3.75rem] xl:px-[6.5rem]',
          className
        )}>
        {children}
      </section>
    </div>
  );
}
