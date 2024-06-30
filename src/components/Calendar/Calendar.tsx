import { fetchAllCalendarEvents } from '@/api/calender';
import styles from './Calendar.module.scss';
import { IDataFromStrapi } from '@/interfaces/queries';
import { ICalendar } from '@/interfaces/calendar';
import { CalendarItem } from './CalendarItem';
import { MotionBox } from '../MotionBox';

export const Calendar = async () => {
  const events = await fetchAllCalendarEvents();

  return (
    <div className={styles.calendar}>
      {
        events && events.data.map(({ id, attributes }) => (
          <MotionBox
            key={id}
            delay={+`0.${id + 3}`}
            sideAnimation>
            <CalendarItem data={attributes} />
          </MotionBox>
        ))
      }
    </div>
  )
};