'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CustomSwiper.module.scss';

import { ILastSermon } from '@/types/last-sermons';
import { IDataFromStrapi } from '@/types/queries';
import { CustomIframe } from '../CustomIframe/CustomIframe';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
	data: IDataFromStrapi<ILastSermon>[];
}

const CustomSwiper = ({ data }: IProps) => {
	return (
		<Swiper
			slidesPerView={2}
			spaceBetween={26}
			navigation={true}
			modules={[Navigation]}
			className={styles.customSwiper}
			breakpoints={{
				320: {
					slidesPerView: 1.1,
					spaceBetween: 14,
				},
				768: {
					slidesPerView: 1.3,
					spaceBetween: 14,
				},
				1070: {
					slidesPerView: 2,
				},
			}}
		>
			{data
				.map(({ id, attributes }) => (
					<SwiperSlide className={styles.slide} key={id}>
						<CustomIframe
							thumb={attributes.thumbnail.data.attributes.url}
							src={attributes.link}
							alt='Последняя проповедь'
						/>
					</SwiperSlide>
				))
				.reverse()}
		</Swiper>
	);
};

export { CustomSwiper };
