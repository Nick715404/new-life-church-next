import { typesEventsArray } from '@/constants/utils';

type useDonationBannseProps = {
	date: string;
	paymentType: string;
};

export const useDonationBanner = ({
	date,
	paymentType,
}: useDonationBannseProps) => {
	const selectedType = typesEventsArray.find(
		type => type.paymentType === paymentType
	);
	const increasedDate = new Date(date).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
	});

	return {
		selectedType,
		increasedDate,
	};
};
