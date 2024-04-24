'use client';

import { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { Logo } from '../Logo/Logo';
import { navLinks } from '@/constants/links';
import Link from 'next/link';

const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const menuClassName = open ? `${styles.menu} ${styles.open}` : `${styles.menu}`

  return (
    <>
      <button
        aria-label='Мобильное меню'
        className={styles.burger}
        onClick={() => setOpen(true)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
      <div className={menuClassName}>
        <div className={styles.header}>
          <div className="container">
            <div className={styles.headerWrapper}>
              <div className={styles.headerLogo}>
                <Logo />
              </div>
              <button onClick={() => setOpen(false)} className={styles.headerClose}>
                <span className={styles.headerCloseLine} />
                <span className={styles.headerCloseLine} />
                <span className={styles.headerCloseLine} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.listBox}>
          <ul className={styles.list}>
            {
              navLinks.map((link, index) => (
                <li className={styles.item} key={index}>
                  <Link className={styles.link} href={link.path}>{link.label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export { BurgerMenu };