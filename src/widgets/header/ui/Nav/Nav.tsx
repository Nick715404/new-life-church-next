import styles from './Nav.module.scss';

import { NavLinkList } from './ui/NavLinkList';
import { navLinks } from '@/shared/constants';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLinkList links={navLinks} />
		</nav>
	);
};

export { Nav };
