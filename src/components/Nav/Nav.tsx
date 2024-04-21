import styles from './Nav.module.scss';

import { NavLinkList } from './NavLinkList';
import { navLinks } from "@/constants/links";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLinkList links={navLinks} />
    </nav>
  )
}

export { Nav };