'use client';

import styles from './Forms.module.scss';
import { FormChooser } from './FormChooser';
import { Modal } from '../Modal/Modal';
import { IEventType } from '@/interfaces/events';
import { useState } from 'react';

type FormChooseButtonProps = { type: IEventType, slug?: string, };

export const FormChooserButton = ({ type, slug }: FormChooseButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => setActive(true);

  return (
    <>
      <button onClick={handleClick} className={styles.btn}>Зарегистрироваться</button>
      {
        active &&
        <Modal setClose={() => setActive(false)}>
          <FormChooser type={type} slug={slug} />
        </Modal>
      }
    </>
  );
};