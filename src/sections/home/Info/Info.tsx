import { YearMessage } from '@/components/YearMessage/YearMessage';
import styles from './Info.module.scss';

const InfoSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.videos}>
            <YearMessage />
          </div>
          <div className={styles.calendar}></div>
        </div>
      </div>
    </section>
  )
}

export { InfoSection }