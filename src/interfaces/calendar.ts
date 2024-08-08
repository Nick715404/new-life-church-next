export interface ICalendar {
	createdAt?: string;
	updatedAt?: string;
	date_number: number;
	time: string;
	month: string;
	day: string;
	title: string;
	calendar_items: {
		data: TCalendarItem[];
	};
}

export type TCalendarItem = {
	id: number;
	attributes: {
		time: string;
		createdAt: string;
		updatedAt: string;
		title: string;
	};
};
