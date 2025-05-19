'use client';

import { halvar } from '@/constants/fonts';
import { FormInput, FormRadio } from '../../ui';
import { BusinessFormFilter } from './BusinessFormFilter';
import { type FormFields, useBusinessForm } from '../model';
import { RegisterPrice } from '@/components/RegisterPrice/ui';

import styles from '../model/styles.module.scss';

export const BusinessForm = () => {
	const { errors, handleSubmit, onSubmit, register, formType, currentPerson } =
		useBusinessForm();

	return (
		<div>
			<h3 className={`${styles.title} ${halvar.className}`}>
				Выберите тип <br /> регистрации
			</h3>
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

				{formType === 'Молодежь' && (
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
					label='Откуда вы узнали о конференции?'
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
						checked
						onChange={() => {}}
					/>
					<p>
						Я даю согласие Местной религиозной организации христиан веры
						евангельской (пятидесятников) Церковь «Слово жизни» г. Челябинска,
						(далее — Оператор), (адрес: 454006, г. Челябинск, ул.
						Красноармейская, дом 57; ОГРН: 1027400001200 (выдан 13 июня 2007);
						ИНН: 7447017381) на обработку моих персональных данных: Фамилия,
						имя, отчество, номер телефона, e-mail, город, церковь, род
						деятельности. Действия с персональными данными, на совершение
						которых дается согласие, как с использованием средств автоматизации,
						так и без таковых: сбор, запись, систематизация, накопление,
						хранение, уточнение, извлечение, использование, передачу,
						обезличивание, блокирование, удаление, уничтожение. Персональные
						данные не распространяются и не предоставляются третьим лицам для
						целей не связанных с вышеуказанными. Данное согласие действует с
						момента его подписания до момента получения Оператором письменного
						заявления об отзыве настоящего согласия на обработку персональных
						данных. Согласие может быть отозвано мной путем составления
						заявления в письменной форме и подачи Оператору.
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
