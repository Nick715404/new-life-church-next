import styles from './Forms.module.scss';
import { TYouthPaymentForm } from '@/interfaces/forms';
import { StandartForm } from './StandartForm';
import { useEventsForms } from './useEventsForms';
import { InputList } from './InputList';
import Link from 'next/link';
import { UploadFileInput } from '../UploadFileInput';
import { sendRegistration } from '@/api/forms';

type YouthFormProps = { slug: string };

export function YouthForm({ slug }: YouthFormProps) {
	const { register, errors, handleSubmit, isValid, price, eventData } =
		useEventsForms<TYouthPaymentForm>({ slug: slug });

	const onSubmit = async (data: TYouthPaymentForm) => {
		const formData = new FormData();
		const file = data.file[0];

		formData.append('firstName', data.firstName);
		formData.append('lastName', data.lastName);
		formData.append('email', data.email);
		formData.append('phone', data.phone);
		formData.append('city', data.city);
		formData.append('church', data.church);
		formData.append('settlement', `${data.settlement}`);
		formData.append('file', file);
		formData.append('role', eventData.role);
		formData.append('eventType', eventData.eventType);
		formData.append('agreement', `${data.agreement}`);
		formData.append('price', `${eventData.price}`);
	};

	return (
		<StandartForm
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
			isValid={isValid}
			price={price}
		>
			<InputList register={register} errors={errors} />
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
			<UploadFileInput register={register} errors={errors} />
		</StandartForm>
	);
}
