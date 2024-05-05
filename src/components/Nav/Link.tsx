'use client';

import styles from './Nav.module.scss';

import { INavLink } from '@/interfaces/links';
import { SubMenu } from './SubMenu';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: INavLink;
}

const NavLink = ({ data }: IProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const { subMenu, children } = data;

  const onHoverMenu = () => {
    setHover(!hover);
  }

  return (
    <div
      onMouseEnter={onHoverMenu}
      onMouseLeave={onHoverMenu}
      className={styles.linkLayout}
    >
      <Link className={styles.link} href={data.path}>
        <span>{data.label}</span>
        {
          children &&
          <Image
            className={styles.icon}
            width={10}
            height={10}
            src={'/img/svg/drop-down-arrow.svg'}
            alt=''
          />
        }
      </Link>
      <SubMenu
        subMenu={subMenu}
        children={data.children}
        status={hover}
      />
    </div >
  )
}

export { NavLink };