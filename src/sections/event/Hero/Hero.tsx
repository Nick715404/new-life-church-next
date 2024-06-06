import styles from './Hero.module.scss';
import { unbounded } from '@/constants/fonts';

type EventHeroProps = {
  title: string,
  description: string,
}

export function EventHero({ description, title }: EventHeroProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <span className={styles.tag}>Событие</span>
          <h1 className={`${styles.title} ${unbounded.className}`}>{title}</h1>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </section>
  );
};