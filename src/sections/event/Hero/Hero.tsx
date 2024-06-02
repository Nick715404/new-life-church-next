import styles from './Hero.module.scss';

type EventHeroProps = {
  title: string,
  description: string,
}

export function EventHero({ description, title }: EventHeroProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </section>
  );
};