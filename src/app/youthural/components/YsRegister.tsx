'use client';

import { useState } from 'react';
import { CONSENT_TEXT } from '../_constants';
import styles from '../styles.module.scss';

export function YsRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [church, setChurch] = useState('');
  const [consent, setConsent] = useState(false);

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
          Оставь заявку — и мы свяжемся с тобой, как только откроется
          регистрация. Приехав однажды на ЮС, ты — навсегда ЮС.
        </p>

        {!submitted ? (
          <form
            className={styles.registerForm}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className={styles.regGrid}>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>ИМЯ</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Как тебя зовут"
                  className={styles.regInput}
                />
              </label>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>ФАМИЛИЯ</span>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Твоя фамилия"
                  className={styles.regInput}
                />
              </label>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>ДАТА РОЖДЕНИЯ</span>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  className={styles.regInput}
                />
              </label>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>ЭЛ. ПОЧТА</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className={styles.regInput}
                />
              </label>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>НОМЕР ТЕЛЕФОНА</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 ___ ___ __ __"
                  className={styles.regInput}
                />
              </label>
              <label className={styles.regField}>
                <span className={styles.regFieldLabel}>ГОРОД</span>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="Откуда едешь"
                  className={styles.regInput}
                />
              </label>
              <label className={`${styles.regField} ${styles.regFieldFull}`}>
                <span className={styles.regFieldLabel}>ЦЕРКОВЬ</span>
                <input
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
                  required
                  placeholder="Название церкви"
                  className={styles.regInput}
                />
              </label>
            </div>

            <label className={styles.consentLabelDark}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className={styles.consentCheckboxDark}
              />
              <span className={styles.consentTextDark}>{CONSENT_TEXT}</span>
            </label>

            <button type="submit" className={styles.regBtn}>
              ОТПРАВИТЬ ЗАЯВКУ →
            </button>
          </form>
        ) : (
          <div className={styles.regSuccess}>
            <div className={styles.regSuccessLabel}>● ЗАЯВКА ПРИНЯТА</div>
            <p className={styles.regSuccessTitle}>
              Спасибо, {name}! Скоро увидимся на ЮС.
            </p>
            <p className={styles.regSuccessText}>
              Мы свяжемся с тобой, как только откроется регистрация на смену.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
