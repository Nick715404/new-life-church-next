'use client';

import styles from './Forms.module.scss';
import { FormChooser } from './FormChooser';
import { Modal } from '../Modal/Modal';
import { IEventType } from '@/interfaces/events';
import { useState } from 'react';
import { useStopScrolling } from '@/hooks/useStopScrolling';
import { useDispatch } from 'react-redux';
import { addPrice, addRole } from '@/store/eventSlice';

type FormChooseButtonProps = { type: IEventType, slug?: string, price: number, role: string, };

export const FormChooserButton = ({ type, slug, price, role }: FormChooseButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { remove, set } = useStopScrolling();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setActive(true);
    set();
    dispatch(addPrice(price));
    dispatch(addRole(role));
  };

  const handleClose = () => {
    setActive(false);
    remove();
    dispatch(addPrice(0));
    dispatch(addRole('default'));
  };

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