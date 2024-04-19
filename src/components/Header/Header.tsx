import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export { Header };