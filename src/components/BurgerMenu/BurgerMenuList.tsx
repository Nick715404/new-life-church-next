import styles from './BurgerMenu.module.scss';

import { navLinks } from "@/constants/links";
import { YouTubeLink } from '../YouTubeLink/YouTubeLink';

import { BurgerLink } from './BurgerLink';
import { DonationButton } from '../DontaionButton/DontaionButton';

interface IProps { onClose: () => any };

export const BurgerMenuList = ({ onClose }: IProps) => {
  return (
    <ul className={styles.list}>
      {navLinks.map((link, index) => (
        <BurgerLink key={index} data={link} onClose={onClose} />
      ))}
      <li className={`${styles.item} ${styles.youtube}`}>
        <YouTubeLink />
      </li>
      <li className={styles.donateBtn}>
        <DonationButton
          onClick={onClose}
          full
          style='white'
          accent
          text='Пожертвовать'
          as='link'
          href='/donation' />
      </li>
    </ul>
  );
};