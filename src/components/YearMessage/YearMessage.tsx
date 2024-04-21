import { CustomIframe } from '../CustomIframe/CustomIframe';
import styles from './YearMessage.module.scss';

const YearMessage = () => {
  return (
    <div className={styles.yearMessage}>
      <div className="">
        <div className="container-small">
          <h2>Послание на год</h2>
        </div>
      </div>
      <div className={styles.video}>
        <CustomIframe src='https://www.youtube.com/embed/pr-PzWkrif0?si=CiVhrBRhzUFCqHiO' />
      </div>
    </div>
  )
}

export { YearMessage };