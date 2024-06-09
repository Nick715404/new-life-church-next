"use client";

import 'swiper/css';
import 'swiper/css/navigation';

import { ISpeaker } from '@/interfaces/speakers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SpeakerSwiperItem } from './SpeakerSwiperItem';

type SpeakerSwiperProps = { slides: ISpeaker, };

export function SpeakerSwiper({ slides }: SpeakerSwiperProps) {
  return (
    <Swiper slidesPerView={3.8} spaceBetween={20}>
      {
        slides.data.map(slide => (
          <SwiperSlide key={slide.id}>
            <SpeakerSwiperItem data={slide} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};