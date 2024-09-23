'use client';

import styles from './DonationBanner.module.scss';
import { halvar } from '@/constants/fonts';
import { TEventItems } from '@/interfaces/events';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { useDonationBanner } from './useDonationBanner';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type DonationBannerItemProps = {
	item: TEventItems;
};

export const DonationBannerItem = ({ item }: DonationBannerItemProps) => {
	const {
		attributes: { price, increase_price, paymentType, increased_price_date },
	} = item;

	const { increasedDate, selectedType } = useDonationBanner({
		date: increased_price_date,
		paymentType: paymentType,
	});

	const href = useSelector((state: RootState) => state.event.formLink);

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
					href={href}
					text='Зарегистрироваться'
					style='white'
				/>
			</div>
		</div>
	);
};
