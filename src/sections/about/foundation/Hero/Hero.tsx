import { MotionBox } from '@/components/MotionBox';
import styles from './Hero.module.scss';
import { halvar } from '@/constants/fonts';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <MotionBox delay={0.2}>
            <span className={styles.subtitle}>Основание веры</span>
          </MotionBox>
          <MotionBox>
            <h1 className={`${styles.title} ${halvar.className}`}>
              ОСНОВАНИЕ<br /> НАШЕЙ ВЕРЫ
            </h1>
          </MotionBox>
        </div>
      </div>
    </section>
  );
};

export { Hero };