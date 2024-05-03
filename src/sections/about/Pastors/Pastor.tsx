'use client';

import styles from './Pastors.module.scss';
import { unbounded } from '@/constants/fonts';
import { IPastor } from "@/interfaces/pastors";
import Image from 'next/image';
import { useState } from 'react';

type TProps = {
  data: IPastor;
}

const Pastor = ({ data }: TProps) => {
  const [status, setStatus] = useState<boolean>(false);

  const handleClick = () => {
    setStatus(!status);
  }
  return (
    <div id={`pastor-${data.id}`} className={styles.item}>
      <div className={styles.imgBox}>
        <Image
          priority
          className={styles.img}
          fill
          sizes='(max-width: 768px) 100%, '
          src={data.thumbnail}
          alt={data.name}
        />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.textBox}>
          <h3 className={`${styles.title} ${unbounded.className}`}>{data.name}</h3>
          <span>{data.rank}</span>
        </div>
        <button className={styles.btn} onClick={handleClick}>
          <span className={`${styles.linkTitle} ${unbounded.className}`}>
            Подробнее
          </span>
          <div className={styles.linkCircle}>
            <Image
              className={status ? `${styles.linkImg} ${styles.up}` : `${styles.linkImg}`}
              width={18}
              height={18}
              src='img/svg/black-arrow.svg'
              alt='О нашей церкви'
            />
          </div>
        </button>
      </div>
      {
        status && data.description !== '' &&
        <div className={styles.moreDescription}>
          <p className={styles.description}>{data.description}</p>
        </div>
      }
    </div>
  )
}

export { Pastor };