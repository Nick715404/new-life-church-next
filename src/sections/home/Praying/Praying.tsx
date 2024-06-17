import styles from './Praying.module.scss';
import { halvar } from '@/constants/fonts';
import { PrayingButton } from '@/components/PrayingButton/PrayingButton';
import { MotionBox } from '@/components/MotionBox';

const Praying = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <MotionBox delay={0.1} className={styles.titleBox}>
              <h2 className={`${styles.title} ${halvar.className}`}>
                У вас есть молитвенная<br />нужда или свидетельство?
              </h2>
            </MotionBox>
            <MotionBox delay={0.25} className={styles.btnBox}>
              <PrayingButton text='хочу поделиться' />
            </MotionBox>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Praying };