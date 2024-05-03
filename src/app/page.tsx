import styles from './page.module.scss';

import { Hero, Events, InfoSection, Meetings, Praying, JoinUs } from '@/sections/home/index';

export default function HomePage() {
  return (
    <div className='home children-page'>
      <Hero />
      <div className={styles.whiteBox}>
        <Meetings />
        <InfoSection />
        <Events />
        <Praying />
        <JoinUs />
      </div>
    </div>
  );
}
