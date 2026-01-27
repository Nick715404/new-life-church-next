import { ChangeEvent, useState } from 'react';
import { FormInput, FormSelect } from '../../ui';
import { RegisterPrice } from '@/components/RegisterPrice/ui';
import { FormFields, options, useLeadersAndPastors } from '../model';

import styles from '../model/styles.module.scss';

export const SeminarsForLeaderAndPastors = () => {
  const {
    errors,
    handleSubmit,
    register,
    onSubmit,
    currentPerson,
    currentPrice,
    onPromoChange,
    promoError,
  } = useLeadersAndPastors();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput<FormFields>
          label="Имя"
          name="first_name"
          register={register}
          errors={errors}
          placeholder="Введите имя"
        />
        <FormInput<FormFields>
          label="Фамилия"
          name="last_name"
          register={register}
          errors={errors}
          placeholder="Введите фамилию"
        />
        <FormInput<FormFields>
          label="Электронная почта"
          name="email"
          register={register}
          errors={errors}
          placeholder="Введите почту"
        />
        <FormInput<FormFields>
          label="Номер телефона"
          name="phone"
          register={register}
          errors={errors}
          placeholder="Введите номер телефона"
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
        <FormSelect<FormFields>
          name="role"
          errors={errors}
          options={options}
          register={register}
          label="Ваше служение"
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
