'use client';

import { subMenuAnimate } from '@/constants/animation';
import styles from './Nav.module.scss';
import { INavLinkChildren } from '@/interfaces/links';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <motion.div
          initial='exit'
          animate={status ? "enter" : "exit"}
          variants={subMenuAnimate}
          className={styles.layout}
        >
          <div className={styles.submenu}>
            {
              subMenu.map((item, index) => (
                <Link key={index} href={item.path}>{item.label}</Link>
              ))
            }
          </div>
        </motion.div>
      }
    </>
  )
}

export { SubMenu }