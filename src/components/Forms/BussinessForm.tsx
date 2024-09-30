import styles from './Forms.module.scss';
import { TBussinesPaymentForm } from '@/types/forms';
import { InputList } from './InputList';
import { StandartForm } from './StandartForm';
import { useEventsForms } from './useEventsForms';
import { getPayment } from '@/api/payments';
import Link from 'next/link';

type BussinessFormProps = { slug: string };

export function BussinessForm({ slug }: BussinessFormProps) {
	const { register, handleSubmit, isValid, errors, price, eventData } =
		useEventsForms<TBussinesPaymentForm>({ slug: slug });

	const submit = async (data: TBussinesPaymentForm) => {
		const backendData = {
			...data,
			price: price,
			role: eventData.role,
			type: eventData.eventType,
		};
		console.log(backendData);
		const link = await getPayment(backendData);
		window.location.href = link;
	};

	return (
		<StandartForm
			handleSubmit={handleSubmit}
			isValid={isValid}
			onSubmit={submit}
			price={price}
		>
			<InputList register={register} errors={errors} />
			<label className={styles.label}>
				<input
					{...register('career', {
						required: 'Опишите пожалуйста ваш род деятельности',
					})}
					placeholder='Род деятельности'
					className={styles.input}
					type='text'
				/>
				{errors['career' as keyof TBussinesPaymentForm] && (
					<span className={styles.error}>{`${
						errors['career' as keyof TBussinesPaymentForm]?.message
					}`}</span>
				)}
			</label>
			<label className={styles.checkboxLabel}>
				<input
					className={styles.agreementCheckbox}
					{...register('agreement', { required: '*Поставьте галочку' })}
					type='checkbox'
				/>
				<span className={styles.checkboxTitle}>
					Я согласен с{' '}
					<Link href='/docs'>Политикой обработки персональных данных</Link>
				</span>
			</label>
			{errors.agreement && (
				<span className={styles.error}>{errors.agreement.message}</span>
			)}
		</StandartForm>
	);
}
