import styles from './Info.module.scss';

import { YearMessage } from '@/components/YearMessage/YearMessage';
import { LastSpeeches } from '@/components/LastSpeeches/LastSpeeches';
import { Calendar } from '@/components/Calendar/Calendar';
import { unbounded } from '@/constants/fonts';

const InfoSection = () => {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <h2 className={`${styles.title} ${unbounded.className}`}>
          Послание<br /> на год
        </h2>
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.videos}>
            <YearMessage />
            <LastSpeeches />
          </div>
          <div className={styles.calendar}>
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  )
}

export { InfoSection }