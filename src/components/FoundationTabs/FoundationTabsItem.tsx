import { MotionBox } from '../MotionBox';
import styles from './FoundationTabs.module.scss'
import Image from 'next/image';

type Props = { item: any };

export const FoundationTabsItem = ({ item }: Props) => {
  return (
    <MotionBox delay={+`0.${item.id}`} id={`item-${item.id}`} key={item.id} className={styles.item}>
      <div className={styles.content}>
        <Image className={styles.img} width={100} height={100} src={item.img} alt={`Иконка - ${item.title}.svg`} />
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.descr}>{item.descr}</p>
      </div>
    </MotionBox>
  );
};