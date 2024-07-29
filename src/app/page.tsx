import styles from './page.module.scss';
import { Metadata } from 'next';

import { Hero, Events, InfoSection, Meetings, JoinUs } from '@/sections/home/index';
import { LinkBanner } from '@/components/LinkBanner/LinkBanner';

export const metadata: Metadata = {
  title: 'Главная - Церковь Слово Жизни г. Челябинск',
  alternates: {
    canonical: `${process.env.SITE_DOMEN}`
  }
}

export default function HomePage() {
  return (
    <main className='home children-page'>
      <Hero />
      <div className={styles.whiteBox}>
        <Meetings />
        <InfoSection />
        <Events />
        <LinkBanner path='/contacts' title='У вас есть молитвенная нужда или свидетельство?' />
        <JoinUs />
      </div>
    </main>
  );
}
