import styles from './page.module.scss';
import { Metadata } from 'next';

import { Hero, Events, InfoSection, Meetings, Praying, JoinUs } from '@/sections/home/index';

export const metadata: Metadata = {
  title: 'Главная - Церковь Слово Жизни г. Челябинск'
}

export default function HomePage() {
  return (
    <main className='home children-page'>
      <Hero />
      <div className={styles.whiteBox}>
        <Meetings />
        <InfoSection />
        <Events />
        <Praying />
        <JoinUs />
      </div>
    </main>
  );
}
