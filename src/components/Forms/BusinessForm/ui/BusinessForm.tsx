'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { FormInput, FormRadio } from '../../ui';
import PayButton from '@/components/PayButton/PayButton';
import { BusinessFormFilter } from './BusinessFormFilter';
import { RegisterPrice } from '@/components/RegisterPrice/ui';
import { useBusinessRegisterContext } from '@/providers/BusinessRegisterProvider/ui';
import { useForm } from 'react-hook-form';

import styles from '../model/styles.module.scss';

type FormFields = {
	first_name: string;
	last_name: string;
	sur_name: string;
	city: string;
	church: string;
	vector?: string;
	pastor_type?: string;
	occupation?: string;
	source?: string;
	email: string;
	phone: string;
};

export const BusinessForm = () => {
	const { formType } = useBusinessRegisterContext();
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);

	const currentPerson = persons.find(
		person => person.attributes.person_type === formType
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormFields>({
		mode: 'onBlur',
	});

	const onSubmit = (data: FormFields) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(
				'formData',
				JSON.stringify({
					...data,
					eventType: 'business',
					personType: currentPerson?.attributes.person_type,
				})
			);
		}
		console.log(data);
	};

	return (
		<div>
			<BusinessFormFilter />
			{/* Форма */}
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{/* Общие поля */}
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
					label='Отчество'
					name='sur_name'
					register={register}
					errors={errors}
					placeholder='Введите отчество'
				/>
				<FormInput<FormFields>
					label='Телефон'
					name='phone'
					register={register}
					errors={errors}
					placeholder='Введите номер телефона'
				/>
				<FormInput<FormFields>
					label='Email'
					name='email'
					register={register}
					errors={errors}
					placeholder='Введите email'
					type='email'
				/>
				<FormInput<FormFields>
					label='Город'
					name='city'
					register={register}
					errors={errors}
					placeholder='Введите город'
				/>
				<FormInput<FormFields>
					label='Церковь'
					name='church'
					register={register}
					errors={errors}
					placeholder='Введите название церкви'
				/>

				{/* Уникальные поля */}
				{formType === 'Предприниматель' && (
					<FormInput<FormFields>
						label='Отраслевое направление'
						name='vector'
						register={register}
						errors={errors}
						placeholder='Введите направление'
					/>
				)}

				{formType === 'Пастор' && (
					<FormInput<FormFields>
						label='Какой пастор?'
						name='pastor_type'
						register={register}
						errors={errors}
						placeholder='Введите тип пастора'
					/>
				)}

				{formType === 'Подросток' && (
					<FormRadio<FormFields>
						label='Выберите статус'
						name='occupation'
						options={[
							{ label: 'Учусь', value: 'учусь' },
							{ label: 'Работаю', value: 'работаю' },
						]}
						register={register}
						errors={errors}
					/>
				)}

				{/* Общий вопрос для всех */}
				<FormInput<FormFields>
					label='Откуда узнал о конференции?'
					name='source'
					register={register}
					errors={errors}
					placeholder='Введите источник'
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
								date={currentPerson.attributes.price_update_date}
								price={currentPerson.attributes.init_price}
							/>
						</div>
						<PayButton
							className={styles.submitBtn}
							price={currentPerson?.attributes.init_price}
							isValid={isValid}
						/>
					</>
				)}
			</form>
		</div>
	);
};
