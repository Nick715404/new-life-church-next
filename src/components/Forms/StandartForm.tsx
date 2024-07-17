'use client';
import styles from './Forms.module.scss';
import { halvar } from '@/constants/fonts';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

type StandartFormProps<T extends FieldValues> = {
  children?: React.ReactNode,
  onSubmit: (data: any) => void,
  handleSubmit: UseFormHandleSubmit<T>,
  isValid: boolean,
  price: number,
};

export function StandartForm<T extends FieldValues>({ children, onSubmit, handleSubmit, isValid, price }: StandartFormProps<T>) {
  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.standartForm}>
        <h3 className={`${styles.formTitle} ${halvar.className}`}>Регистрация</h3>
        {children}    
        <span className={`${halvar.className} ${styles.price}`}>{`Сумма ${price}р`}</span>
        <button disabled={!isValid} type='submit' className={styles.submitBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
};