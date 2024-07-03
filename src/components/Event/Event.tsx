'use client';

import styles from './Event.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEvent } from './useEvent';
import { halvar } from '@/constants/fonts';
import { IEvent } from '@/interfaces/events';

interface IProps { data: IEvent, };

const Event = ({ data }: IProps) => {
  const { className, handleMouseLeave, handleMouseOn, url } = useEvent({ data: data });

  return (
    <div
      id='event'
      className={className}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.tag}>
            Событие
          </div>
          <h2 className={`${styles.title} ${halvar.className}`}>{data.title}</h2>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>
              {data.small_description}
            </p>
          </div>
        </div>
      </div>
      <Image
        className={styles.background}
        src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${url}`}
        alt={data.title}
        fill
        priority
      />
      <Link className={styles.link} href={`/events/${data.slug}`} />
    </div>
  )
}

export { Event };