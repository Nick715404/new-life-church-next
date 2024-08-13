import styles from './Events.module.scss';

import { EventsList } from './EventsList';

const Events = async () => {
  return (
    <section id='events' className={styles.section}>
      <div className="container">
        <EventsList />
      </div>
    </section>
  )
}

export { Events };