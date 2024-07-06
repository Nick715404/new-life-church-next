import { DonateForm } from '@/components/DonateForm/DonateForm';
import styles from './Hero.module.scss';
import { halvar } from '@/constants/fonts';
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={`${styles.title} ${halvar.className}`}>Пожертвовать <br /> онлайн</h1>
            <p className={styles.text}>
              Мы все больше используем электронные платежи <br /> в повседневной жизни. Так и церковь идет в ногу <br /> со временем.
            </p>
            <p className={styles.text}>
              Эта форма даяний создана для того, чтобы Вы могли <br /> осуществлять регулярные финансовые пожертвования <br /> через интернет.
            </p>
          </div>
          <DonateForm />
        </div>
      </div>
      <picture>
        <source srcSet='/img/png/donation-bg.png' media='(min-width: 769px)' />
        <Image className={styles.background} priority fill src="/img/png/donation-bg-phone.png" alt="Пожертвовать" />
      </picture>
    </section>
  );
};