'use client';

import Image from 'next/image';
import { TNearEvent } from '../model';
import { halvar } from '@/constants/fonts';
import { Fragment } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../model/styles.module.scss';

type NearEventsSwiperProps = {
	items: {
		id: number;
		attributes: TNearEvent;
	}[];
};

export const NearEventsSwiper = ({ items }: NearEventsSwiperProps) => {
	return (
		<Swiper
			loop={true}
			autoplay={{
				delay: 3500,
				disableOnInteraction: true,
			}}
			pagination={{
				dynamicBullets: true,
			}}
			spaceBetween={10}
			slidesPerView={1}
			modules={[Autoplay, Pagination]}
		>
			{items.map((item, index) => {
				const {
					attributes: {
						title,
						endDate,
						startDate,
						description,
						backgroundImage,
					},
				} = item;

				const changedStartDate = new Date(startDate).toLocaleDateString(
					'ru-RU',
					{
						day: 'numeric',
						month: 'long',
					}
				);

				const changedEndDate = new Date(endDate).toLocaleDateString('ru-RU', {
					day: 'numeric',
					month: 'long',
				});
				return (
					<Fragment key={index}>
						<SwiperSlide className={styles.slide}>
							<div className={styles.wrapper}>
								<div className=''>
									<h3 className={`${halvar.className} ${styles.title}`}>
										{title}
									</h3>
									<p className={styles.description}>{description}</p>
								</div>
								<div className={styles.dates}>
									<span>с {changedStartDate} - </span>
									<span>по {changedEndDate}</span>
								</div>
							</div>
							<Image
								className={styles.image}
								src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${backgroundImage.data.attributes.url}`}
								alt={title}
								fill
							/>
						</SwiperSlide>
					</Fragment>
				);
			})}
		</Swiper>
	);
};
