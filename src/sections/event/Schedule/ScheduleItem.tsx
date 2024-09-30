import styles from './Schedule.module.scss';
import { TScheduleItem } from '@/types/events';

type ScheduleItemProps = { data: TScheduleItem };

export function ScheduleItem({ data }: ScheduleItemProps) {
	const {
		attributes: { event_description, event_speaker, time },
	} = data;

	const costumeTime = new Date('1970-01-01T' + time).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});

	return (
		<div className={styles.item}>
			<div className={styles.timeBox}>
				<span className={styles.time}>{costumeTime}</span>
			</div>
			<div className={styles.info}>
				<span className={styles.description}>{event_description}</span>

				{event_speaker ? (
					<span className={styles.speaker}>{event_speaker}</span>
				) : null}
			</div>
		</div>
	);
}
