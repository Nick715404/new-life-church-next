export type TNearEvent = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	backgroundImage: {
		data: {
			id: number;
			attributes: {
				name: string;
				width: number;
				height: number;
				url: string;
				createdAt: Date;
				updatedAt: Date;
			};
		};
	};
	createdAt: Date;
	updatedAt: Date;
};
