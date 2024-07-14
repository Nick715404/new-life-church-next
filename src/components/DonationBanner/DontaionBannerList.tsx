import { halvar } from "@/constants/fonts";
import styles from "./DonationBanner.module.scss";
import { FormChooserButton } from "../Forms";
import { IEventType, TEventItems } from "@/interfaces/events";
import { DonationBannerItem } from "./DonationBannerItem";

type DontaionBannerListProps = { items: TEventItems[], eventType: IEventType, }

export const DontaionBannerList = ({ items, eventType }: DontaionBannerListProps) => {
  return (
    <div className={styles.itemsList}>
      {items.map((item) => (
        <DonationBannerItem key={item.id} item={item} eventType={eventType} />
      ))}
    </div>
  );
};