import styles from './Confession.module.scss';
import { halvar } from '@/constants/fonts';

const Confession = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title} ${halvar.className}`}>
            ИСПОВЕДАНИЕ<br /> ВЕРЫ
          </h2>
          <div className={styles.textBox}>
            <p className={styles.text}>
              Верую в Единого Бога Отца, Всемогущего Творца неба и земли. Также в Иисуса Христа, Его Единородного Сына, Господа нашего, Который был зачат Духом Святым, рожден Девой Марией, страдал во времена Понтия Пилата, был распят, умер и был погребен, сошел в царство смерти, на третий день воскрес из мертвых, вознесся на небо и воссел одесную Всемогущего Бога Отца, откуда вернется судить живых и мертвых. Верую также в Святого Духа, Святую Соборную Церковь, собрание святых, прощение грехов, воскресение мертвых и вечную жизнь.
            </p>
            <span className={`${styles.action} ${halvar.className}`}>
              Аминь
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Confession };