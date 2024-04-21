import styles from './Nav.module.scss';

import { INavLink } from '@/interfaces/links';

import Link from 'next/link';

interface IProps {
  data: INavLink;
}

const NavLink = ({ data }: IProps) => {

  const className = data.children ? `${styles.link} ${styles.children}` : `${styles.link}`;

  return (
    <>
      <Link className={className} href={data.path}>
        {data.label}
      </Link>
    </>
  )
}

export { NavLink };