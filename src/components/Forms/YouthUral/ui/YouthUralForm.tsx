import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { FormCheckbox, FormInput } from '../../ui';
import { useForm } from 'react-hook-form';

import styles from '../model/styles.module.scss';
import { RegisterPrice } from '@/components/RegisterPrice/ui';
import PayButton from '@/components/PayButton/PayButton';
import { useRouter } from 'next/navigation';
import { fetchPaymentUrl } from '@/utils/register/payment';

type FormFields = {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	church: string;
	home_cover: any;
	city: string;
};

export const YouthUralForm = () => {
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);
	const router = useRouter();

	const currentPerson = persons[0];
	const price = currentPerson?.attributes.init_price;

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormFields>({
		mode: 'onBlur',
	});

	const onSubmit = async (data: FormFields) => {
		const clientData = {
			...data,
			home_cover: data.home_cover ? 'Нужно расселение' : '',
			eventType: 'youthural',
			personType: currentPerson?.attributes.person_type,
			price: price,
		};

		const paymentData = await fetchPaymentUrl(clientData);
		router.push(paymentData.paymentUrl);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<FormInput<FormFields>
					label='Имя'
					name='first_name'
					register={register}
					errors={errors}
					placeholder='Введите имя'
				/>
				<FormInput<FormFields>
					label='Фамилия'
					name='last_name'
					register={register}
					errors={errors}
					placeholder='Введите фамилию'
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
					label='Церковь'
					name='church'
					register={register}
					errors={errors}
					placeholder='Укажите церковь'
				/>
				<FormInput<FormFields>
					label='Город'
					name='city'
					register={register}
					errors={errors}
					placeholder='Укажите город'
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
						Я даю согласие Местной религиозной организации Библейский центр
						христиан веры евангельской «Слово жизни» (далее Оператор), адрес:
						129626, г. Челябинск, ул. Красноармейская, дом 57, на обработку моих
						персональных данных: Фамилия, имя, отчество, номер телефона, e-mail,
						город, церковь, род деятельности. Действия с персональными данными,
						на совершение которых дается согласие, как с использованием средств
						автоматизации, так и без таковых: сбор, запись, систематизация,
						накопление, хранение, уточнение, извлечение, использование,
						передачу, обезличивание, блокирование, удаление, уничтожение.
						Персональные данные не распространяются и не предоставляются третьим
						лицам для целей не связанных с вышеуказанными. Данное согласие
						действует с момента его подписания до момента получения Оператором
						письменного заявления об отзыве настоящего согласия на обработку
						персональных данных. Согласие может быть отозвано мной путем
						составления заявления в письменной форме и подачи Оператору.
					</p>
				</label>

				{currentPerson && (
					<>
						<div className=''>
							<RegisterPrice
								nextPrice={currentPerson.attributes.new_price}
								date={currentPerson.attributes.price_update_date}
								price={currentPerson.attributes.init_price}
							/>
						</div>
						<button type='submit' className={styles.submitBtn}>
							Зарегистрироваться
						</button>
					</>
				)}
			</form>
		</div>
	);
};
