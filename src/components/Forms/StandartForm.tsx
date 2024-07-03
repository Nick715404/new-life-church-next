'use client';

import styles from './Forms.module.scss';
import { halvar } from '@/constants/fonts';
import { InputList } from './InputList';
import { CustomFormData } from '@/interfaces/utils';
import { useForms } from './useForms';
import Link from 'next/link';

type StandartFormProps = {
  chidren?: React.ReactNode,
  slug: string,
};

export function StandartForm({ chidren, slug }: StandartFormProps) {
  const { errors, handleSubmit, onSubmit, price, register, isValid } = useForms({ slug: slug });

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.standartForm}>
        <h3 className={`${styles.formTitle} ${halvar.className}`}>Регистрация</h3>
        <InputList register={register} errors={errors} />
        {chidren}
        <label className={styles.checkboxLabel}>
          <input
            {...register('agreement', { required: '*Поставь галочку' })}
            type="checkbox"
            className={styles.agreementChecbox} />
          <span>Я согласен с <Link href='/docs'>Политикой обработки персональных данных</Link></span>
        </label>
        {
          errors['agreement' as keyof CustomFormData] &&
          <span className={styles.error}>{`${errors['agreement' as keyof CustomFormData]?.message}`}</span>
        }
        <span className={`${halvar.className} ${styles.price}`}>{`Сумма ${price}р`}</span>
        <button
          disabled={!isValid}
          type='submit'
          className={styles.submitBtn}>
          Отправить</button>
      </form>
    </div>
  );
};