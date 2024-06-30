import styles from './Calendar.module.scss';

import { ICalendar } from "@/interfaces/calendar";
import { useCalendar } from './useCalendar';

type Props = {
  data: ICalendar;
}

const CalendarItem = ({ data }: Props) => {
  const className = useCalendar({ day: data.day, styles: styles });

  return (
    <div className={className}>
      <div className={styles.dateWrapper}>
        <div className={styles.dayNumber}>
          {data.date_number}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            {data.month}
          </div>
          <div className={styles.info}>
            {data.day}
          </div>
        </div>
      </div>
      <div className={styles.events}>
        <div className={styles.event}>
          <div className={styles.timeWrapper}>
            <div className={styles.time}>
              {data.time}
            </div>
          </div>
          <div className={styles.descrWrapper}>
            <div className={styles.title}>
              {data.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CalendarItem };