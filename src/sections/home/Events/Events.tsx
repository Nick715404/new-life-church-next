import styles from './Events.module.scss';
import { BIgEvent } from './blocks/BIgEvent';

const Events = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <BIgEvent />
          <div className={styles.wrapperBottom}>
            <div className={styles.smallEventBox}>
              <div className={styles.smallEvent}>small</div>
              <div className={styles.smallEvent}>small</div>
            </div>
            <div className={styles.middleEvent}>
              middle
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Events };