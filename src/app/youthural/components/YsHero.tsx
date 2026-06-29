import { YsLogo } from './YsLogo';
import styles from '../styles.module.scss';

export function YsHero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroOverlay1} />
      <div className={styles.heroOverlay2} />

      <div className={styles.heroMeta}>
        <span>(SINCE&nbsp;&nbsp;&nbsp;2006)</span>
        <span className={styles.heroMetaRight}>
          CAMERA1 · PLAY
          <br />
          ISO 120 · 5600K
        </span>
      </div>

      <div className={styles.heroCenter}>
        <div className={styles.heroBadge}>
          6&nbsp;—&nbsp;8&nbsp;·&nbsp;08&nbsp;·&nbsp;26
        </div>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleScript}>Навсегда</span>
          <span className={styles.heroTitleBold}>ЮС</span>
        </h1>
        <div className={styles.heroStripes} />
      </div>

      <div className={styles.heroBottom}>
        <p className={styles.heroDesc}>
          ЮС — это три дня глубокого поклонения среди сотен христиан. Приехав
          однажды на ЮС, ты — навсегда ЮС.
        </p>
        <span className={styles.heroLogoIcon}>
          <YsLogo height={48} bgColor="#0A0A0A" />
        </span>
        <span className={styles.heroMetaEnd}>(TO&nbsp;&nbsp;&nbsp;2026)</span>
      </div>

      <div className={styles.heroCornerTR} />
      <div className={styles.heroCornerBL} />
    </section>
  );
}
