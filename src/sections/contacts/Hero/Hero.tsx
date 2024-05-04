import styles from './Hero.module.scss';

import { ContactsForm } from '@/components/ContactsForm/ContactsForm';
import { unbounded } from '@/constants/fonts';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={`${styles.title} ${unbounded.className}`}>Контакты</h1>
            <address>
              ул. Красноармейская, 57 г. Челябинск<br />454006 Россия.
            </address>
            <Link className={styles.phoneLink} href='tel: +73512617001'>
              +7 (351) 261-70-01
            </Link>
            <div className={styles.textBox}>
              <p>Ждем Вас на наших Богослужениях!</p>
              <p>Воскресенье 10:00; 13:00, 16:00 -<br /> (молодёжное богослужение)</p>
            </div>
          </div>
          <div className={styles.form}>
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };