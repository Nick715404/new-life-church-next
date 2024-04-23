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

  const iconsColors = {
    gray: '0%',
    dark: '100%',
    white: '0%',
  }

  const sizeStyles = {
    small: `40px`,
    medium: '56px',
    big: '92px',
  }

  const iconsSize = {
    small: 22,
    medium: 22,
    big: 41,
  }

  const classNameSettings = mode ? classNames[mode] : '#FFFFFF';
  const sizeValue = size ? sizeStyles[size] : '56px';
  const iconsColor = mode ? iconsColors[mode] : '0%';
  const iconSize = size ? iconsSize[size] : 22;

  return (
    <Link
      style={{ width: `${sizeValue}`, height: `${sizeValue}` }}
      className={`${styles.link} ${classNameSettings}`}
      href={data.path}
    >
      <Image
        style={{ filter: `invert(${iconsColor})` }}
        className={styles.img}
        width={iconSize}
        height={iconSize}
        src={`img/socials/${data.tag}.svg`}
        alt={data.tag}
      />
    </Link>
  );
};

export { SocialItem };
