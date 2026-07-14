'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CONSENT_TEXT } from '../_constants';
import styles from '../styles.module.scss';
import { fetchPaymentUrl } from '@/utils/register/payment';

export function YsRevival() {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [church, setChurch] = useState('');
  const [city, setCity] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const clientData = {
        name,
        email,
        phone,
        church,
        city,
        personType: 'Молодежь',
        price: 500,
        eventType: 'worship-night',
        home_cover: '',
      };
      const paymentData = await fetchPaymentUrl(clientData);
      router.push(paymentData.paymentUrl);
    } catch {
      setLoading(false);
      setDone(false);
    }
  };

  return (
    <section id="revival" className={styles.revival}>
      <div className={styles.revivalGlow} />
      <div className={styles.revivalInner}>
        <div className={styles.revivalHeader}>
          <div>
            <div className={styles.revivalLabel}>
              [ 04 ] &nbsp; НОЧЬ ПРОБУЖДЕНИЯ
            </div>
            <h2 className={styles.revivalTitle}>
              <span className={styles.revivalTitleScript}>НОЧЬ</span>
              <span className={styles.revivalTitleBold}>ПРОБУЖДЕНИЯ</span>
            </h2>
          </div>
          <span className={styles.revivalTime}>07.08 · 22:00 — 02:00</span>
        </div>

        <p className={styles.revivalDesc}>
          Отдельная ночь живого поклонения. Две команды прославления, один зал и
          присутствие Бога. Чтобы попасть на Ночь пробуждения, оставь отдельную
          регистрацию ниже.
        </p>

        <div className={styles.bandsGrid}>
          {[
            {
              src: '/img/webps/word-of-life-music.webp',
              alt: 'Слово Жизни Music',
              tag: 'BAND 01',
              name: 'СЛОВО ЖИЗНИ',
              accent: 'MUSIC',
            },
            {
              src: '/img/webps/ural-worship.WEBP',
              alt: 'Ural Worship',
              tag: 'BAND 02',
              name: 'URAL',
              accent: 'WORSHIP',
            },
          ].map((band) => (
            <div key={band.tag} className={styles.bandCard}>
              <div className={styles.bandPhoto}>
                <Image
                  fill
                  priority
                  quality={80}
                  loading="eager"
                  alt={band.alt}
                  src={band.src}
                  style={{ objectFit: 'cover' }}
                />
                <span className={styles.bandCam}>
                  CAMERA1
                  <br />
                  PLAY 00:00:01
                </span>
                <span className={styles.bandTag}>{band.tag}</span>
              </div>
              <div className={styles.bandInfo}>
                <div className={styles.bandName}>
                  {band.name}{' '}
                  <span className={styles.accent}>{band.accent}</span>
                </div>
                <div className={styles.bandRole}>
                  Команда поклонения · Ночь Пробуждения
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.revivalNotice}>
          <div className={styles.revivalNoticeCard}>
            <div className={styles.revivalNoticeIcon}>✓</div>
            <div>
              <div
                className={`${styles.revivalNoticeTitle} ${styles.revivalNoticeTitleDark}`}
              >
                Участники конференции
              </div>
              <p className={styles.revivalNoticeTextDark}>
                Если ты зарегистрировался на конференцию — ты автоматически
                попадаешь на Ночь Пробуждения. Отдельная регистрация не нужна.
              </p>
            </div>
          </div>
          <div className={styles.revivalNoticeCardAlt}>
            <div className={styles.revivalNoticeIconAlt}>✕</div>
            <div>
              <div className={styles.revivalNoticeTitle}>
                Только Ночь Пробуждения
              </div>
              <p className={styles.revivalNoticeText}>
                Те, кто регистрируется только на Ночь Пробуждения, не смогут
                попасть на служения конференции.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.revivalReg}>
          <div className={styles.revivalRegText}>
            <div className={styles.revivalRegTitle}>
              Регистрация на Ночь Пробуждения
            </div>
            <p className={styles.revivalRegDesc}>
              Оставь заявку, чтобы попасть на ночь поклонения 7 августа.
            </p>
          </div>

          {!done ? (
            <form className={styles.revivalFormFull} onSubmit={handleSubmit}>
              <div className={styles.revivalGrid}>
                <label className={styles.revivalFormLabel}>
                  <span className={styles.revivalFormLabelText}>ФИО</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Фамилия Имя Отчество"
                    className={styles.revivalInput}
                  />
                </label>
                <label className={styles.revivalFormLabel}>
                  <span className={styles.revivalFormLabelText}>ЭЛ. ПОЧТА</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="email@example.com"
                    className={styles.revivalInput}
                  />
                </label>
                <label className={styles.revivalFormLabel}>
                  <span className={styles.revivalFormLabelText}>ТЕЛЕФОН</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+7 (999) 000-00-00"
                    className={styles.revivalInput}
                  />
                </label>
                <label className={styles.revivalFormLabel}>
                  <span className={styles.revivalFormLabelText}>ЦЕРКОВЬ</span>
                  <input
                    value={church}
                    onChange={(e) => setChurch(e.target.value)}
                    required
                    placeholder="Название церкви"
                    className={styles.revivalInput}
                  />
                </label>
                <label
                  className={`${styles.revivalFormLabel} ${styles.revivalFormLabelFull}`}
                >
                  <span className={styles.revivalFormLabelText}>ГОРОД</span>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="Откуда едешь"
                    className={styles.revivalInput}
                  />
                </label>
              </div>
              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className={styles.consentCheckbox}
                />
                <span className={styles.consentText}>{CONSENT_TEXT}</span>
              </label>
              <div className={styles.regPrice}>
                <strong>500 ₽</strong>
                <span>Рекомендуемое пожертвование</span>
              </div>
              <button
                type="submit"
                className={styles.revivalBtn}
                disabled={loading}
              >
                {loading ? 'ЗАГРУЗКА...' : 'ЗАРЕГИСТРИРОВАТЬСЯ →'}
              </button>
            </form>
          ) : (
            <div className={styles.revivalDone}>
              <div className={styles.revivalDoneLabel}>● ТЫ В СПИСКЕ</div>
              <p className={styles.revivalDoneText}>
                До встречи на Ночи Пробуждения, {name}!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
