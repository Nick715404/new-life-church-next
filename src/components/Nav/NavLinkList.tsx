import styles from './Nav.module.scss';

import { INavLink } from "@/interfaces/links";
import Link from "next/link";
import { NavLink } from './Link';
import { YouTubeLink } from '../YouTubeLink/YouTubeLink';

interface IProps {
  links: INavLink[];
}

const NavLinkList = ({ links }: IProps) => {

  return (
    <ul className={styles.list}>
      {
        links.map((link: INavLink, index: number) => (
          <li className={styles.item} key={index}>
            <NavLink data={link} />
          </li>
        ))
      }
      <li className={styles.item}>
        <YouTubeLink />
      </li>
    </ul>
  )
}

export { NavLinkList };