'use client';

import { halvar } from '@/constants/fonts';
import styles from './ErrorSnackbar.module.scss';
import { useState } from 'react';

type ErrorSnackbarProps = {
  title: string,
  text: string,
}

export function ErrorSnackbar({ title, text }: ErrorSnackbarProps) {
  const [visible, setVisible] = useState<boolean>(true);

  const handleClick = () => setVisible(false);

  return (
    <div className={`${styles.error} ${visible === false ? styles.close : null}`}>
      <h2>{title}</h2>
      <span>{text}</span>
      <button onClick={handleClick} className={halvar.className}>Закрыть</button>
    </div>
  );
};