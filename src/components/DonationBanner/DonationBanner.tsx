'use client';

import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { TRegisterPerson } from '@/types/events';
import styles from './DonationBanner.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRegisterPersons, getEventType } from '@/store/eventSlice';
import { Popup } from '../Popup/ui';
import { PopupTrigger } from '../Popup/ui/PopupTrigger';
import { PopupContent } from '../Popup/ui/PopupContent';
import { BusinessForm } from '../forms';
import { BusinessRegisterProvider } from '@/providers/BusinessRegisterProvider/ui';
import { FormSwitcher } from '../forms/ui/FormSwitcher';

type TDonationBannerProps = {
	register_persons: TRegisterPerson[];
	event_type: string;
};

export function DonationBanner(props: TDonationBannerProps) {
	const { register_persons, event_type } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRegisterPersons(register_persons));
		dispatch(getEventType(event_type));
	}, [dispatch]);

	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h2 className={`${styles.title} ${halvar.className}`}>
						Добровольное
						<br /> пожертвование
					</h2>
					<div className={styles.btnBox}>
						<Popup>
							<PopupTrigger className={styles.btn}>
								Зарегистрироваться
							</PopupTrigger>
							<PopupContent>
								<FormSwitcher />
							</PopupContent>
						</Popup>
					</div>
					<picture className={styles.picture}>
						<source
							srcSet='/img/png/donation-banner.webp'
							media='(min-width: 769px)'
						/>
						<Image
							fill
							priority
							className={styles.img}
							alt='Добровольное пожертвование'
							src='/img/png/donation-banner-phone.webp'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
