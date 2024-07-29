import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '@/components/MotionBox';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Добро пожаловать',
  alternates: {
    canonical: `${process.env.SITE_DOMEN}/hello`
  }
}

export default function HelloPage() {
  return (
    <main className="hello children-page">

      <section className={styles.hero}>
        <div className="container-small">
          <div className={styles.wrapper}>
            <MotionBox>
              <h1 className={`${styles.title} ${halvar.className}`}>Мы рады, что вы хотите <br /> подробнее узнать о церкви <br /> и христианстве</h1>
            </MotionBox>
            <MotionBox delay={0.2}>
              <p className={styles.text}>С удовольствием поможем <br className={styles.transfer} /> вам в этом и постараемся ответить <br /> на все ваши вопросы.</p>
            </MotionBox>
          </div>
        </div>
        <Image priority className={styles.background} fill src="/img/png/hello-bg.webp" alt='Задний фон страницы Приветствия' />
      </section>

      <section className={styles.info}>
        <div className="container-small">
          <div className={styles.wrapper}>

            <div className={styles.header}>
              <h2 className={`${styles.title} ${halvar.className}`}>
                <span className={styles.titleLine}>«Слово жизни» — </span>
                <span>одна из христианских церквей</span>
              </h2>
              <p>
                Наша история началась в 1992 году. В 1995 году администрация города Челябинска выделила церкви здание в центре города. Здание, которому более 120 лет, было реконструировано и к нему был пристроен зал на 800 мест. Сегодня «Слово жизни» — большая церковь с множеством филиалов по всей стране, куда еженедельно приходят более 10 тысяч человек.
              </p>
            </div>

            <div className={styles.imageBox}>
              <Image priority className={styles.image} fill src="/img/png/history-hero-bg.jpg" alt='Церковь Слово Жизни г. Челябинск' />
            </div>

            <div className={styles.footer}>
              <p>
                Мы проводим еженедельные богослужения и транслируем их <Link href="https://www.youtube.com/@wolruschelTV">онлайн</Link>, благословляем детей, проводим венчания, участвуем в социальной жизни города.
              </p>
              <p>
                Мы хотим помочь человеку в его духовном поиске, поддержать молитвой и наставлением.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.review}>
        <div className="container-small">
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h2 className={`${styles.title} ${halvar.className}`}>
                <span className={styles.titleLine}>«Важно, чтобы каждый </span>
                <span>человек нашел свой духовный дом. <br /> И мы будем рады, если таким домом для вас станет наша <br /> церковь».</span>
              </h2>
              <div className={styles.sign}>
                <span className={`${styles.signName} ${halvar.className}`}>Андрей и Карина <br /> Давыдовы</span>
                <span className={styles.signMeta}>Старшие пасторы церкви <br /> “Слово Жизни”</span>
              </div>
            </div>
            <div className={styles.imgBox}>
              <Image priority className={styles.image} fill src="/img/png/davidovs-family.webp" alt='Старшие пасторы церкви Слово Жизни г. Челябинск' />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.banner}>
        <div className="container-small">
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.textBox}>
                <h2 className={`${styles.title} ${halvar.className}`}>Узнайте больше</h2>
                <p className={styles.text}>
                  Почитайте о христианстве, ознакомьтесь с основными <br /> понятиями христианской веры.
                </p>
              </div>
              <div className={styles.linkBox}>
                <Link className={styles.link} href="/about/foundation">подробнее</Link>
              </div>
            </div>
            <div className={styles.leftGradient}></div>
            <div className={styles.rightGradient}></div>
          </div>
        </div>
      </section>

      <section className={styles.schedules}>
        <div className="container-small">
          <div className={styles.wrapper}>
            <h2 className={`${styles.title} ${halvar.className}`}>Расписание <br /> богослужений</h2>
            <div className={styles.calendar}>
              <div className={styles.item}>
                <span className={`${styles.day} ${halvar.className}`}>Четверг</span>
                <div className={styles.event}>
                  <div className={styles.timeBox}>
                    <span className={styles.time}>18:00</span>
                  </div>
                  <span>Служение для старшего поколения</span>
                </div>
              </div>
              <div className={styles.item}>
                <span className={`${styles.day} ${halvar.className}`}>Воскресенье</span>
                <div className={styles.events}>
                  <div className={styles.event}>
                    <div className={styles.timeBox}>
                      <span className={styles.time}>10:00 / 13:00</span>
                    </div>
                    <span>Общецерковное богослужение</span>
                  </div>
                  <div className={styles.event}>
                    <div className={styles.timeBox}>
                      <span className={styles.time}>13:00</span>
                    </div>
                    <span>Служение для подростков</span>
                  </div>
                  <div className={styles.event}>
                    <div className={styles.timeBox}>
                      <span className={styles.time}>16:00</span>
                    </div>
                    <span>Служение для молодежи</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}