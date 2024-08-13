import { ISchedule } from '@/shared/interfaces/events';

type ScheduleDateProps = {
	date: string;
	scheduleItem: ISchedule;
};

export function ScheduleDate({ date, scheduleItem }: ScheduleDateProps) {
	return (
		<div>
			{date === scheduleItem.attributes.date ? (
				<span>{date}</span>
			) : (
				<span>{scheduleItem.attributes.date}</span>
			)}
		</div>
	);
}
