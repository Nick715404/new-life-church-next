import Link from 'next/link';
import styles from './page.module.scss';
import { halvar } from '@/constants/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Документы - Церковь Слово Жизни г. Челябинск'
}

export default function DocsPage() {
  return (
    <main className="docs children-page">

      <section className={styles.docs}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <span className={styles.subtitle}>документы</span>
              <h1 className={`${styles.title} ${halvar.className}`}>Юредическая <br /> документация</h1>
            </div>
            <div className={styles.linkList}>
              <Link className={styles.link} download="" href="#">Устав</Link>
              <Link className={styles.link} download="" href="#">Персональные данные</Link>
              <Link className={styles.link} download="" href="#">Публичная оферта о заключении <br /> договора пожертвований</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};