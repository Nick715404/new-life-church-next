import styles from './InfoTabs.module.scss';

import { IInfoTab } from "@/interfaces/utils";

type Props = {
  data: IInfoTab;
}

const Tab = ({ data }: Props) => {
  return (
    <div className={styles.tab}>
      <span className={styles.title}>{data.number}{data.icon}</span>
      <span className={styles.subtitle}>{data.subtitle}</span>
      <p className={styles.text}>
        {data.text}
      </p>
    </div>
  );
};

export { Tab };