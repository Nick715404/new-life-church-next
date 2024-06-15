import styles from './Schedule.module.scss';
import { ISchedule } from "@/interfaces/events";

type ScheduleItemProps = { data: ISchedule, };

export function ScheduleItem({ data }: ScheduleItemProps) {
  const { time, description, speaker } = data.attributes;

  const costumeTime = new Date(`2024-01-01T${time}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.item}>
      <div className={styles.timeBox}>
        <span className={styles.time}>{costumeTime}</span>
      </div>
      <span className={styles.description}>{description}</span>
      <span className={styles.speaker}>{speaker}</span>
    </div>
  );
};