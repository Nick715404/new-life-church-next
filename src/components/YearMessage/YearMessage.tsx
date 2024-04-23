import styles from './YearMessage.module.scss';

import { CustomIframe } from '../CustomIframe/CustomIframe';
import { fetchYearMessage } from '@/api/year-message';

const YearMessage = async () => {

  const video = await fetchYearMessage();

  return (
    <div className={styles.yearMessage}>
      <div className={styles.video}>
        <CustomIframe src={video.attributes.link} />
      </div>
    </div>
  )
}

export { YearMessage };