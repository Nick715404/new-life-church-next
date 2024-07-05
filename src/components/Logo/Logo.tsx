import styles from './Logo.module.scss';
import Link from "next/link";
import Image from "next/image";

interface IProps { mode?: 'black' | boolean | 'white' };

const Logo = ({ mode }: IProps) => {
  const whiteLogo = "./img/svg/logo-white.svg";
  const blackLogo = "./img/svg/logo-black.svg";

  return (
    <Link className={styles.link} href='/'>
      <Image
        className={styles.img}
        src={mode === 'black' ? blackLogo : whiteLogo}
        width={240}
        height={100}
        alt="Церковь Новая Жизнь"
        priority
      />
    </Link>
  )
}

export { Logo };