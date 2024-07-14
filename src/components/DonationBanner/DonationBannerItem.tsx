import { halvar } from '@/constants/fonts';
import { FormChooserButton } from '../Forms';
import styles from './DonationBanner.module.scss';
import { IEventType, TEventItems } from '@/interfaces/events'

type DonationBannerItemProps = { item: TEventItems, eventType: IEventType };

export const DonationBannerItem = ({ item, eventType }: DonationBannerItemProps) => {
  const types: { paymentType: string, value: string }[] = [
    { paymentType: "standard", value: "" },
    { paymentType: "businessMan", value: "Регистрация для предпринимателей" },
    { paymentType: "startupper", value: "Регистрация для начинающих предпринимателей" },
    { paymentType: "pastor", value: "Регистрация для пасторов" },
  ];

  // Найти элемент в массиве types, который соответствует paymentType
  const selectedType = types.find(type => type.paymentType === item.attributes.paymentType);
  const increasedDate = new Date(item.attributes.increased_price_date).toLocaleDateString([], {
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className={styles.item}>
      <span className={styles.description}>{selectedType?.value}</span>
      <div className={styles.info}>
        <div className={styles.priceInfo}>
          <span className={`${styles.price} ${halvar.className}`}>{item.attributes.price}р</span>
          {item.attributes.increase_price && item.attributes.increase_price ?
            <span className={styles.increasedPriceText}>{increasedDate} - {item.attributes.increase_price}р</span> : null}
        </div>
        <div className="">
          <FormChooserButton type={eventType} />
        </div>
      </div>
    </div>
  )
}