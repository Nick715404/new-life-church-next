'use client';

import styles from './JoinUs.module.scss';
import { halvar } from '@/shared/constants/fonts';
import { Socials } from '@/components/Socials/Socials';
import { MotionBox } from '@/components/MotionBox';
import { useEffect, useState } from 'react';

const JoinUs = () => {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const windowWidth: number | undefined = window.screen.availWidth;
		setWidth(windowWidth);
	}, [width]);

	return (
		<div className={styles.joinUs}>
			<div className='container'>
				<div className={styles.wrapper}>
					<MotionBox delay={0.2} className={styles.titleBox}>
						<h2 className={`${styles.title} ${halvar.className}`}>
							Хотите
							<br /> присоединиться
							<br /> к нам в соц сетях?
						</h2>
					</MotionBox>
					<div className={styles.socials}>
						{width < 768 ? (
							<Socials size='medium' mode='dark' />
						) : (
							<Socials mode='dark' size='big' />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { JoinUs };
