import styles from './page.module.scss';

import { Hero } from '@/sections/home/Hero/Hero';
import { Meetings } from '@/sections/home/Meetings/Meetings';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <div className={styles.whiteBox}>
        <Meetings />
      </div>
    </div>
  );
}
