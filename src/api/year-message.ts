import { IQueryFromStrapi } from '@/types/queries';
import { getOptions } from './options';
import { IYearMessage } from '@/types/year-message';

export const fetchYearMessage = async () => {
	const options = getOptions('GET');

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/message-for-years?populate=*`,
			{
				...options,
				// next: {
				//   revalidate: 180
				// }
				cache: 'force-cache',
			}
		);

		if (!response.ok) throw new Error('Failed while fetching year message!');

		const { data }: IQueryFromStrapi<IYearMessage> = await response.json();
		return data[0];
	} catch (error: any) {
		throw new Error(error.message);
	}
};
