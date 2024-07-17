import styles from './Forms.module.scss';
import { TYouthPaymentForm } from "@/interfaces/forms";
import { StandartForm } from "./StandartForm";
import { useEventsForms } from "./useEventsForms";
import { InputList } from './InputList';
import Link from 'next/link';
import { getPayment } from '@/api/payments';

type YouthFormProps = { slug: string, }

export function YouthForm({ slug }: YouthFormProps) {
  const { register, errors, handleSubmit, isValid, price, eventData } = useEventsForms<TYouthPaymentForm>({ slug: slug });

  const onSubmit = async (data: any) => {
    const backendData = {
      ...data,
      price: price,
      type: eventData.eventType,
    }
    // console.log(backendData)
    const link = await getPayment(backendData);
    window.location.href = link;
  };

  return (
    <StandartForm onSubmit={onSubmit} handleSubmit={handleSubmit} isValid={isValid} price={price}>
      <InputList register={register} errors={errors} />
      <label className={styles.checkboxLabel}>
        <input
          {...register('settlement')}
          type="checkbox"
          className={styles.agreementChecbox} />
        <span className={styles.checkboxTitle}>Мне необходимо расселение (Расселение предоставляется участникам младше 21 года)</span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          {...register('agreement', { required: '*Поставьте галочку' })}
          type="checkbox"
          className={styles.agreementCheckbox}
        />
        <span className={styles.checkboxTitle}>
          Я согласен с <Link href='/docs'>Политикой обработки персональных данных</Link>
        </span>
      </label>
      {errors.agreement && <span className={styles.error}>{errors.agreement.message}</span>}
    </StandartForm>
  );
};