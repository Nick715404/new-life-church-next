'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { FormCheckbox, FormInput } from '../../ui';
import { useForm } from 'react-hook-form';
import { RegisterPrice } from '@/components/RegisterPrice/ui';
import { useRouter } from 'next/navigation';
import { fetchPaymentUrl } from '@/utils/register/payment';

import styles from '../model/styles.module.scss';

type FormFields = {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	church: string;
	home_cover: any;
	city: string;
};

const price = 100;

export const YouthMgnForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		mode: 'onBlur',
	});

	const onSubmit = async (data: FormFields) => {
		const clientData = {
			...data,
			home_cover: data.home_cover ? 'Нужно расселение' : '',
			eventType: 'youthuralmgn',
			personType: 'Молодежь',
			price,
		};

		const paymentData = await fetchPaymentUrl(clientData);
		router.push(paymentData.paymentUrl);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<FormInput<FormFields>
					label='Фамилия'
					name='last_name'
					register={register}
					errors={errors}
					placeholder='Введите фамилию'
				/>
				<FormInput<FormFields>
					label='Имя'
					name='first_name'
					register={register}
					errors={errors}
					placeholder='Введите имя'
				/>
				<FormInput<FormFields>
					label='Электронная почта'
					name='email'
					register={register}
					errors={errors}
					placeholder='Введите почту'
				/>
				<FormInput<FormFields>
					label='Номер телефона'
					name='phone'
					register={register}
					errors={errors}
					placeholder='Введите номер телефона'
				/>
				<FormInput<FormFields>
					label='Город'
					name='city'
					register={register}
					errors={errors}
					placeholder='Укажите город'
				/>
				<FormInput<FormFields>
					label='Церковь'
					name='church'
					register={register}
					errors={errors}
					placeholder='Укажите церковь'
				/>
				<FormCheckbox<FormFields>
					label='Мне нужно расселение'
					name='home_cover'
					register={register}
				/>
				<label htmlFor='agreement' className={styles.checkboxLabel}>
					<input
						type='checkbox'
						name='agreement'
						id='agreement'
						className={styles.checkbox}
						required
					/>
					<p>
						Я даю согласие Местной религиозной организации христиан веры
						евангельской (пятидесятников) Церковь «Слово жизни» г. Челябинска,
						(далее — Оператор), (адрес: 454006, г. Челябинск, ул.
						Красноармейская, дом 57; ОГРН: 1027400001200 (выдан 13 июня 2007);
						ИНН: 7447017381) на обработку моих персональных данных: имя,
						фамилия, электронную почту, номер телефона, церковь, город, нужно ли
						расселение. Действия с персональными данными, на совершение которых
						дается согласие, как с использованием средств автоматизации, так и
						без таковых: сбор, запись, систематизация, накопление, хранение,
						уточнение, извлечение, использование, передачу, обезличивание,
						блокирование, удаление, уничтожение. Персональные данные не
						распространяются и не предоставляются третьим лицам для целей не
						связанных с вышеуказанными. Данное согласие действует с момента его
						подписания до момента получения Оператором письменного заявления об
						отзыве настоящего согласия на обработку персональных данных.
						Согласие может быть отозвано мной путем составления заявления в
						письменной форме и подачи Оператору.
					</p>
				</label>

				<div>
					<RegisterPrice price={price} date={undefined} nextPrice={undefined} />
				</div>
				<button type='submit' className={styles.submitBtn}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
