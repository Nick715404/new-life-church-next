import Image from 'next/image';
import styles from './Hero.module.scss';
import { unbounded } from '@/constants/fonts';
import { IStrapiImage } from '@/interfaces/queries';

type EventHeroProps = {
  title: string,
  description: string,
  background: IStrapiImage,
}

export function EventHero({ description, title, background }: EventHeroProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <span className={styles.tag}>Событие</span>
          <h1 className={`${styles.title} ${unbounded.className}`}>{title}</h1>
          <p className={styles.text}>{description}</p>

        </div>
      </div>
      <Image
        className={styles.background}
        src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${background.attributes.url}`}
        alt={`Обложка события - ${title}`}
        priority
        fill />
    </section>
  );
};