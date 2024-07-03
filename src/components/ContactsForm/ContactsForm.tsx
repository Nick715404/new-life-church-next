'use client';

import styles from './ContactsForm.module.scss';
import { halvar,  } from '@/constants/fonts';
import { ErrorMessage } from './Error';
import { useContactsForm } from './useContactsForm';
import { CustomSelect } from '../CustomSelect/CustomSelect';

const ContactsForm = () => {
  const { errors, handleSubmit, onSubmit, register, formStatus } = useContactsForm();

  if (formStatus === 'sended') {
    return (
      <div className={`${styles.formBox} ${styles.sended}`}>
        <h3 className={`${styles.title} ${halvar.className}`}>
          Спасибо, что поделились с нами!
        </h3>
      </div>
    )
  }

  return (
    <div className={styles.formBox}>
      <h3 className={`${styles.title} ${halvar.className}`}>
        Обратная связь
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <CustomSelect register={register} />
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
          {...register('description', {
            maxLength: {
              value: 280,
              message: 'Максимальное допустимое значение символов - 280'
            }
          })}
        />
        <button className={styles.btn} type='submit'>
          Отправить
        </button>
      </form >
    </div >
  )
}

export { ContactsForm };