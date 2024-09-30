import styles from './Schedule.module.scss';
import { ISchedule } from '@/types/events';
import { Fragment } from 'react';
import { ScheduleItemsList } from './ScheduleItemsList';

type ScheduleListProps = { data: ISchedule[] };

export function ScheduleList({ data }: ScheduleListProps) {
	return (
		<div className='schedule'>
			{data.map(date => (
				<Fragment key={date.id}>
					<div className={styles.day}>
						<div className={styles.date}>
							<span className={styles.dayNumber}>
								{new Date(date.attributes.date).getDate()}
							</span>
							<div className={styles.dayInfo}>
								<span className={styles.month}>
									{new Date(date.attributes.date).toLocaleDateString('ru', {
										month: 'long',
									})}
								</span>
								<span className={styles.weekday}>
									{new Date(date.attributes.date).toLocaleDateString('ru', {
										weekday: 'long',
									})}
								</span>
							</div>
						</div>
						<div className={styles.events}>
							<ScheduleItemsList
								schedule_items={date.attributes.schedule_items.data}
							/>
						</div>
					</div>
				</Fragment>
			))}
		</div>
	);
}
