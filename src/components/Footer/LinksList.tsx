import { INavLink } from '@/interfaces/links';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { unbounded } from '@/constants/fonts';

interface IProps {
  data: INavLink[];
  title: string;
}

const LinksList = ({ data, title }: IProps) => {
  return (
    <div className={styles.linkList}>
      <h4 className={`${styles.linkListTitle} ${unbounded.className}`}>{title}</h4>
      {
        data.map((link: INavLink, index: number) => (
          <Link key={index} className={styles.link} href={link.path}>{link.label}</Link>
        ))
      }
    </div>
  )
}

export { LinksList };