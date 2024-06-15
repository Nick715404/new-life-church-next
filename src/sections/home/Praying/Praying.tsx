import styles from './Praying.module.scss';
import { halvar } from '@/constants/fonts';
import { PrayingButton } from '@/components/PrayingButton/PrayingButton';

const Praying = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.titleBox}>
              <h2 className={`${styles.title} ${halvar.className}`}>
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