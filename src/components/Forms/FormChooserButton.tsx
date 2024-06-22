'use client';

import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import styles from './Forms.module.scss';
import { FormChooser } from './FormChooser';
import { IEventType } from '@/interfaces/events';

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