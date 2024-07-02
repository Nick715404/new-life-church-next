'use client';

import styles from './Header.module.scss';
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';
import { MotionBox } from '../MotionBox';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { usePathStyles } from './usePathStyles';

const Header = () => {
  const pathname = usePathname();
  const mode = usePathStyles({ pathname });

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
          <MotionBox className={styles.button}>
            <DonationButton as="link" href="/donation" text="пожертвовать" style={mode} />
          </MotionBox>
          <BurgerMenu mode={mode} />
        </div>
      </div>
    </header>
  )
}

export { Header };