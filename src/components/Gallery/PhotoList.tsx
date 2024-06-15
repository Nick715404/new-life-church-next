import styles from './Gallery.module.scss';

import Image from 'next/image';
import { TGalleryImage } from '@/interfaces/events';

type PhotoListProps = { data: TGalleryImage[], };

export function PhotoList({ data }: PhotoListProps) {
  return (
    <div className={styles.grid}>
      {
        data.map((photo, index) => (
          <div key={index} className={`${styles.card} gallery-photo-${index}`}>
            <Image
              className={styles.image}
              width={400}
              height={400}
              src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${photo.attributes.url}`}
              alt="Фотография события" />
          </div>
        ))
      }
    </div>
  );
};