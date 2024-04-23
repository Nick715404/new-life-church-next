import styles from './JoinUs.module.scss';

import { unbounded } from '@/constants/fonts';
import { Socials } from '@/components/Socials/Socials';

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.titleBox}>
            <h2 className={`${styles.title} ${unbounded.className}`}>
              Хотите<br /> присоединиться<br /> к нам в соц сетях?
            </h2>
          </div>
          <div className={styles.socials}>
            <Socials mode='dark' size='big' />
          </div>
        </div>
      </div>
    </div>
  )
}

export { JoinUs };