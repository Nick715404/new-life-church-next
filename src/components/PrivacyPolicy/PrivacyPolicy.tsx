import Link from 'next/link';
import styles from './PrivacyPolicy.module.scss';

export function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicy}>
      <Link className={styles.text} href='/policy'>Политика конфиденциальности</Link>
      <span className={`${styles.text} ${styles.sign}`}>Developed by SimonovTech</span>
      <span className={styles.text}>© 2024 Слово Жизни. Все права защищены.</span>
    </div>
  );
};