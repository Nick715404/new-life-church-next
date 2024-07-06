"use client";

import styles from './DonateForm.module.scss';
import { useUniversalForm } from '@/hooks/useUniversalForm';
import Link from 'next/link';
import { DonationButton } from '../DontaionButton/DontaionButton';

export function DonateForm() {
  const { errors, handleSubmit, isLoading, isValid, onSubmit, register } = useUniversalForm();

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.donateForm}>
        <label className={styles.label}>
          <input {...register('price')} placeholder='Сумма' className={styles.input} type="number" />
          <div className={styles.button}>
            <DonationButton full as='button' type='submit' style='white' text='Пожертвовать' accent />
          </div>
        </label>
      </form>
      <p className={styles.text}>
        *Нажимая на кнопку «Пожертвовать», я соглашаюсь <br />
        с условиями <Link href="/docs">публичной оферты</Link>
      </p>
    </div>
  );
};