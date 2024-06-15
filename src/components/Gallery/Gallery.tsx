import { TGalleryImage } from '@/interfaces/events';
import styles from './Gallery.module.scss';
import { PhotoList } from './PhotoList';

type GalleryProps = { gallery: TGalleryImage[], };

export function Gallery({ gallery }: GalleryProps) {
  if (!gallery) { return null; };

  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={styles.title}>Галлерея</h2>
        <PhotoList data={gallery} />
      </div>
    </section>
  );
};