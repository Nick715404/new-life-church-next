'use client';

import styles from './Header.module.scss';

import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';
import { MotionBox } from '../MotionBox';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DonationButton } from '../DontaionButton/DontaionButton';

const Header = () => {
  const pathname = usePathname();
  const mode = pathname !== '/' ? 'black' : 'white';

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <MotionBox className={styles.logo}>
            <Logo mode={mode} />
          </MotionBox>
          <MotionBox delay={0.2}>
            <Nav />
          </MotionBox>
          <MotionBox>
            <DonationButton
              style={mode}
              text='Пожертвовать'
              as='button'
              type='button'
            />
          </MotionBox>
          <BurgerMenu mode={mode} />
        </div>
      </div>
    </header>
  )
}

export { Header };