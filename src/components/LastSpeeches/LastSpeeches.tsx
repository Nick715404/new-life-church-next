import styles from './LastSpeeches.module.scss';

import { CustomSwiper } from '../CustomSwiper/CustomSwiper';
import { fetchAllLastSpeeches } from '@/api/last-speeches';
import { unbounded } from '@/constants/fonts';

import { Suspense } from 'react';

const LastSpeeches = async () => {

  const speeches = await fetchAllLastSpeeches();

  return (
    <div className={styles.lastSpeeches}>
      <div className={styles.titleBox}>
        <h3 className={`${styles.title} ${unbounded.className}`}>
          Последние проповеди
        </h3>
      </div>
      <div className={styles.wrapper}>
        <Suspense>
          {speeches && <CustomSwiper data={speeches} />}
        </Suspense>
      </div>
    </div>
  )
}

export { LastSpeeches };