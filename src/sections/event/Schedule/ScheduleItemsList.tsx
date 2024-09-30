import { TScheduleItem } from '@/types/events';
import { ScheduleItem } from './ScheduleItem';
import { Fragment } from 'react';

type ScheduleItemsListProps = {
	schedule_items: TScheduleItem[] | [];
};

export const ScheduleItemsList = ({
	schedule_items,
}: ScheduleItemsListProps) => {
	return (
		<>
			{schedule_items.length > 0 ? (
				schedule_items?.map(item => (
					<Fragment key={item.id}>
						<ScheduleItem data={item} />
					</Fragment>
				))
			) : (
				<span>Расписание скоро появится</span>
			)}
		</>
	);
};
