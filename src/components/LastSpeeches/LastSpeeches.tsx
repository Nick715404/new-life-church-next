import styles from './LastSpeeches.module.scss';

import { CustomSwiper } from '../CustomSwiper/CustomSwiper';
import { fetchAllLastSpeeches } from '@/api/last-speeches';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '../MotionBox';

const LastSpeeches = async () => {
  const speeches = await fetchAllLastSpeeches();

  return (
    <div className={styles.lastSpeeches}>
      <MotionBox className={styles.titleBox}>
        <h3 className={`${styles.title} ${halvar.className}`}>
          Последние<br /> проповеди
        </h3>
      </MotionBox>
      <MotionBox delay={0.3} className={styles.wrapper}>
        {speeches && <CustomSwiper data={speeches} />}
      </MotionBox>
    </div>
  )
}

export { LastSpeeches };