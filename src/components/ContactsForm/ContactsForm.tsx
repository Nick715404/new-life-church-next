'use client';

import styles from './ContactsForm.module.scss';
import { halvar } from '@/constants/fonts';
import { ErrorMessage } from './Error';
import { useContactsForm } from './useContactsForm';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import Link from 'next/link';
import { MotionBox } from '../MotionBox';

export const ContactsForm = () => {
	const { errors, handleSubmit, onSubmit, register, formStatus, isLoading } =
		useContactsForm();

	const disableWhileLoading = isLoading === 'loading' && true;

	if (formStatus === 'sended') {
		return (
			<div className={`${styles.formBox} ${styles.sended}`}>
				<h3 className={`${styles.title} ${halvar.className}`}>
					Спасибо, что поделились <br /> с нами!
				</h3>
			</div>
		);
	}

	if (formStatus === 'not_sended') {
		return (
			<div className={`${styles.formBox} ${styles.sended}`}>
				<h3 className={`${styles.title} ${halvar.className} ${styles.error}`}>
					Кажется что то пошло не так
				</h3>
				<p className={styles.error}>Попробуйте еще раз или свяжитесь с нами через соц-сети</p>
			</div>
		);
	}

	return (
		<MotionBox delay={0.4} className={styles.formBox}>
			<h3 className={`${styles.title} ${halvar.className}`}>Обратная связь</h3>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<CustomSelect
					isDisabled={isLoading === 'loading' && true}
					register={register}
				/>
				<label htmlFor='name'>
					<input
						id='name'
						placeholder='Имя'
						className={`${styles.input} ${styles.formItem}`}
						type='text'
						disabled={disableWhileLoading}
						{...register('name', {
							required: 'Поле "Имя" обязательно к заполнению',
						})}
					/>
					<ErrorMessage message={errors?.name?.message || ''} />
				</label>
				<label htmlFor=''>
					<input
						placeholder='Email'
						className={`${styles.input} ${styles.formItem}`}
						type='email'
						disabled={disableWhileLoading}
						{...register('email', {
							required: 'Поле "Email" обязательно к заполнению',
						})}
					/>
					<ErrorMessage message={errors?.email?.message || ''} />
				</label>
				<label htmlFor=''>
					<input
						placeholder='Телефон'
						className={`${styles.input} ${styles.formItem}`}
						type='text'
						disabled={disableWhileLoading}
						{...register('phone', {
							required: 'Поле "Телефон" обязательно к заполнению',
							minLength: {
								value: 11,
								message: 'Телефон должен иметь минимум одиннадцать символов',
							},
						})}
					/>
					<ErrorMessage message={errors?.phone?.message || ''} />
				</label>
				<textarea
					placeholder='Ваше сообщение'
					className={`${styles.textarea} ${styles.formItem}`}
					disabled={disableWhileLoading}
					{...register('description', {
						maxLength: {
							value: 280,
							message: 'Максимальное допустимое значение символов - 280',
						},
					})}
				/>
				<label className={styles.checkboxLabel}>
					<input
						{...register('agreement', { required: '*Поставь галочку' })}
						type='checkbox'
						className={styles.agreementChecbox}
						disabled={disableWhileLoading}
					/>
					<span className={styles.checkboxTitle}>
						Я согласен с{' '}
						<Link href='/docs'>Политикой обработки персональных данных</Link>
					</span>
				</label>
				<ErrorMessage message={errors?.agreement?.message || ''} />
				<button
					style={{ pointerEvents: isLoading === 'loading' ? 'none' : 'auto' }}
					className={styles.btn}
					type='submit'
				>
					{isLoading === 'loading' ? 'Загрузка...' : 'Отправить'}
				</button>
			</form>
		</MotionBox>
	);
};
