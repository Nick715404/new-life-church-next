import { getOptions } from './options';

export const sendContactsFormData = async (data: unknown) => {
	const options = getOptions('POST', data);

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts`,
			{ ...options }
		);

		if (!response.ok) {
			throw new Error('Сообщение не отправлено');
		}

		return await response.json();
	} catch (error) {
		throw new Error('Сообщение не отправлено' + error);
	}
};
