import styles from './Hero.module.scss';
import { unbounded } from '@/constants/fonts';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.subtitle}>История церкви</span>
          <h1 className={`${styles.title} ${unbounded.className}`}>История<br /> нашей церкви</h1>
        </div>
      </div>
      <Image
        className={styles.background}
        fill
        src={'/img/png/history-hero-bg.jpg'}
        alt='История церкви Новая Жизнь'
      />
    </section>
  )
}

export { Hero };