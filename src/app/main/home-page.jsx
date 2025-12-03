import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { ConsultationSection } from '@/components/sections/ConsultationSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { InteractionSection } from '@/components/sections/InteractionSection';
import { PrinciplesSection } from '@/components/sections/PrinciplesSection';
import { RequestsSection } from '@/components/sections/RequestsSection';

export default function HomePage() {
  return (
    <div className='text-balance relative flex min-h-screen flex-col bg-[#F5D1BA] text-[#33251B] dark:bg-[#0F0D0C] dark:text-[#F5E5DA] z-0'>
      <Header />
      <main>
        <Hero />
        <RequestsSection />
        <PrinciplesSection />
        <ApproachSection />
        <InteractionSection />
        <ConsultationSection />
        <ContactsSection />
        <Footer />
      </main>
    </div>
  );
}
