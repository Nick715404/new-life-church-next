import styles from "./Hero.module.scss";
import { donationData } from "@/constants/utils";

export const Details = () => {
  return (
    <ul className={styles.details}>
      {donationData.map((item, index) => (
        <li className={styles.item} key={index}>
          <span className={styles.detailsTitle}>{item.title} - {item.text}</span>
        </li>
      ))}
    </ul>
  );
};