import styles from './Logo.module.scss';

import Link from "next/link";
import Image from "next/image";

interface IProps {
  mode?: 'black' | boolean | 'white'
}

const Logo = ({ mode }: IProps) => {
  const path: string = '/img/svg/logo2.svg'

  return (
    <Link className={styles.link} href='/'>
      <Image
        style={mode === 'black' ? { filter: 'invert(100%)' } : {}}
        className={styles.img}
        src={path}
        width={245}
        height={72}
        alt="Церковь Новая Жизнь"
        priority
      />
    </Link>
  )
}

export { Logo };