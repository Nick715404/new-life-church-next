import { YsLogo } from './YsLogo';
import styles from '../styles.module.scss';

export function YsFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <YsLogo height={90} bgColor="#0A0A0A" />
        </div>
        <p className={styles.footerTagline}>Навсегда ЮС</p>
        <div className={styles.footerMeta}>
          <span>(SINCE&nbsp;&nbsp;2006)</span>
          <span>FOREVER YOUTH · 6—8 АВГУСТА 2026</span>
          <span>(TO&nbsp;&nbsp;2026)</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            TELEGRAM
          </a>
          <a href="#" className={styles.footerLink}>
            INSTAGRAM
          </a>
          <a href="#" className={styles.footerLink}>
            hello@yous.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
