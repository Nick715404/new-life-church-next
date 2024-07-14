import Image from 'next/image';
import styles from './DonationBanner.module.scss';
import { halvar } from '@/constants/fonts';
import { IEventType, TEventItems } from '@/interfaces/events';
import { DontaionBannerList } from './DontaionBannerList';

type DonationBannerProps = { data: TEventItems[], eventType: IEventType };

export function DonationBanner({ data, eventType }: DonationBannerProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title} ${halvar.className}`}>Добровольное<br /> пожертвование</h2>
          <DontaionBannerList items={data} eventType={eventType} />
          <picture className={styles.picture}>
            <source srcSet='/img/png/donation-banner.webp' media='(min-width: 769px)' />
            <Image className={styles.img} priority fill src="/img/png/donation-banner-phone.webp" alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
};