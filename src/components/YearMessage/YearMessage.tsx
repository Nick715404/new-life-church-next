import styles from './YearMessage.module.scss';

import { CustomIframe } from '../CustomIframe/CustomIframe';
import { fetchYearMessage } from '@/api/year-message';

export const YearMessage = async () => {
  const video = await fetchYearMessage();
  const thumbnail = video.attributes.thumbnail.data.attributes.url;
  console.log(thumbnail);

  return (
    <div className={styles.yearMessage}>
      <div className={styles.video}>
        <CustomIframe
          thumb={thumbnail}
          src={video.attributes.link}
          alt='Послание на год от пастора'
        />
      </div>
    </div>
  );
};