import { YsLogo } from './YsLogo';
import styles from '../styles.module.scss';

export function YsNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.navLogo}>
          <span className={styles.navLogoIcon}>
            <YsLogo height={26} bgColor="#0A0A0A" />
          </span>
          <span className={styles.navLogoText}>
            MOVIE NAME:
            <br />
            FOREVER YOUTH
          </span>
        </a>
        <div className={styles.navLinks}>
          <a className={styles.navA} href="#about">О ПРОЕКТЕ</a>
          <a className={styles.navA} href="#schedule">РАСПИСАНИЕ</a>
          <a className={styles.navA} href="#speakers">СПИКЕРЫ</a>
          <a className={styles.navA} href="#revival">ВЕЧЕР ПРОБУЖДЕНИЯ</a>
        </div>
        <a href="#register" className={styles.navBtn}>РЕГИСТРАЦИЯ</a>
      </div>
    </nav>
  );
}
