import styles from './Forms.module.scss';
import Link from 'next/link';
import { InputList } from './InputList';
import { StandartForm } from './StandartForm';
import { useEventsForms } from '../model/useEventsForms';
import { TYouthPaymentForm } from '@/shared/interfaces/forms';
import { FileInput, PaymentFileInput } from '@/entities/PaymentFileInput';

type YouthFormProps = { slug: string };

export function YouthForm({ slug }: YouthFormProps) {
	const { register, errors, handleSubmit, isValid, price } =
		useEventsForms<TYouthPaymentForm>({ slug: slug });

	const onSubmit = async (data: TYouthPaymentForm) => {
		const { paymentFile, ...otherData } = data;
		const formData = new FormData();
		formData.append('paymentFile', paymentFile![0]);
		formData.append('formData', JSON.stringify(otherData));
	};

	return (
		<StandartForm
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
			isValid={isValid}
			price={price}
		>
			<InputList register={register} errors={errors} />
			<PaymentFileInput href='#' />
			<FileInput errors={errors} register={register} />
			<label className={styles.checkboxLabel}>
				<input
					{...register('settlement')}
					type='checkbox'
					className={styles.agreementChecbox}
				/>
				<span className={styles.checkboxTitle}>
					Мне необходимо расселение (Расселение предоставляется участникам
					младше 21 года)
				</span>
			</label>
			<label className={styles.checkboxLabel}>
				<input
					{...register('agreement', { required: '*Поставьте галочку' })}
					type='checkbox'
					className={styles.agreementCheckbox}
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
