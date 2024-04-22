import { unbounded } from '@/constants/fonts';
import { CustomIframe } from '../CustomIframe/CustomIframe';
import styles from './YearMessage.module.scss';

const YearMessage = () => {
  return (
    <div className={styles.yearMessage}>
      <div className={styles.video}>
        <CustomIframe src='https://www.youtube.com/embed/pr-PzWkrif0?si=CiVhrBRhzUFCqHiO' />
      </div>
    </div>
  )
}

export { YearMessage };