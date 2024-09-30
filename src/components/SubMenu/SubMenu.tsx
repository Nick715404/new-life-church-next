'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './SubMenu.module.scss';
import { INavLinkChildren } from '@/types/links';
import Link from 'next/link';
import { LegacyRef, useRef } from 'react';

type TProps = {
	status: boolean;
	children: boolean;
	subMenu: INavLinkChildren[];
	ref?: LegacyRef<HTMLDivElement>;
	setMenu: () => void;
};

const SubMenu = ({ status, children, subMenu, ref, setMenu }: TProps) => {
	const submenuRef = useRef(null);
	useClickOutside({ ref: submenuRef, callback: setMenu });

	return (
		<>
			{status && children && (
				<div className={styles.layout} ref={submenuRef}>
					<div className={styles.submenu}>
						{subMenu.map((item, index) => (
							<Link
								key={index}
								className={styles.submenuLink}
								href={item.path}
								onClick={setMenu}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export { SubMenu };
