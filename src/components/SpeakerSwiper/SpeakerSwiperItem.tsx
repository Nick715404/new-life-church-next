import styles from './SpeakerSwiper.module.scss';

import Image from "next/image";
import { ISpeakerData } from "@/interfaces/speakers";
import { halvar } from '@/constants/fonts';

type SpeakerSwiperItemProps = { data: ISpeakerData };

export function SpeakerSwiperItem({ data }: SpeakerSwiperItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          fill
          className={styles.image}
          src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${data.attributes.image.data.attributes.url}`}
          alt={data.attributes.name}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <span className={`${styles.text} ${halvar.className}`}>{data.attributes.name}</span>
      <p className={styles.description}>{data.attributes.description}</p>
    </div>
  );
};