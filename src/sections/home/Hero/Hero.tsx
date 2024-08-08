import styles from './Hero.module.scss';
import { MotionBox } from '@/components/MotionBox';
import { VideoBackground } from '@/components/VideoBackground/VideoBackground';
import { halvar } from '@/constants/fonts';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroWrapper}>
          <h1 className={`${halvar.className} ${styles.heroTitleBox}`}>
            <MotionBox delay={0.3}>
              <span className={styles.heroSubTitle}>Добро пожаловать<br />в церковь</span>
            </MotionBox>
            <MotionBox delay={0.5} className={styles.heroTitleBox}>
              <span className={styles.heroTitle}>Слово Жизни<br /> Челябинск</span>
            </MotionBox>
          </h1>
        </div>
      </div>
      <VideoBackground
        src="/videos/main.mp4"
        isAutoPlay
        isLoop
        isMuted />
    </section>
  )
}

export { Hero };