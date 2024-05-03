'use client';

import styles from './Header.module.scss';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { usePathname } from 'next/navigation';

const Header = () => {

  const pathname = usePathname();
  const mode = pathname !== '/' ? 'black' : 'white';

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo mode={mode} />
          </div>
          <Nav />
          <DonationButton
            style={mode}
            text='Пожертвовать'
            as='button'
            type='button'
          />
          <BurgerMenu mode={mode} />
        </div>
      </div>
    </header>
  )
}

export { Header };