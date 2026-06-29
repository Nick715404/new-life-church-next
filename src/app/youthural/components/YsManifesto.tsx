import styles from '../styles.module.scss';

export function YsManifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.manifestoInner}>
        <div className={styles.manifestoLabel}>[ 01 ] &nbsp; О ЧЁМ ЭТОТ ГОД</div>
        <div className={styles.manifestoBody}>
          <p className={styles.manifestoP}>
            В последнее время мир нестабилен, и многие ситуации находятся вне нашего контроля.
            В одно и то же время могут происходить хорошие и плохие вещи. И во всём этом мы
            выбираем <mark>смотреть на Христа</mark>.
          </p>
          <p className={styles.manifestoP}>
            Иногда мы чувствуем себя заложниками обстоятельств. Но именно они прокладывают
            путь и <mark>раскрывают в нас новые грани</mark>.
          </p>
          <p className={styles.manifestoP}>
            Бог способен обратить самое тяжёлое испытание в источник жизни. В эпицентре бури,
            тишины и неопределённости <mark>находится Бог</mark>.
          </p>
          <p className={styles.manifestoP}>
            ЮС — это пространство для каждого человека со своими мечтами, целями и надеждами.
            Это место Божьего присутствия, где можно <mark>укрыться в любой сезон жизни</mark>.
          </p>
        </div>
        <div className={styles.manifestoTagline}>
          <p className={styles.manifestoTaglineScript}>Ведь посреди ЮС —</p>
          <p className={styles.manifestoTaglineBold}>ГОСПОДЬ</p>
        </div>
      </div>
    </section>
  );
}
