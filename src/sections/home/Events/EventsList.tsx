import styles from './Events.module.scss';
import { fetchEvents } from "@/api/events";
import { Event } from "@/components/Event/Event";
import { MotionBox } from '@/components/MotionBox';

export const EventsList = async () => {
  const events = await fetchEvents();

  return (
    <MotionBox className={styles.wrapper} delay={0.2}>
      {
        events && events.map(({ id, attributes }) => (
          <Event key={id} data={attributes} />
        ))
      }
    </MotionBox>
  );
};