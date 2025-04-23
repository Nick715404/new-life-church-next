'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowIcon } from '@/components/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import styles from '../model/styles.module.scss';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const speakers = [
	{
		label: 'Армен Асатрян',
		description: 'Молодежный пастор церкви «Слово жизни» Москва',
		image: '/img/youth-magnit/armen.png',
	},
	{
		label: 'Алексей Пластинин',
		description: 'Старший пастор церкви «Слово жизни» Магнитогорск',
		image: '/img/youth-magnit/plastinin.png',
	},
	{
		label: 'Александр Окунев',
		description: 'Молодежный пастор церкви «Слово жизни» Челябинск',
		image: '/img/youth-magnit/okunev.png',
	},
];

export const SpeakersSwiper = () => {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<>
			<Swiper
				loop
				// modules={[Autoplay]}
				// autoplay={{
				// 	delay: 4500,
				// }}
				className={styles.swiper}
				onSwiper={swiper => {
					if (swiper) {
						swiperRef.current = swiper;
					}
				}}
			>
				{speakers.map((speaker, index) => (
					<SwiperSlide key={index}>
						<div className={styles.slide}>
							<h3 className={styles.title}>{speaker.label}</h3>
							<div className={styles.image}>
								<Image
									fill
									quality={100}
									src={speaker.image}
									alt={speaker.label}
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<p className={styles.description}>{speaker.description}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.controllers}>
				<button
					title='Предыдущий слайд'
					aria-label='Предыдущий слайд'
					className={styles.btn}
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<ArrowIcon />
				</button>
				<button
					title='Следующий слайд'
					aria-label='Следующий слайд'
					className={styles.btn}
					onClick={() => swiperRef.current?.slideNext()}
				>
					<ArrowIcon isReversed />
				</button>
			</div>
		</>
	);
};
