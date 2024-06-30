import Image from 'next/image';
import styles from './DonationBanner.module.scss';
import { halvar } from '@/constants/fonts';
import { FormChooser, FormChooserButton } from '../Forms';
import { IEventType } from '@/interfaces/events';

type DonationBannerProps = {
  price: number,
  increasedPrice: number | undefined,
  increasedDate: string | undefined,
  type: IEventType,
  slug?: string,
};

export function DonationBanner({ increasedPrice, price, increasedDate, type, slug }: DonationBannerProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title} ${halvar.className}`}>Добровольное<br /> пожертвование</h2>
          <div className={styles.info}>
            <div className={styles.infoBox}>
              <div className={styles.priceBox}>
                <span className={`${styles.price} ${halvar.className}`}>{price}₽</span>
                {
                  increasedDate &&
                  increasedPrice &&
                  <span className={styles.upgradedPrice}>с {increasedDate} цена - {increasedPrice}₽</span>
                }
              </div>
              <FormChooserButton type={type} slug={slug} />
            </div>
          </div>
          <Image className={styles.img} priority fill src="/img/png/praying-home-section.png" alt="" />
        </div>
      </div>
    </section>
  );
};