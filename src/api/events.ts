import { IQueryFromStrapi, IQueryFromStrapiSingle } from '@/types/queries';
import { getOptions } from './options';
import { IEvent } from '@/types/events';
import { TNearEvent } from '@/components/swipers/ui/NearEventsSwiper/model';

export const fetchEvents = async () => {
	const options = getOptions('GET');

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/events?populate=*`,
			{
				...options,
				next: { revalidate: 180 },
			}
		);

		if (!response.ok) throw new Error('Error to fetch events');

		const { data }: IQueryFromStrapi<IEvent> = await response.json();
		return data;
	} catch (error) {
		throw new Error('Error to fetch events');
	}
};

export const fetchSingleEvent = async (slug: string) => {
	const options = getOptions('GET');

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/event/${slug}?populate[background]=*&populate[speakers][populate][image]=*&populate[schedules][populate][schedule_items]=*&populate[gallery]=*&populate[event_items]=*`,
			{
				...options,
				cache: 'no-cache',
			}
		);

		if (!response.ok) throw new Error('Error to fetch event');

		const { data }: IQueryFromStrapiSingle<IEvent> = await response.json();
		return data;
	} catch (error) {
		throw new Error('Error to fetch event' + error);
	}
};

export const fetchNearEvents = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/near-events?populate=*`,
			{ next: { revalidate: 180 } }
		);

		if (!res.ok) {
			throw new Error('Ошибка в получении последних мероприятий');
		}

		const { data } = await res.json();

		return data;
	} catch (error) {
		console.error(error);
		throw new Error('Ошибка в получении последних мероприятий');
	}
};
