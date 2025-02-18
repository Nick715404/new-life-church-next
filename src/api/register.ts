import { TBusinessPerson } from '@/types/persons';

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
	status: 'pending' | 'payed' | 'notPayed';
	personId: string;
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

export const findUniquePersonOfBusiness = async (
	invId: string
): Promise<TBusinessPerson | undefined> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas?filters[personId][$eq]=${invId}`
		);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};

export const updateBusinessPersonStatus = async (
	userId: number,
	newStatus: 'payed' | 'notPayed' | 'pending'
) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas/${userId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: { status: newStatus } }),
			}
		);

		const data = await res.json();
		console.log(data);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};

export const deleteBusinessPerson = async (userId: number) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas/${userId}`,
			{
				method: 'DELETE',
			}
		);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};

type TSendDataToYouthUral = {
	church: string;
	city: string;
	email: string;
	eventType: 'youthural';
	first_name: string;
	home_cover: false;
	last_name: string;
	personType: string;
	phone: string;
};

export const sendDataToYouthUral = async (
	data: TSendDataToYouthUral
): Promise<{ status: 'done' }> => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ data }),
		});

		return { status: 'done' };
	} catch (error) {
		console.error(error);
		throw new Error('Ошибка в регистрации пользователя на Бизнес конференцию');
	}
};

export const findUniquePersonOfYouthUral = async (
	invId: string
): Promise<TBusinessPerson | undefined> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals?filters[personId][$eq]=${invId}`
		);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};

export const updateYouthuralPersonStatus = async (
	userId: number,
	newStatus: 'payed' | 'notPayed' | 'pending'
) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals/${userId}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: { status: newStatus } }),
			}
		);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};

export const deleteYouthuralPerson = async (userId: number) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals/${userId}`,
			{
				method: 'DELETE',
			}
		);

		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
};
