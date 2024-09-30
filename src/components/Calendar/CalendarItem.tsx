import styles from './Calendar.module.scss';

import { ICalendar } from '@/types/calendar';
import { useCalendar } from './useCalendar';
import { CalendarEvent } from './CalendarEvent';

type Props = {
	data: ICalendar;
};

const CalendarItem = ({ data }: Props) => {
	const className = useCalendar({ day: data.day, styles: styles });

	return (
		<div className={className}>
			<div className={styles.dateWrapper}>
				<div className={styles.dayNumber}>{data.date_number}</div>
				<div className={styles.infoWrapper}>
					<div className={styles.info}>{data.month}</div>
					<div className={styles.info}>{data.day}</div>
				</div>
			</div>
			<div className={styles.events}>
				{data.calendar_items.data.map(item => (
					<CalendarEvent
						key={item.id}
						time={item.attributes.time}
						title={item.attributes.title}
					/>
				))}
			</div>
		</div>
	);
};

export { CalendarItem };
