'use client';

import styles from './Forms.module.scss';
import { halvar } from '@/constants/fonts';
import { useForm } from "react-hook-form";
import { InputList } from './InputList';
import { CustomFormData } from '@/interfaces/utils';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import { fetchEvent } from '@/store/eventSlice';

type StandartFormProps = {
  chidren?: React.ReactNode,
  slug: string,
};

export function StandartForm({ chidren, slug }: StandartFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomFormData>({ mode: "onBlur" });
  const price = useSelector((state: RootState) => state.event.price);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const onSubmit = (data: unknown) => {
    console.log(data);
    console.log(typeof data);
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3 className={`${styles.formTitle} ${halvar.className}`}>Регистрация</h3>
        <InputList register={register} errors={errors} />
        {chidren}
        <label className={styles.checkboxLabel}>
          <input type="checkbox" name="" id="" />
          <span>Я согласен с политикой...</span>
        </label>
        <span>{`Сумма ${price}р`}</span>
        <button type="submit" className={styles.submitBtn}>Отправить</button>
      </form>
    </div>
  );
};