export type TBusinessPerson = {
	data: {
		id: number;
		attributes: {
			first_name: string;
			last_name: string;
			sur_name: string;
			phone: string;
			email: string;
			church: string;
			occupation: null | string;
			pastor_type: string;
			vector: string;
			createdAt: Date;
			updatedAt: Date;
			publishedAt: Date;
			personType: string;
			status: 'pending' | 'payed' | 'notPayed';
			personId: string;
		};
	};
	meta: {};
};
