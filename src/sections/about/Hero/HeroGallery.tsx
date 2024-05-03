import styles from './Hero.module.scss';

import { aboutGalleryItems } from '@/constants/arrays';
import Image from 'next/image';

const HeroGallery = () => {
  return (
    <div className={styles.blocks}>
      {
        aboutGalleryItems.map(item => (
          <div key={item.id} id={`block-${item.id}`} className={styles.blockItem}>
            <Image
              className={styles.blockImg}
              height={10}
              width={10}
              priority
              src={item.path}
              alt='Церковь Новая Жизнь'
            />
          </div>
        ))
      }
    </div>
  )
}

export { HeroGallery };