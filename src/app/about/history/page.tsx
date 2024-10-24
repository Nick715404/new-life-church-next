import styles from './page.module.scss';
import { About, Hero } from "@/sections/about/history/index";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'История Церкви - Церковь Слово Жизни г. Челябинск',
  alternates: {
    canonical: `${process.env.SITE_DOMEN}/about/history`
  }
}

export default function HistoryPage() {
  return (
    <main className="history children-page">
      <Hero />
      <div className={styles.wrapper}>
        <About />
      </div>
    </main>
  );
};