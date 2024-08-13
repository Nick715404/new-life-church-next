import styles from './Schedule.module.scss';
import { ISchedule } from '@/shared/interfaces/events';
import { ScheduleList } from './ScheduleList';
import { halvar } from '@/constants/fonts';

type ScheduleProps = { schedule: ISchedule[] };

export function Schedule({ schedule }: ScheduleProps) {
	if (schedule.length === 0) {
		return null;
	}

	return (
		<section className={styles.section}>
			<div className='container-small'>
				<h2 className={`${halvar.className} ${styles.title}`}>Расписание</h2>
				<ScheduleList data={schedule} />
			</div>
		</section>
	);
}
