import styles from './JoinUs.module.scss';
import { halvar } from '@/constants/fonts';
import { Socials } from '@/components/Socials/Socials';
import { MotionBox } from '@/components/MotionBox';

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className="container">
        <div className={styles.wrapper}>
          <MotionBox delay={0.2} className={styles.titleBox}>
            <h2 className={`${styles.title} ${halvar.className}`}>
              Хотите<br /> присоединиться<br /> к нам в соц сетях?
            </h2>
          </MotionBox>
          <div className={styles.socials}>
            <Socials mode='dark' size='big' />
          </div>
        </div>
      </div>
    </div>
  )
}

export { JoinUs };