'use client';

import Link from 'next/link';
import { InputList } from './InputList';
import styles from './Forms.module.scss';
import { halvar } from '@/constants/fonts';
import { useEventsForms } from './useEventsForms';
import { TStandartForm } from '@/interfaces/forms';

type StandartFormProps = {
  children?: React.ReactNode,
  slug: string,
};

export function StandartForm({ children, slug }: StandartFormProps) {
  const { errors, handleSubmit, onSubmit, price, register, isValid } = useEventsForms<TStandartForm>({ slug: slug });

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.standartForm}>
        <h3 className={`${styles.formTitle} ${halvar.className}`}>Регистрация</h3>
        <InputList register={register} errors={errors} />
        {children}
        <label className={styles.checkboxLabel}>
          <input
            {...register('agreement', { required: '*Поставь галочку' })}
            type="checkbox"
            className={styles.agreementChecbox} />
          <span className={styles.checkboxTitle}>Я согласен с <Link href='/docs'>Политикой обработки персональных данных</Link></span>
        </label>
        {
          errors['agreement' as keyof TStandartForm] &&
          <span className={styles.error}>{`${errors['agreement' as keyof TStandartForm]?.message}`}</span>
        }
        <span className={`${halvar.className} ${styles.price}`}>{`Сумма ${price}р`}</span>
        <button disabled={!isValid} type='submit' className={styles.submitBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
};