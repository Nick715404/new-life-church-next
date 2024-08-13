import styles from './Forms.module.scss';
import { TYouthPaymentForm } from '@/shared/interfaces/forms';
import { StandartForm } from './StandartForm';

import Link from 'next/link';
import { FileInput, PaymentFileInput } from '@/entities/PaymentFileInput';
import { InputList } from './InputList';
import { useEventsForms } from '../model/useEventsForms';

type YouthFormProps = { slug: string };

export function YouthForm({ slug }: YouthFormProps) {
	const { register, errors, handleSubmit, isValid, price, eventData } =
		useEventsForms<TYouthPaymentForm>({ slug: slug });

	const onSubmit = async (data: TYouthPaymentForm) => {
		if (data.paymentFile) {
			const { paymentFile } = data;
			const fileUrl = URL.createObjectURL(paymentFile[0]);
			console.log(data);
		}
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
