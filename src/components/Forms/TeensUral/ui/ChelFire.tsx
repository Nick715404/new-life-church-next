'use client';

import { FormFields } from '../model';
import { halvar } from '@/constants/fonts';
import { ChelFireFilter } from './ChelFireFIlter';
import { useChelFire } from '../model/useChelFire';
import { FormCheckbox, FormInput, FormRadio } from '../../ui';
import { RegisterPrice } from '@/components/RegisterPrice/ui';

import styles from '../model/styles.module.scss';

export const ChelFire = () => {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    formType,
    currentPerson,
    currentPrice,
    onPromoChange,
    promoError,
  } = useChelFire();

  return (
    <div>
      <h3 className={`${styles.title} ${halvar.className}`}>
        Выберите тип <br /> регистрации
      </h3>
      <ChelFireFilter />
      {/* Форма */}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Общие поля */}
        <FormInput<FormFields>
          label="Фамилия"
          name="last_name"
          register={register}
          errors={errors}
          placeholder="Введите фамилию"
        />
        <FormInput<FormFields>
          label="Имя"
          name="first_name"
          register={register}
          errors={errors}
          placeholder="Введите имя"
        />
        {formType === 'Подросток' && (
          <FormInput<FormFields>
            name="age"
            type="text"
            label="Возраст"
            errors={errors}
            register={register}
            placeholder="Введите возраст"
          />
        )}
        <FormInput<FormFields>
          label="Email"
          name="email"
          register={register}
          errors={errors}
          placeholder="Введите email"
          type="email"
        />
        <FormInput<FormFields>
          label="Телефон"
          name="phone"
          register={register}
          errors={errors}
          placeholder="Введите номер телефона"
        />
        <FormInput<FormFields>
          label="Город"
          name="city"
          register={register}
          errors={errors}
          placeholder="Введите город"
        />
        <FormInput<FormFields>
          name="church"
          label="Церковь"
          errors={errors}
          register={register}
          placeholder="Введите название церкви"
        />
        {formType === 'Подросток' && (
          <FormInput<FormFields>
            label="ФИО родителя"
            name="adultName"
            register={register}
            errors={errors}
            placeholder="ФИО одного из родителей"
            type="text"
          />
        )}
        {formType === 'Подросток' && (
          <FormInput<FormFields>
            type="text"
            errors={errors}
            name="adultPhone"
            register={register}
            label="Телефон родителя"
            placeholder="Телефон одного из родителей"
          />
        )}
        {formType === 'РодительИлиСлужитель' && (
          <>
            <FormInput<FormFields>
              isFree
              label="Промокод"
              name="promocode"
              register={register}
              errors={errors}
              onChange={onPromoChange}
              placeholder="Укажите промокод"
            />
            {promoError && <span className={styles.error}>{promoError}</span>}
          </>
        )}
        {/* <FormCheckbox<FormFields>
          name="homeCover"
          register={register}
          label="Мне нужно расселение (доступно только 57 мест)"
        /> */}
        <label htmlFor="agreement" className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className={styles.checkbox}
            required
            checked
          />
          <p>
            Я даю согласие Местной религиозной организации христиан веры
            евангельской (пятидесятников) Церковь «Слово жизни» г. Челябинска,
            (далее — Оператор), (адрес: 454006, г. Челябинск, ул.
            Красноармейская, дом 57; ОГРН: 1027400001200 (выдан 13 июня 2007);
            ИНН: 7447017381) на обработку моих персональных данных: Фамилия,
            имя, номер телефона, e-mail, город, церковь, возраст, ФИО одного из
            родителя, номер одного из родителей. Действия с персональными
            данными, на совершение которых дается согласие, как с использованием
            средств автоматизации, так и без таковых: сбор, запись,
            систематизация, накопление, хранение, уточнение, извлечение,
            использование, передачу, обезличивание, блокирование, удаление,
            уничтожение. Персональные данные не распространяются и не
            предоставляются третьим лицам для целей не связанных с
            вышеуказанными. Данное согласие действует с момента его подписания
            до момента получения Оператором письменного заявления об отзыве
            настоящего согласия на обработку персональных данных. Согласие может
            быть отозвано мной путем составления заявления в письменной форме и
            подачи Оператору.
          </p>
        </label>

        {currentPerson && (
          <>
            <div className="">
              <RegisterPrice
                nextPrice={currentPerson.attributes.new_price}
                date={currentPerson.attributes.price_update_date}
                price={currentPrice}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Зарегистрироваться
            </button>
          </>
        )}
      </form>
    </div>
  );
};
