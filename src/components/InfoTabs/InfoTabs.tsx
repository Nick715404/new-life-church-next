import { IInfoTab } from '@/interfaces/utils';
import styles from './InfoTabs.module.scss';
import { Tab } from './Tab';

interface IProps {
  data: IInfoTab[];
}

const InfoTabs = ({ data }: IProps) => {
  return (
    <div className={styles.infoTabs}>
      {
        data.map((item, index) => (
          <Tab key={index} data={item} />
        ))
      }
    </div>
  )
}

export { InfoTabs };