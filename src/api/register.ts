type TBusinesEvent = {
	church: string;
	city: string;
	eventType: 'business';
	first_name: string;
	last_name: string;
	sur_name: string;
	occupation: null | string;
	pastor_type: string;
	source: string;
	vector: string;
	phone: string;
	email: string;
	personType: string;
};

export const sendDataToBusiness = async (
	data: TBusinesEvent
): Promise<{ status: 'done' }> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({ data }),
			}
		);

		return { status: 'done' };
	} catch (error) {
		console.error(error);
		throw new Error('Ошибка в регистрации пользователя на Бизнес конференцию');
	}
};
