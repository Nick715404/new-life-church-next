import styles from './TextRow.module.scss';
import { unbounded } from '@/constants/fonts';
import { IFoudationData } from '@/interfaces/utils';

interface IProps {
  data: IFoudationData
}

const TextRow = ({ data }: IProps) => {
  return (
    <div className={styles.textRow}>
      <div className={styles.wrapper}>
        <span className={`${styles.id} ${unbounded.className}`}>
          {`0${data.id}`}
        </span>
        <span className={`${styles.title} ${unbounded.className}`}>
          {data.title}
        </span>
      </div>
      <p className={styles.text}>
        {data.text}
      </p>
    </div>
  )
}

export { TextRow };