import { fetchAllCalendarEvents } from '@/api/calender';
import styles from './Calendar.module.scss';
import { IDataFromStrapi } from '@/interfaces/queries';
import { ICalendar } from '@/interfaces/calendar';
import { CalendarItem } from './CalendarItem';

const Calendar = async () => {

  const events = await fetchAllCalendarEvents();

  return (
    <div className={styles.calendar}>
      {events && events.data.map(({ id, attributes }) => (
        <CalendarItem key={id} data={attributes} />
      ))}
    </div>
  )
}

export { Calendar };