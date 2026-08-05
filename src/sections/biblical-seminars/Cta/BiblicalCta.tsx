import Link from 'next/link';
import { MotionBox } from '@/components/MotionBox';
import styles from './BiblicalCta.module.scss';

const BiblicalCta = () => {
  return (
    <section className={styles.section} id="reg">
      <MotionBox delay={0.1}>
        <span className={styles.script}>Твоё время расти</span>
      </MotionBox>
      <MotionBox delay={0.2}>
        <h2 className={styles.h2}>начинается сейчас!</h2>
      </MotionBox>
      <MotionBox delay={0.3}>
        <div className={styles.actions}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnTeal}`}
            href="https://forms.yandex.ru/cloud/6a73286ae010db6b6117cab5"
          >
            Записаться на семинары
          </a>
          <Link className={`${styles.btn} ${styles.btnGhost}`} href="#about">
            Узнать больше
          </Link>
        </div>
      </MotionBox>
    </section>
  );
};

export { BiblicalCta };
