'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CONSENT_TEXT } from '../_constants';
import { fetchPaymentUrl } from '@/utils/register/payment';
import styles from '../styles.module.scss';

const PRICE = 1500;

type FormFields = {
  first_name: string;
  last_name: string;
  age: string;
  email: string;
  phone: string;
  city: string;
  church: string;
};

export function YsRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onBlur' });

  const onSubmit = async (data: FormFields) => {
    setIsLoading(true);
    try {
      const age = data.age.split('-').toReversed().join('.');

      const clientData = {
        first_name: data.first_name,
        last_name: data.last_name,
        age,
        email: data.email,
        phone: data.phone,
        city: data.city,
        church: data.church,
        home_cover: '',
        eventType: 'youthural',
        personType: 'Молодежь',
        price: PRICE,
      };

      const paymentData = await fetchPaymentUrl(clientData);
      router.push(paymentData.paymentUrl);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className={styles.register}>
      <div className={styles.registerStripesTop} />
      <div className={styles.registerStripesBottom} />
      <div className={styles.registerInner}>
        <div className={styles.registerLabel}>
          [ 05 ] &nbsp; РЕГИСТРАЦИЯ · 6—8.08.26
        </div>
        <h2 className={styles.registerTitle}>
          <span className={styles.registerTitleScript}>Забронируй</span>
          <span className={styles.registerTitleBold}>СВОЕ МЕСТО</span>
        </h2>
        <p className={styles.registerDesc}>
          Приехав однажды на ЮС, ты — навсегда ЮС.
        </p>

        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.regGrid}>
            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>ИМЯ</span>
              <input
                {...register('first_name', { required: 'Введите имя' })}
                placeholder="Как тебя зовут"
                className={styles.regInput}
              />
              {errors.first_name && (
                <span className={styles.regError}>
                  {errors.first_name.message}
                </span>
              )}
            </label>

            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>ФАМИЛИЯ</span>
              <input
                {...register('last_name', { required: 'Введите фамилию' })}
                placeholder="Твоя фамилия"
                className={styles.regInput}
              />
              {errors.last_name && (
                <span className={styles.regError}>
                  {errors.last_name.message}
                </span>
              )}
            </label>

            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>ДАТА РОЖДЕНИЯ</span>
              <input
                type="date"
                {...register('age', { required: 'Введите дату рождения' })}
                className={styles.regInput}
              />
              {errors.age && (
                <span className={styles.regError}>{errors.age.message}</span>
              )}
            </label>

            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>ЭЛ. ПОЧТА</span>
              <input
                type="email"
                {...register('email', { required: 'Введите почту' })}
                placeholder="you@example.com"
                className={styles.regInput}
              />
              {errors.email && (
                <span className={styles.regError}>{errors.email.message}</span>
              )}
            </label>

            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>НОМЕР ТЕЛЕФОНА</span>
              <input
                type="tel"
                {...register('phone', { required: 'Введите номер телефона' })}
                placeholder="+7 ___ ___ __ __"
                className={styles.regInput}
              />
              {errors.phone && (
                <span className={styles.regError}>{errors.phone.message}</span>
              )}
            </label>

            <label className={styles.regField}>
              <span className={styles.regFieldLabel}>ГОРОД</span>
              <input
                {...register('city', { required: 'Введите город' })}
                placeholder="Откуда едешь"
                className={styles.regInput}
              />
              {errors.city && (
                <span className={styles.regError}>{errors.city.message}</span>
              )}
            </label>

            <label className={`${styles.regField} ${styles.regFieldFull}`}>
              <span className={styles.regFieldLabel}>ЦЕРКОВЬ</span>
              <input
                {...register('church', { required: 'Введите церковь' })}
                placeholder="Название церкви"
                className={styles.regInput}
              />
              {errors.church && (
                <span className={styles.regError}>{errors.church.message}</span>
              )}
            </label>
          </div>

          <label className={styles.consentLabelDark}>
            <input
              type="checkbox"
              required
              className={styles.consentCheckboxDark}
            />
            <span className={styles.consentTextDark}>{CONSENT_TEXT}</span>
          </label>

          <div className={styles.regPrice}>
            <strong>{PRICE} ₽</strong>
          </div>

          <button type="submit" className={styles.regBtn} disabled={isLoading}>
            {isLoading ? 'ЗАГРУЗКА...' : 'ПЕРЕЙТИ К ОПЛАТЕ →'}
          </button>
        </form>
      </div>
    </section>
  );
}
