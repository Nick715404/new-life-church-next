import Link from 'next/link';
import Image from 'next/image';
import styles from './Meetings.module.scss';
import { halvar, unbounded } from '@/constants/fonts';
import { Socials } from '@/components/Socials/Socials';

const Meetings = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textContent}>
            <div className={styles.titleBox}>
              <h2 className={`${styles.title} ${halvar.className}`}>Хотим поближе<br />познакомиться<br />с вами</h2>
            </div>
            <div className={styles.textBox}>
              <p className={styles.text}>В мире часто бывает очень тяжело одному, когда вокруг суета, проблемы. Но Иисус Христос сделал все, для того, чтобы ты больше не оставался один на один с ними. Церковь – это место, где тебя принимают любым, молятся за твои проблемы и помогают ближе узнать Бога. </p>
              <p className={styles.text}>Будем рады видеть тебя на наших Богослужениях каждое воскресенье в 10:00, 13:00, 16:00 (для молодежи) по адресу г. Челябинск, ул. Красноармейская, 57.</p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.linkBox}>
              <Link className={styles.link} href={'/about/history'}>
                <span className={`${styles.linkTitle} ${halvar.className}`}>
                  О церкви
                </span>
                <div className={styles.linkCircle}>
                  <Image
                    className={styles.linkImg}
                    width={18}
                    height={18}
                    src='img/svg/black-arrow.svg'
                    alt='О нашей церкви'
                  />
                </div>
              </Link>
            </div>
            <div className={styles.socials}>
              <Socials mode='gray' size='small' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Meetings }