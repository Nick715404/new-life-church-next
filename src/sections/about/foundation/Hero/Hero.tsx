import styles from './Hero.module.scss';
import { unbounded } from '@/constants/fonts';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.subtitle}>Основание веры</span>
          <h1 className={`${styles.title} ${unbounded.className}`}>
            ОСНОВАНИЕ<br /> НАШЕЙ ВЕРЫ
          </h1>
        </div>
      </div>
    </section>
  );
};

export { Hero };