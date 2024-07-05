import styles from './Logo.module.scss';
import Link from "next/link";
import Image from "next/image";

interface IProps { mode?: 'black' | boolean | 'white' };

const Logo = ({ mode }: IProps) => {
  const whiteLogo = "/img/png/logo-white.png";
  const blackLogo = "/img/png/logo-black.png";

  return (
    <Link className={styles.link} href='/'>
      <Image
        className={styles.img}
        src={mode === 'black' ? blackLogo : whiteLogo}
        width={241}
        height={78}
        alt="Церковь Новая Жизнь"
        priority
      />
    </Link>
  )
}

export { Logo };