'use client';

import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
import { usePathStyles } from '../../model';
import { Logo } from '@/entities/Logo/ui';
import { MotionBox } from '@/components/MotionBox';
import { DonationButton } from '@/entities/buttons/ui';
import { Nav } from '../Nav/Nav';
import { BurgerMenu } from '@/widgets/mobile-menu/ui';

const Header = () => {
	const pathname = usePathname();
	const mode = usePathStyles({ pathname });

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.wrapper}>
					<MotionBox className={styles.logo}>
						<Logo mode={mode} />
					</MotionBox>
					<MotionBox delay={0.2}>
						<Nav />
					</MotionBox>
					<MotionBox className={styles.button}>
						<DonationButton
							as='link'
							href='/donation'
							text='пожертвовать'
							style={mode}
						/>
					</MotionBox>
					<BurgerMenu mode={mode} />
				</div>
			</div>
		</header>
	);
};

export { Header };

// Нужно сделать следующее -

// 1) Нужно отправлять с фронтенда на Next.js фотографию и некоторые данные в Гугл Таблицы
// 2) Нужно чтобы фотография сохранялась в Яндекс Диск и ссылка на эту фотографию отправлялась в таблицу
// 3) Нужно чтобы все данные выводились в Гугл Таблицу
// 4) Форм может быть несколько как и Таблиц
