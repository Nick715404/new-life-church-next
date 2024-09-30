'use client';

import styles from './DonationBanner.module.scss';
import { halvar } from '@/constants/fonts';
import { TEventItems } from '@/types/events';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { useDonationBanner } from './useDonationBanner';

type DonationBannerItemProps = {
	item: TEventItems;
};

export const DonationBannerItem = ({ item }: DonationBannerItemProps) => {
	const {
		attributes: {
			price,
			increase_price,
			paymentType,
			increased_price_date,
			form_link,
		},
	} = item;

	const { increasedDate, selectedType } = useDonationBanner({
		date: increased_price_date,
		paymentType: paymentType,
	});

	return (
		<div className={styles.item}>
			<span className={styles.description}>{selectedType?.value}</span>
			<div className={styles.info}>
				<div className={styles.priceInfo}>
					<span className={`${styles.price} ${halvar.className}`}>
						{price}р
					</span>
					{increase_price && increase_price ? (
						<span className={styles.increasedPriceText}>
							{increasedDate} - {increase_price}р
						</span>
					) : null}
				</div>
				<DonationButton
					as='link'
					href={form_link}
					text='Зарегистрироваться'
					style='white'
				/>
			</div>
		</div>
	);
};
