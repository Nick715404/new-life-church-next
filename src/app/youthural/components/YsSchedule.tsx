import { SCHEDULE_DAYS } from '../_constants';
import styles from '../styles.module.scss';

export function YsSchedule() {
  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.scheduleInner}>
        <div className={styles.scheduleHeader}>
          <div>
            <div className={styles.scheduleLabel}>[ 02 ] &nbsp; РАСПИСАНИЕ</div>
            <h2 className={styles.scheduleTitle}>ТРИ ДНЯ</h2>
          </div>
          <span className={styles.scheduleDates}>06&nbsp;—&nbsp;08.08.2026</span>
        </div>
        <div className={styles.scheduleDivider} />

        {SCHEDULE_DAYS.map((day) => (
          <div key={day.date} className={styles.schedDay}>
            <div className={styles.schedDayHead}>
              <div className={styles.schedDayDate}>{day.date}</div>
              <div className={styles.schedDayName}>{day.label}</div>
            </div>
            <div className={styles.schedItems}>
              {day.items.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.schedItem} ${item.dim ? styles.schedItemDim : ''}`}
                >
                  <span className={item.dim ? styles.schedTimeDim : styles.schedTime}>
                    {item.time}
                  </span>
                  {item.bold ? <strong>{item.title}</strong> : <span>{item.title}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
