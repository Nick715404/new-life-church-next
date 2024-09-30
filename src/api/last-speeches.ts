import { IQueryFromStrapi } from '@/types/queries';
import { getOptions } from './options';
import { ILastSermon } from '@/types/last-sermons';

export const fetchAllLastSpeeches = async () => {
	const options = getOptions('GET');

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/last-speeches?populate=*`,
			{
				...options,
				cache: 'no-store',
			}
		);

		if (!response.ok) throw new Error('Failed white fetching last speeches');

		const data: IQueryFromStrapi<ILastSermon> = await response.json();

		return data.data;
	} catch (error) {
		throw new Error('Failed white fetching last speeches');
	}
};
