import Link from 'next/link';
import styles from './PrivacyPolicy.module.scss';

export function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicy}>
      <Link className={styles.text} href="/docs">
        Политика конфиденциальности
      </Link>
      <span className={styles.text}>
        © 2026 Слово Жизни. Все права защищены.
      </span>
    </div>
  );
}
