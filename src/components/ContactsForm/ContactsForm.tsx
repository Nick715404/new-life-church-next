'use client';

import styles from './ContactsForm.module.scss';
import { unbounded } from '@/constants/fonts';
import { useFormHook } from '@/hooks/useForm';
import { formThemesVariants } from '@/constants/form';
import { useState } from 'react';
import CustomSelect from './CustomSelect';
import { log } from 'console';
import { ErrorMessage } from './Error';


const ContactsForm = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useFormHook();
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
    // console.log(JSON.stringify(data));
    reset();
  }

  return (
    <div className={styles.formBox}>
      <h3 className={`${styles.title} ${unbounded.className}`}>
        Обратная связь
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <CustomSelect />
        <label htmlFor="name">
          <input
            id='name'
            placeholder='Имя'
            className={`${styles.input} ${styles.formItem}`}
            type="text"
            {...register('name', {
              required: 'Поле "Имя" обязательно к заполнению'
            })}
          />
          <ErrorMessage message={errors?.name?.message || ''} />
        </label>
        <label htmlFor="">
          <input
            placeholder='Email'
            className={`${styles.input} ${styles.formItem}`}
            type="email"
            {...register('email', {
              required: 'Поле "Email" обязательно к заполнению'
            })}
          />
          <ErrorMessage message={errors?.email?.message || ''} />
        </label>
        <label htmlFor="">
          <input
            placeholder='Телефон'
            className={`${styles.input} ${styles.formItem}`}
            type="text"
            {...register('phone', {
              required: 'Поле "Телефон" обязательно к заполнению',
              minLength: {
                value: 11,
                message: 'Телефон должен иметь минимум одиннадцать символов'
              }
            })}
          />
          <ErrorMessage message={errors?.phone?.message || ''} />
        </label>
        <textarea
          placeholder='Ваше сообщение'
          className={`${styles.textarea} ${styles.formItem}`}
        />
        <button className={styles.btn} type='submit'>
          Отправить
        </button>
      </form >
    </div >
  )
}

export { ContactsForm };