import { halvar } from '@/constants/fonts';
import styles from './FoundationTabs.module.scss';
import { foundationArrayTabs } from '@/constants/arrays';
import { FoundationTabsItem } from './FoundationTabsItem';
import { MotionBox } from '../MotionBox';

type FoundationTabsProps = {}

export function FoundationTabs({ }: FoundationTabsProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          {foundationArrayTabs.map(item => (
            <FoundationTabsItem key={item.id} item={item} />
          ))}
          <MotionBox delay={1} id='8' className={styles.foundation}>
            <h2 className={`${styles.title} ${halvar.className}`}>ИСПОВЕДАНИЕ <br /> ВЕРЫ</h2>
            <p className={styles.text}>
              Верую в Единого Бога Отца, Всемогущего Творца неба и земли. Также в Иисуса Христа, Его Единородного Сына, Господа нашего, Который был зачат Духом Святым, рожден Девой Марией, страдал во времена Понтия Пилата, был распят, умер и был погребен, сошел в царство смерти, на третий день воскрес из мертвых, вознесся на небо и воссел одесную Всемогущего Бога Отца, откуда вернется судить живых и мертвых. Верую также в Святого Духа, Святую Соборную Церковь, собрание святых, прощение грехов, воскресение мертвых и вечную жизнь.
            </p>
            <span className={`${styles.amen} ${halvar.className}`}>Аминь</span>
          </MotionBox>
        </div>
      </div>
    </section>

  );
};