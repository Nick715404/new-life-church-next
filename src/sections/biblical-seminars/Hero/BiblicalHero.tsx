import Link from 'next/link';
import styles from './BiblicalHero.module.scss';
import Image from 'next/image';

const BiblicalHero = () => {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.metaTop}>
        <span>Библейские семинары · Слово Жизни Челябинск</span>
        <span className={styles.metaRight}>Сентябрь 2026 — Май 2027</span>
      </div>
      <h1 className={styles.h1}>
        Библейские <em>семинары</em>
      </h1>
      <div className={styles.sub}>
        <p>
          9 месяцев глубокого погружения в Писание, церковную культуру и
          настоящее христианское комьюнити — для молодёжи, которая хочет строить
          крепкий духовный фундамент.
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
    </section>
  );
};

export { BiblicalHero };
