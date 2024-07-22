import styles from './page.module.scss';
import { Gallery } from '@/components/Gallery/Gallery';
import { About, Hero } from "@/sections/about/history/index";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'История Церкви - Церковь Слово Жизни г. Челябинск',
  alternates: {
    canonical: 'https://wolrus-chel.ru/about/history'
  }
}

export default function HistoryPage() {
  return (
    <main className="history children-page">
      <Hero />
      <div className={styles.wrapper}>
        <About />
        {/* <Gallery gallery={} /> */}
      </div>
    </main>
  );
};