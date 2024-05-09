'use client';

import styles from './Event.module.scss';

import { IEvent } from '@/interfaces/events';
import { unbounded } from '@/constants/fonts';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: IEvent;
}

const Event = ({ data }: IProps) => {
  const [onEvent, setOnEvent] = useState<boolean>();
  const url = data.background.data.attributes.url;
  const className = onEvent ? `${styles.event} ${styles.up}` : `${styles.event}`;

  const handleMouseOn = () => setOnEvent(true);
  const handleMouseLeave = () => setOnEvent(false);

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
          <h2 className={`${styles.title} ${unbounded.className}`}>{data.title}</h2>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <Image
        className={styles.background}
        src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${url}`}
        alt={data.title}
        fill
      />
      <Link className={styles.link} href={`/events/${data.slug}`} />
    </div>
  )
}

export { Event };