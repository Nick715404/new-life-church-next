"use client";

import 'swiper/css';
import 'swiper/css/navigation';

import { ISpeaker } from '@/interfaces/speakers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SpeakerSwiperItem } from './SpeakerSwiperItem';

type SpeakerSwiperProps = { slides: ISpeaker, };

export function SpeakerSwiper({ slides }: SpeakerSwiperProps) {
  return (
    <Swiper
      slidesPerView={3.8}
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1.8,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 40,
          centeredSlides: false,
        },
        1070: {
          slidesPerView: 2.8,
          spaceBetween: 50,
        },
        1170: {
          slidesPerView: 3.8,
          spaceBetween: 50,
        },
      }}>
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