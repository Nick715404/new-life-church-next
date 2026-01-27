import { ChangeEvent, useMemo, useState } from 'react';

import { FormInput } from '../../ui';
import { FormFields, useFaithConf } from '../model';
import { RegisterPrice } from '@/components/RegisterPrice/ui';

import styles from '../model/styles.module.scss';

export const FaithConferenceForm = () => {
  const {
    errors,
    handleSubmit,
    register,
    onSubmit,
    currentPerson,
    currentPrice,
    onPromoChange,
    promoError,
  } = useFaithConf();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        <FormInput<FormFields>
          label="Церковь"
          name="church"
          register={register}
          errors={errors}
          placeholder="Укажите церковь"
        />
        <FormInput<FormFields>
          label="Город"
          name="city"
          register={register}
          errors={errors}
          placeholder="Укажите город"
        />
        <FormInput<FormFields>
          label="Номер телефона"
          name="phone"
          register={register}
          errors={errors}
          placeholder="Введите номер телефона"
        />
        <FormInput<FormFields>
          label="Электронная почта"
          name="email"
          register={register}
          errors={errors}
          placeholder="Введите почту"
        />
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
        <label htmlFor="agreement" className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className={styles.checkbox}
            required
          />
          <p>
            Я даю согласие Местной религиозной организации христиан веры
            евангельской (пятидесятников) Церковь «Слово жизни» г. Челябинска,
            (далее — Оператор), (адрес: 454006, г. Челябинск, ул.
            Красноармейская, дом 57; ОГРН: 1027400001200 (выдан 13 июня 2007);
            ИНН: 7447017381) на обработку моих персональных данных: Фамилия,
            имя, номер телефона, e-mail, город, церковь. Действия с
            персональными данными, на совершение которых дается согласие, как с
            использованием средств автоматизации, так и без таковых: сбор,
            запись, систематизация, накопление, хранение, уточнение, извлечение,
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
