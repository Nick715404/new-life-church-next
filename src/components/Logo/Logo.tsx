import styles from './Logo.module.scss';

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const path: string = 'img/svg/logo.svg'

  return (
    <Link className={styles.link} href='/'>
      <Image
        src={path}
        width={154}
        height={72}
        alt="Церковь Новая Жизнь"
        priority
      />
    </Link>
  )
}

export { Logo };