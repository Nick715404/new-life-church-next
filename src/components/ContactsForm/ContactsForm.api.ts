import { TContactsForm } from './useContactsForm';

type TSubmitFormPromise = {
	message: string;
	status: 'success' | 'error';
};

export const submitForm = async (
	body: TContactsForm<string>
): Promise<TSubmitFormPromise> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts/submit-form`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			}
		);

		if (!response.ok) {
			throw new Error('Error while submiting form');
		}

		const data = await response.json();

		console.log(data);
		return data;
	} catch (error) {
		throw new Error('Error while submiting form');
	}
};
