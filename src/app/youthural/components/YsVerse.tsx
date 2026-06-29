import styles from '../styles.module.scss';

export function YsVerse() {
  return (
    <section id="about" className={styles.verse}>
      <div className={styles.verseInner}>
        <div className={styles.verseMeta}>
          <span>МАТФЕЯ&nbsp;18:20</span>
          <span className={styles.verseMetaRight}>ISO 120 · 5600K</span>
        </div>
        <div className={styles.verseDivider} />
        <p className={styles.verseText}>
          Ибо, где двое или трое собраны во имя&nbsp;Мое,{' '}
          <span className={styles.verseHighlight}>там Я посреди них.</span>
        </p>
      </div>
    </section>
  );
}
