'use client';

import styles from './CustomIframe.module.scss';

import { useState } from 'react';
import Image from 'next/image';

interface IProps {
  src: string;
  thumb: string;
  alt: string;
}

const CustomIframe = ({ src, thumb, alt }: IProps) => {
  const [iframe, setIframe] = useState<boolean>(false);

  const handleClick = () => {
    setIframe(true);
  };

  return (
    <div className={styles.video}>
      {
        iframe ? (
          <iframe
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
        ) : (
          <>
            <button onClick={handleClick} className={styles.btn}>
              <Image
                className={styles.playBtn}
                width={80}
                height={80}
                src="/img/svg/play-btn.svg"
                alt="Play Button"
                priority
              />
            </button>
            {
              thumb &&
              <Image
                sizes='auto'
                className={styles.img}
                src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${thumb}`}
                alt={alt}
                fill
                priority
              />
            }
          </>
        )
      }
    </div>
  );
};

export { CustomIframe };
