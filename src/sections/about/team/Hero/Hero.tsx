import { unbounded } from '@/constants/fonts';
import styles from './Hero.module.scss';
import { HeroGallery } from './HeroGallery';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className={styles.subtitleBox}>
              <span className={styles.subtitle}>команда</span>
            </div>
            <div className={styles.titleBox}>
              <h1 className={`${styles.title} ${unbounded.className}`}>Мы любим<br />Бога и людей</h1>
            </div>
            <div className={styles.textBox}>
              <p className={styles.text}>Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.</p>
            </div>
          </div>
          <HeroGallery />
        </div>
      </div>
    </section>
  )
}

export { Hero };