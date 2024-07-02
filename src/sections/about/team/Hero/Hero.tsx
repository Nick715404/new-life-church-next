import { halvar } from '@/constants/fonts';
import styles from './Hero.module.scss';
import { HeroGallery } from './HeroGallery';
import { MotionBox } from '@/components/MotionBox';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <MotionBox delay={0.3} className={styles.subtitleBox}>
              <span className={styles.subtitle}>команда</span>
            </MotionBox>
            <MotionBox className={styles.titleBox}>
              <h1 className={`${styles.title} ${halvar.className}`}>Мы любим<br />Бога и людей</h1>
            </MotionBox>
            <MotionBox delay={0.2} className={styles.textBox}>
              <p className={styles.text}>Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.</p>
            </MotionBox>
          </div>
          <MotionBox delay={0.6}>
            <HeroGallery />
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export { Hero };