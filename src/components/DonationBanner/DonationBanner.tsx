'use client';

import styles from './DonationBanner.module.scss';
import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { TEventItems } from '@/interfaces/events';
import { DontaionBannerList } from './DontaionBannerList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { fetchEvent } from '@/store/eventSlice';

type DonationBannerProps = {
	data: TEventItems[];
	slug: string;
};

export function DonationBanner({ data, slug }: DonationBannerProps) {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchEvent(slug));
	}, [slug]);

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
							alt=''
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
