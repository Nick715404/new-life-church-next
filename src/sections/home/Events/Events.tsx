import styles from './Events.module.scss';

import { EventsList } from './EventsList';

const Events = async () => {
  return (
    <section id='events' className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <EventsList />
        </div>
      </div>
    </section>
  )
}

export { Events };