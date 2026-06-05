import Link from 'next/link';
import Image from 'next/image';
import { MotionBox } from '@/components/MotionBox';
import styles from './BiblicalHero.module.scss';

const BiblicalHero = () => {
  return (
    <section className={styles.hero} id="about">
      <MotionBox delay={0}>
        <div className={styles.metaTop}>
          <span>Библейские семинары · Слово Жизни Челябинск</span>
          <span className={styles.metaRight}>Сентябрь 2026 — Май 2027</span>
        </div>
      </MotionBox>
      <MotionBox delay={0.15}>
        <h1 className={styles.h1}>
          Библейские <em>семинары</em>
        </h1>
      </MotionBox>
      <MotionBox delay={0.3}>
        <div className={styles.sub}>
          <p>
            9 месяцев глубокого погружения в Писание, церковную культуру и
            настоящее христианское комьюнити — для молодёжи, которая хочет
            строить крепкий духовный фундамент.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.btnTeal}`} href="#reg">
              Записаться
            </Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="#what">
              Что внутри
            </Link>
          </div>
        </div>
      </MotionBox>
      <MotionBox delay={0.5}>
        <Image
          width={920}
          height={500}
          quality={85}
          loading="eager"
          style={{ objectFit: 'cover' }}
          src="/about/about-gal-1.jpg"
          alt="Школа · Слово Жизни Челябинск"
          className={styles.heroImage}
        />
      </MotionBox>
    </section>
  );
};

export { BiblicalHero };
