import styles from './Hero.module.scss';
import { DonationForm } from '@/components/DonationForm/DonationForm';
import { Details } from './Details';
import { halvar } from '@/constants/fonts';

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={`${styles.title} ${halvar.className}`}>Пожертвовать</h1>
            <Details />
          </div>
          <DonationForm />
        </div>
      </div>
    </section>
  );
};