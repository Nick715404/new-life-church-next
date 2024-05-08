'use client';

import styles from './BurgerMenu.module.scss';

import { INavLink } from "@/interfaces/links"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: INavLink;
}

const BurgerLink = ({ data }: Props) => {
  const [menu, setMenu] = useState<boolean>(false);

  if (data.children) {
    return (
      <li onClick={() => setMenu(!menu)} className={styles.linkLayout}>
        <button className={styles.link}>
          <span>{data.label}</span>
          <Image
            className={menu ? `${styles.icon} ${styles.rotate}` : styles.icon}
            width={10}
            height={10}
            src={'/img/svg/drop-down-arrow.svg'}
            alt=''
          />
        </button>
        {
          menu ?
            <ul>
              {data.subMenu.map((item, index) => (
                <li className={styles.subMenuLayout} key={index}>
                  <Link className={styles.submenuLink} href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul> :
            null
        }
      </li>
    )
  }

  return (
    <li className={styles.linkLayout}>
      <Link className={styles.link} href={data.path}>
        {data.label}
      </Link>
    </li>
  )
}

export { BurgerLink };