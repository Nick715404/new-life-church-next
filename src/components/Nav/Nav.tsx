import { navLinks } from '@/shared/constants';
import styles from './Nav.module.scss';

import { NavLinkList } from './NavLinkList';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLinkList links={navLinks} />
		</nav>
	);
};

export { Nav };
