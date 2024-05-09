import styles from './page.module.scss';

import { PhotoGallery } from '@/components/PhotoGallery/PhotoGallery';
import { About, Hero } from "@/sections/about/history/index";

export default function HistoryPage() {
  return (
    <div className="history children-page">
      <Hero />
      <div className={styles.wrapper}>
        <About />
        <PhotoGallery />
      </div>
    </div>
  );
};