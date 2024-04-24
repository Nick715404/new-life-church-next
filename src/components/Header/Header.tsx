import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Nav />
          <DonationButton
            style='white'
            text='Пожертвовать'
            as='button'
            type='button'
          />
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

export { Header };