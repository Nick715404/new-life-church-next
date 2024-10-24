'use client';

import styles from './BurgerMenu.module.scss';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { BurgerMenuList } from './BurgerMenuList';

interface IProps {
	mode: 'black' | 'white';
}

const BurgerMenu = ({ mode }: IProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const menuClassName = open
		? `${styles.menu} ${styles.open}`
		: `${styles.menu}`;

	return (
		<>
			<button
				aria-label='Мобильное меню'
				className={
					mode === 'black' ? `${styles.burger} ${styles.black}` : styles.burger
				}
				onClick={() => setOpen(true)}
			>
				{[...Array(3)].map((_, index: number) => (
					<span
						key={index}
						className={
							mode === 'black'
								? `${styles.burgerLine} ${styles.black}`
								: styles.burgerLine
						}
					/>
				))}
			</button>
			<div className={menuClassName}>
				<div className={styles.header}>
					<div className='container'>
						<div className={styles.headerWrapper}>
							<div onClick={() => setOpen(false)} className={styles.headerLogo}>
								<Logo />
							</div>
							<button
								onClick={() => setOpen(false)}
								className={styles.headerClose}
							>
								{[...Array(3)].map((_, index: number) => (
									<span key={index} className={styles.headerCloseLine} />
								))}
							</button>
						</div>
					</div>
				</div>
				<div className={styles.listBox}>
					<div className='container'>
						<BurgerMenuList onClose={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</>
	);
};

export { BurgerMenu };
