import { unbounded } from '@/constants/fonts';
import styles from './Praying.module.scss';
import { PrayingButton } from '@/components/PrayingButton/PrayingButton';

const Praying = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.titleBox}>
              <h2 className={`${styles.title} ${unbounded.className}`}>
                У вас есть молитвенная<br />нужда или свидетельство?
              </h2>
            </div>
            <div className={styles.btnBox}>
              <PrayingButton text='хочу поделиться' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Praying };