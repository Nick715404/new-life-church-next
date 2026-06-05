import Link from 'next/link';
import styles from './BiblicalCta.module.scss';

const BiblicalCta = () => {
  return (
    <section className={styles.section} id="reg">
      <span className={styles.script}>Твоё время расти</span>
      <h2 className={styles.h2}>начинается сейчас!</h2>
      <div className={styles.actions}>
        <Link className={`${styles.btn} ${styles.btnTeal}`} href="#">
          Записаться на семинары
        </Link>
        <Link className={`${styles.btn} ${styles.btnGhost}`} href="#about">
          Узнать больше
        </Link>
      </div>
      <div>
        <Link className={styles.more} href="/yearforgod">
          Хочешь больше? — «Год для Бога»
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export { BiblicalCta };
