'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CustomSwiper.module.scss';

import { ILastSermon } from '@/interfaces/last-sermons';
import { IDataFromStrapi } from '@/interfaces/queries';
import { CustomIframe } from '../CustomIframe/CustomIframe';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  data: IDataFromStrapi<ILastSermon>[]
}

const CustomSwiper = ({ data }: IProps) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={26}
      navigation={true}
      modules={[Navigation]}
      className={styles.customSwiper}
    >
      {
        data.map(({ id, attributes }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <CustomIframe src={attributes.link} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export { CustomSwiper };