import WhatsAppIcon from '@/components/shared/WhatsAppIcon';
import TelegramIcon from '@/components/shared/TelegramIcon';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { ContactsBlobs } from './ContactsBlobs';

const contacts = [
  {
    href: 'https://t.me/yana_dubrovsk',
    label: 'Telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://wa.me/79161418794',
    label: 'WhatsApp',
    icon: WhatsAppIcon,
  },
];

export function ContactsSection() {
  return (
    <div className='relative'>
      <ContactsBlobs />
      <SectionContainer
        id='contacts'
        className='relative bg-[#FFF3EC] dark:bg-[#1B1B1B] max-md:pt-20 max-md:pb-50 md:pb-60 bg-linear-to-b from-[#FFF3EC] to-[#F9DDC9] dark:from-[#1B1B1B] dark:to-[#000000]/20'>
        <div className='mx-auto text-center max-w-[680px]'>
          <h2 className='uppercase font-lora font-semibold text-[#322820] dark:text-white leading-tight text-[clamp(1.75rem,1.5rem+1.25vw,2.625rem)] '>
            Буду рада ответить на ваши вопросы
          </h2>
          <p className='mt-3 md:mt-6 text-[#4E3A2C] dark:text-[#CDBBAC] leading-relaxed '>
            Напишите в удобном мессенджере — договоримся о консультации или
            обсудим, как могу быть полезна.
          </p>
        </div>
        <div className='mx-auto mt-5 md:mt-10 flex flex-col items-center gap-3 md:gap-4 md:flex-row md:justify-center'>
          {contacts.map(({ href, label, icon: Icon }) => (
            <Button
              key={label}
              asChild
              className='min-w-[172px] group h-auto rounded-full bg-white/95 px-5 md:px-8 py-3 md:py-4 text-md font-semibold text-[#3B2C21] shadow-[0_16px_38px_rgba(160,92,51,0.1)] transition hover:-translate-y-px hover:text-[#ffffff] hover:bg-[#E2823A] dark:bg-[#0E0E0E] dark:text-[#F5E5DA] dark:hover:bg-[#34261D] [&_svg]:h-5! [&_svg]:w-5! max-md:[&_svg]:h-5! max-md:[&_svg]:w-5!'
              variant='ghost'>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={`Связаться со мной в ${label}`}>
                <span className='flex items-center gap-3'>
                  <Icon
                    className='group-hover:text-[#ffffff] transition h-[clamp(1rem,0.929rem+0.357vw,1.25rem)] w-[clamp(1rem,0.929rem+0.357vw,1.25rem)] text-[#E17737] dark:text-[#F2C6A2]'
                  />
                  {label}
                </span>
              </a>
            </Button>
          ))}
        </div>
        <p className='mt-10 md:mt-12 text-center text-[#8D7768] dark:text-[#BDAEA4]'>
          Берегите себя, и до связи 💛
        </p>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(6.25rem,5.179rem+5.357vw,9rem)] overflow-hidden'>
          <svg
            aria-hidden='true'
            viewBox='0 0 1100 120'
            preserveAspectRatio='xMidYMax slice'
            className='h-full w-full'
            xmlns='http://www.w3.org/2000/svg'
            focusable='false'>
            <path
              className='dark:fill-[#000000]'
              d='M0 122.022V23.8078C46.1918 13.2801 92.3836 2.75246 151.25 1.41491C210.116 0.077357 281.657 7.92991 332.292 6.91491C382.926 5.8999 412.653 -3.98266 458.333 1.80776C504.013 7.59819 565.646 29.0616 630.208 31.2721C694.77 33.4825 762.262 16.44 812.014 7.70062C861.766 -1.03873 893.778 -1.47491 938.819 2.59348C983.861 6.66186 1041.93 15.2348 1100 23.8078V122.022H0Z'
              fill='#ffffff'
            />
          </svg>
        </div>
      </SectionContainer>
    </div>
  );
}
