import styles from "./Schedule.module.scss";
import { useDate } from "./useDate";
import { ScheduleItem } from "./ScheduleItem";
import { ISchedule } from "@/interfaces/events";
import { Fragment } from "react";

type ScheduleListProps = { data: ISchedule[], };

export function ScheduleList({ data }: ScheduleListProps) {
  const { groupedEvents } = useDate({ data: data });

  return (
    <div className="schedule">
      {
        Object.keys(groupedEvents).map((date) => (
          <Fragment key={date}>
            <div className={styles.day}>
              <div className={styles.date}>
                <span className={styles.dayNumber}>{new Date(date).getDate()}</span>
              </div>
              <div className={styles.events}>
                {
                  groupedEvents[date].map((item) => (
                    <ScheduleItem key={item.id} data={item} />
                  ))
                }
              </div>
            </div>
          </Fragment>
        ))
      }
    </div>
  );
};