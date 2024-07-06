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
              <a className={styles.link} download href="/docs/ustav.pdf">Устав</a>
              <a className={styles.link} download href="/docs/privacy.pdf">Персональные данные</a>
              <a className={styles.link} download href="/docs/">Публичная оферта о заключении <br /> договора пожертвований</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};