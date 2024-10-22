import styles from './DonationBanner.module.scss';
import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { TEventItems } from '@/types/events';
import { DontaionBannerList } from './DontaionBannerList';

type DonationBannerProps = {
	data: TEventItems[];
};

export function DonationBanner({ data }: DonationBannerProps) {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h2 className={`${styles.title} ${halvar.className}`}>
						Добровольное
						<br /> пожертвование
					</h2>
					<DontaionBannerList items={data} />
					<picture className={styles.picture}>
						<source
							srcSet='/img/png/donation-banner.webp'
							media='(min-width: 769px)'
						/>
						<Image
							className={styles.img}
							priority
							fill
							src='/img/png/donation-banner-phone.webp'
							alt='Добровольное пожертвование'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
