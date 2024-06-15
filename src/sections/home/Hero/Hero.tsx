import styles from './Hero.module.scss';

import { VideoBackground } from '@/components/VideoBackground/VideoBackground';
import { halvar } from '@/constants/fonts';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroWrapper}>
          <h1 className={`${halvar.className} ${styles.heroTitleBox}`}>
            <span className={styles.heroSubTitle}>Добро пожаловать<br />в церковь</span>
            <span className={styles.heroTitle}>Слово Жизни<br /> Челябинск</span>
          </h1>
        </div>
      </div>
      <VideoBackground
        src="/videos/placeholder.mp4"
        isAutoPlay
        isLoop
        isMuted
      />
    </section>
  )
}

export { Hero };