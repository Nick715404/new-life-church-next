import styles from './Schedule.module.scss';
import { useDate } from './useDate';
import { ScheduleItem } from './ScheduleItem';
import { ISchedule } from '@/shared/interfaces/events';
import { Fragment } from 'react';

type ScheduleListProps = { data: ISchedule[] };

export function ScheduleList({ data }: ScheduleListProps) {
	const { groupedEvents } = useDate({ data: data });

	return (
		<div className='schedule'>
			{Object.keys(groupedEvents).map(date => (
				<Fragment key={date}>
					<div className={styles.day}>
						<div className={styles.date}>
							<span className={styles.dayNumber}>
								{new Date(date).getDate()}
							</span>
							<div className={styles.dayInfo}>
								<span className={styles.month}>
									{new Date(date).toLocaleDateString('ru', { month: 'long' })}
								</span>
								<span className={styles.weekday}>
									{new Date(date).toLocaleDateString('ru', { weekday: 'long' })}
								</span>
							</div>
						</div>
						<div className={styles.events}>
							{groupedEvents[date].map(item => (
								<ScheduleItem key={item.id} data={item} />
							))}
						</div>
					</div>
				</Fragment>
			))}
		</div>
	);
}
