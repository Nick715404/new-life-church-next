'use client';

import Image from 'next/image';
import Link from 'next/link';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '@/components/MotionBox';
import { eventSwitcher } from '@/utils/register/session';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { sendEmail } from '@/utils';
import { storeManipulate } from '@/utils/local-storage';

export default function ThanksPage() {
	const [status, setStatus] = useState<'pending' | 'loading' | 'loaded'>(
		'pending'
	);
	const router = useRouter();

	useEffect(() => {
		const storedData = localStorage.getItem('formData');

		if (storedData) {
			storeManipulate(storedData, setStatus, router);
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
						{status === 'loading' && (
							<h1 className={`${styles.title} ${halvar.className}`}>
								Пожалуйста не покидайте <br /> страницу
							</h1>
						)}
						{status !== 'loading' && (
							<h1 className={`${styles.title} ${halvar.className}`}>
								Спасибо за ваше <br /> щедрое сердце
							</h1>
						)}
					</MotionBox>
					<MotionBox delay={0.3}>
						{status === 'loading' ? (
							<p className={styles.text}>
								Мы регистрируем вас на мероприятие, пожалуйста подождите
							</p>
						) : (
							<p className={styles.text}>
								Вся информация направлена <br /> вам на почту.
							</p>
						)}
					</MotionBox>
					<MotionBox delay={0.4} className={styles.linkBox}>
						{status === 'loading' ? (
							<span>Загрузка...</span>
						) : (
							<Link className={styles.link} href='/'>
								На главную
							</Link>
						)}
					</MotionBox>
				</div>
			</div>
		</main>
	);
}
