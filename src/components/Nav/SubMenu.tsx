'use client';

import styles from './Nav.module.scss';
import { INavLinkChildren } from '@/interfaces/links';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { subMenuAnimate } from '@/constants/animation';

type TProps = {
  status: boolean;
  children: boolean;
  subMenu: INavLinkChildren[];
}

const SubMenu = ({ status, children, subMenu }: TProps) => {
  return (
    <>
      {
        status && children &&
        <div className={styles.layout}>
          <div className={styles.submenu}>
            {
              subMenu.map((item, index) => (
                <Link key={index} className={styles.submenuLink} href={item.path}>{item.label}</Link>
              ))
            }
          </div>
        </div>
      }
    </>
  )
}

export { SubMenu }