import { Events } from '@/sections/home/Events/Events';
import styles from './page.module.scss';

import { Hero } from '@/sections/home/Hero/Hero';
import { InfoSection } from '@/sections/home/Info/Info';
import { Meetings } from '@/sections/home/Meetings/Meetings';
import { Praying } from '@/sections/home/Praying/Praying';
import { JoinUs } from '@/sections/home/JoinUs/JoinUs';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <div className={styles.whiteBox}>
        <Meetings />
        <InfoSection />
        <Events />
        {/* <Praying /> */}
        {/* <JoinUs /> */}
      </div>
    </div>
  );
}
