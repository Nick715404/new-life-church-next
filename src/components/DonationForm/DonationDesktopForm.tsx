'use client';

import styles from './DonationForm.module.scss';
import { useUniversalForm } from "@/hooks/useUniversalForm";
import { FC } from "react";

type InputListProps = {}

export const DonationDesktopForm: FC<InputListProps> = ({ }) => {
  const { errors, handleSubmit, isLoading, isValid, onSubmit, register } = useUniversalForm();

  return (
    <form className={styles.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('price', { required: 'Это поле обязательно для заполнения' })}
        placeholder="Введите сумму"
        className={styles.input}
        type="number" />
      <button className={styles.submitBtn} type="submit">Пожертвовать</button>
    </form>
  );
};