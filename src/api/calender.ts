import { getOptions } from './options';

import { IQueryFromStrapi } from '@/types/queries';
import { ICalendar } from '@/types/calendar';

export const fetchAllCalendarEvents = async () => {
	const options = getOptions('GET');

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/calendars?populate=*`,
			{
				...options,
				next: { revalidate: 240 },
			}
		);

		if (!response.ok) throw new Error('Failed while fetching calendar events');

		const data: IQueryFromStrapi<ICalendar> = await response.json();
		return data;
	} catch (error) {
		throw new Error('Failed while fetching calendar events');
	}
};
