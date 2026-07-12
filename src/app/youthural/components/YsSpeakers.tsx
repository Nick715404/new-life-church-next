import Image from 'next/image';
import { SPEAKERS } from '../_constants';
import { YsLogo } from './YsLogo';
import styles from '../styles.module.scss';

export function YsSpeakers() {
  return (
    <section id="speakers" className={styles.speakers}>
      <div className={styles.speakersInner}>
        <div className={styles.speakersLabel}>[ 03 ] &nbsp; СПИКЕРЫ</div>
        <h2 className={styles.speakersTitle}>КТО НА СЦЕНЕ</h2>

        <div className={styles.speakersGrid}>
          {SPEAKERS.map((s, idx) => (
            <div key={s.id} className={styles.speakerCard}>
              <div className={styles.speakerPhoto}>
                <Image
                  fill
                  priority
                  alt={s.name}
                  quality={80}
                  src={s.image}
                  style={{ objectFit: 'cover' }}
                />
                <span className={styles.speakerCam}>
                  CAMERA{idx + 1}
                  <br />
                  PLAY 00:42:03
                </span>
                <span className={styles.speakerTag}>ЮС26</span>
              </div>
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>{s.name}</div>
              </div>
            </div>
          ))}

          <div className={styles.speakerCard}>
            <div className={`${styles.speakerPhoto} ${styles.speakerPhotoTBA}`}>
              <Image
                fill
                priority
                quality={80}
                alt="Константин Тарасов"
                src="/img/webps/pastorKonstantin.webp"
                style={{ objectFit: 'cover' }}
              />
              <span className={styles.speakerLogoTBA}>
                <YsLogo height={54} bgColor="#161616" />
              </span>
              <span className={styles.speakerCamDark}>
                CAMERA6
                <br />
                REC ● ● ●
              </span>
              <span className={styles.speakerTagDark}>ЮС26</span>
            </div>
            <div className={styles.speakerInfo}>
              <div className={styles.speakerName}>КОНСТАНТИН ТАРАСОВ</div>
              <div className={styles.speakerRoleTBA}>Подробности скоро</div>
            </div>
          </div>
        </div>

        <div className={styles.guestBlock}>
          <div className={styles.guestHeader}>
            <div className={styles.guestLabel}>★ &nbsp; СПЕШЕЛТИ-ГОСТИ</div>
            <span className={styles.guestMeta}>SPECIAL GUEST · ЮС26</span>
          </div>
          <div className={styles.guestCard}>
            <div className={styles.guestPhoto}>
              <Image
                fill
                priority
                quality={80}
                alt="Слово Жизни Music"
                style={{ objectFit: 'cover' }}
                src="/img/webps/word-of-life-music.webp"
              />
              <span className={styles.guestCam}>
                CAMERA1
                <br />
                PLAY 01:08:55
              </span>
            </div>
            <div className={styles.guestDesc}>
              <div className={styles.guestDescTitle}>
                СЛОВО ЖИЗНИ
                <br />
                <span className={styles.accent}>MUSIC</span>
              </div>
              <p className={styles.guestDescText}>
                Молодежная комнада прославления церкви "Слово жизни" в Москве
                которая поведет зал в живое поклоенение
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
