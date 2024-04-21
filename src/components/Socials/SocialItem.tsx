import styles from './Socials.module.scss';

import { ISocialLink } from "@/interfaces/links";

import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ISocialLink<string>;
  mode?: 'gray' | 'dark' | 'white';
  size?: 'small' | 'medium' | 'big';
}

const SocialItem = ({ data, mode, size }: Props) => {

  const classNames = {
    gray: `${styles.gray}`,
    dark: `${styles.dark}`,
    white: `${styles.white}`,
  }

  const sizeStyles = {
    small: `40px`,
    medium: '56px',
    big: '92px',
  }

  const classNameSettings = mode ? classNames[mode] : '#FFFFFF';
  const sizeValue = size ? sizeStyles[size] : '56px';

  return (
    <Link
      style={{ width: `${sizeValue}`, height: `${sizeValue}` }}
      className={`${styles.link} ${classNameSettings}`}
      href={data.path}
    >
      <Image
        className={styles.img}
        width={22}
        height={22}
        src={`img/socials/${data.tag}.svg`}
        alt={data.tag}
      />
    </Link>
  );
};

export { SocialItem };
