import styles from './BurgerMenu.module.scss';

import { navLinks } from "@/constants/links";
import { YouTubeLink } from '../YouTubeLink/YouTubeLink';

import { BurgerLink } from './BurgerLink';

interface IProps {
  onClose: () => any;
}

const BurgerMenuList = ({ onClose }: IProps) => {
  return (
    <ul className={styles.list}>
      {
        navLinks.map((link, index) => (
          <BurgerLink key={index} data={link} />
        ))
      }
      <li className={`${styles.item} ${styles.youtube}`}>
        <YouTubeLink />
      </li>
    </ul>
  )
}

export { BurgerMenuList }