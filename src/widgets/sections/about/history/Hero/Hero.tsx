import { MotionBox } from '@/components/MotionBox';
import styles from './Hero.module.scss';
import { halvar } from '@/shared/constants/fonts';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<MotionBox delay={0.2}>
						<span className={styles.subtitle}>История церкви</span>
					</MotionBox>
					<MotionBox>
						<h1 className={`${styles.title} ${halvar.className}`}>
							История
							<br /> нашей церкви
						</h1>
					</MotionBox>
				</div>
			</div>
			<Image
				className={styles.background}
				fill
				src={'/img/png/history-hero-bg.jpg'}
				alt='История церкви Новая Жизнь'
			/>
		</section>
	);
};

export { Hero };
