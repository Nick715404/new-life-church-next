import { Gallery } from '@/components/Gallery/Gallery';
import styles from './page.module.scss';
import { About, Hero } from "@/sections/about/history/index";

export default function HistoryPage() {
  return (
    <div className="history children-page">
      <Hero />
      <div className={styles.wrapper}>
        <About />
        {/* <Gallery gallery={} /> */}
      </div>
    </div>
  );
};