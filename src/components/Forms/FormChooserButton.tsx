'use client';

import styles from './Forms.module.scss';
import { FormChooser } from './FormChooser';
import { Modal } from '../Modal/Modal';
import { IEventType } from '@/interfaces/events';
import { useState } from 'react';
import { useStopScrolling } from '@/hooks/useStopScrolling';

type FormChooseButtonProps = { type: IEventType, slug?: string, };

export const FormChooserButton = ({ type, slug }: FormChooseButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { remove, set } = useStopScrolling();

  const handleOpen = () => {
    setActive(true);
    set();
  };

  const handleClose = () => {
    setActive(false);
    remove();
  }

  return (
    <>
      <button onClick={handleOpen} className={styles.btn}>Зарегистрироваться</button>
      {
        active &&
        <Modal setClose={handleClose}>
          <FormChooser type={type} slug={slug} />
        </Modal>
      }
    </>
  );
};