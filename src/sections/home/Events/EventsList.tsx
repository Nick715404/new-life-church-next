import styles from './Events.module.scss';
import { fetchEvents } from "@/api/events";
import { Event } from "@/components/Event/Event";

const EventsList = async () => {

  const events = await fetchEvents();

  return (
    <div className={styles.wrapper}>
      {
        events && events.map(({ id, attributes }) => (
          <Event key={id} data={attributes} />
        ))
      }
    </div>
  )
}

export { EventsList }