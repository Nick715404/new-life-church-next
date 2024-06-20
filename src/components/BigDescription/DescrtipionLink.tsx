import styles from './BigDescription.module.scss';
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type DescrtipionLinkProps = { children: React.ReactNode, href: Url, };

export const DescrtipionLink: React.FC<DescrtipionLinkProps> = ({ children, href }) => {
  return <Link className={styles.link} href={href}>{children}</Link>;
};
