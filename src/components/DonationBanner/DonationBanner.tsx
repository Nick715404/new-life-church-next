import Image from 'next/image';
import styles from './DonationBanner.module.scss';
import { halvar } from '@/constants/fonts';

type DonationBannerProps = {
  price: number,
  increasedPrice: number,
  increasedDate: string,
};

export function DonationBanner({ increasedPrice, price, increasedDate }: DonationBannerProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title} ${halvar.className}`}>Добровольное<br /> пожертвование</h2>
          <div className={styles.info}>
            <div className={styles.infoBox}>
              <div className={styles.priceBox}>
                <span className={`${styles.price} ${halvar.className}`}>{price}₽</span>
                <span className={styles.upgradedPrice}>с {increasedDate} цена - {increasedPrice}₽</span>
              </div>
              <button className={styles.btn}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={} alt='' /> */}
    </section>
  );
};