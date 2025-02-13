'use client';

import Image from 'next/image';
import Link from 'next/link';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '@/components/MotionBox';
import { eventSwitcher } from '@/utils/register/session';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function ThanksPage() {
	const router = useRouter();

	const storeManipulate = async (storedData: any) => {
		const data = JSON.parse(storedData);
		const res = await eventSwitcher(data);
		if (res?.status === 'done') {
			localStorage.removeItem('formData');
		} else {
			router.push('/payment-error');
		}
	};

	useEffect(() => {
		const storedData = localStorage.getItem('formData');
		if (storedData) {
			storeManipulate(storedData);
		}
	}, []);

	return (
		<main className='thanks children-page'>
			<div className='container'>
				<div className={styles.wrapper}>
					<MotionBox className={styles.imgBox}>
						<Image
							priority
							className={styles.image}
							width={610}
							height={245}
							src='/img/png/thanks-img.webp'
							alt='Спасибо за пожертвование'
						/>
					</MotionBox>
					<MotionBox delay={0.2}>
						<h1 className={`${styles.title} ${halvar.className}`}>
							Спасибо за ваше <br /> щедрое сердце
						</h1>
					</MotionBox>
					<MotionBox delay={0.3}>
						<p className={styles.text}>
							Вся информация направлена <br /> вам на почту.
						</p>
					</MotionBox>
					<MotionBox delay={0.4} className={styles.linkBox}>
						<Link className={styles.link} href='/'>
							На главную
						</Link>
					</MotionBox>
				</div>
			</div>
		</main>
	);
}
