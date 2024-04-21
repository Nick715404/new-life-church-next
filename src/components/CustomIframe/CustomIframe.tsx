'use client';

import { useState } from 'react';
import styles from './CustomIframe.module.scss';

import Image from 'next/image';

interface IProps {
  src: string;
}

const CustomIframe = ({ src }: IProps) => {
  const [iframe, setIframe] = useState<boolean>(false);

  const handleClick = () => {
    setIframe(true);
  }

  return (
    <div className={styles.video}>
      {
        iframe ? null : <button onClick={handleClick} className={styles.btn}>
          <Image
            width={100}
            height={100}
            src='img/svg/play-btn.svg'
            alt=''
          />
        </button>
      }
      {
        iframe && <iframe
          className={styles.customIframe}
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      }
    </div>
  )
}

export { CustomIframe };