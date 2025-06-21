'use client';

import { ISpeaker } from '@/types/speakers';
import { SpeakerSwiperItem } from './SpeakerSwiperItem';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

type SpeakerSwiperProps = { slides: ISpeaker | null };

export function SpeakerSwiper({ slides }: SpeakerSwiperProps) {
	return (
		<Swiper
			id='speakers-swiper'
			modules={[Mousewheel]}
			freeMode={false}
			mousewheel={{
				forceToAxis: true,
				releaseOnEdges: true,
			}}
			slidesPerView={3.8}
			spaceBetween={20}
			breakpoints={{
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				640: {
					slidesPerView: 1.8,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 40,
				},
				1070: {
					slidesPerView: 2.8,
					spaceBetween: 50,
				},
				1170: {
					slidesPerView: 3.8,
					spaceBetween: 50,
				},
			}}
		>
			{slides &&
				slides.data.map(slide => (
					<SwiperSlide key={slide.id}>
						<SpeakerSwiperItem data={slide} />
					</SwiperSlide>
				))}
		</Swiper>
	);
}
