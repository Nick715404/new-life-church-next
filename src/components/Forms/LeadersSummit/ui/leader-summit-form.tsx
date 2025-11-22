import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { FormInput } from '../../ui';
import { useForm } from 'react-hook-form';

import { RegisterPrice } from '@/components/RegisterPrice/ui';
import { useRouter } from 'next/navigation';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { ChangeEvent, useState, useMemo } from 'react';

import styles from '../model/styles.module.scss';

type FormFields = {
  last_name: string;
  first_name: string;
  phone: string;
  email: string;
  church: string;
  price: string;
  promocode: string;
};

const PROMOCODE = {
  promoCodedPrice: 500,
  promocodeText: 'ЛИДЕР25',
};

export const LeaderSummitForm = () => {
  const persons = useSelector(
    (state: RootState) => state.event.registerPersons,
  );
  const router = useRouter();
  const [promoError, setPromoError] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);

  const onPromoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toUpperCase();

    if (value === '') {
      setPromoError('');
      setIsPromoApplied(false);
    } else if (value === PROMOCODE.promocodeText) {
      setPromoError('');
      setIsPromoApplied(true);
    } else {
      setPromoError('Неверный промокод');
      setIsPromoApplied(false);
    }
  };

  const currentPerson = persons[0];
  const price = currentPerson?.attributes.init_price;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormFields>({
    mode: 'onBlur',
  });

  const currentPrice = useMemo(() => {
    return isPromoApplied ? PROMOCODE.promoCodedPrice : price;
  }, [isPromoApplied, price]);

  const onSubmit = async (data: FormFields) => {
    const clientData = {
      ...data,
      promocode: data.promocode,
      eventType: 'leadersummit',
      personType: currentPerson?.attributes.person_type,
      price: currentPrice,
    };

    console.log({ clientData });

    const paymentData = await fetchPaymentUrl(clientData);
    router.push(paymentData.paymentUrl);
  };

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
          label="Номер телефона"
          name="phone"
          register={register}
          errors={errors}
          placeholder="Введите номер телефона"
        />
        <FormInput<FormFields>
          label="Электронная почта"
          name="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="Введите почту"
        />
        <FormInput<FormFields>
          label="Церковь"
          name="church"
          register={register}
          errors={errors}
          placeholder="Укажите церковь"
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
            ИНН: 7447017381) на обработку моих персональных данных: имя,
            фамилия, электронную почту, номер телефона, церковь. Действия с
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
