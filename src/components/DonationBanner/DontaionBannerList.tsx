import styles from './DonationBanner.module.scss';

import { TEventItems } from '@/interfaces/events';
import { DonationBannerItem } from './DonationBannerItem';

type DontaionBannerListProps = {
	items: TEventItems[];
};

export const DontaionBannerList = ({ items }: DontaionBannerListProps) => {
	return (
		<div className={styles.itemsList}>
			{items.map(item => (
				<DonationBannerItem key={item.id} item={item} />
			))}
		</div>
	);
};
