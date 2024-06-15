import styles from "./Schedule.module.scss";
import { unbounded } from "@/constants/fonts";
import { ISchedule } from "@/interfaces/events";
import { ScheduleList } from "./ScheduleList";

type ScheduleProps = { schedule: ISchedule[], };

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <h2 className={`${unbounded.className} ${styles.title}`}>Расписание</h2>
        <ScheduleList data={schedule} />
      </div>
    </section>
  );
};