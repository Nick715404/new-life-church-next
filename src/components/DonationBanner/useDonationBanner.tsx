import { typesEventsArray } from '@/constants/utils';

type helperTypes = Partial<{
	price: string;
	increase_price: string;
	increased_price_date: string;
	form_link: string;
}>;

type useDonationBannseProps = {
	date: string;
	paymentType: string;
} & helperTypes;

export const useDonationBanner = ({
	date,
	paymentType,
	increase_price,
	increased_price_date,
	price,
}: useDonationBannseProps) => {
	const today = new Date();
	const targetDay = new Date(date);

	const selectedType = typesEventsArray.find(
		type => type.paymentType === paymentType
	);

	const increasedDate = new Date(date).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
	});

	const priceSwitcher = () => {
		if (!increase_price) {
			return price;
		}

		if (targetDay <= today) {
			return increase_price;
		} else {
			return price;
		}
	};

	const increasedPriceSwitcher = () => {
		return targetDay <= today ? null : `${increasedDate} - ${increase_price}р`;
	};

	return {
		selectedType,
		increasedDate,
		priceSwitcher,
		increasedPriceSwitcher,
	};
};
