import styles from './Footer.module.scss';
import { LinksList } from './LinksList';
import Link from 'next/link';
import { halvar } from '@/constants/fonts';
import { navLinks } from '@/shared/constants';
import { CONTACT_INFO } from '@/shared/seo/constants';

const LinksColumns = () => {
	return (
		<div className={styles.linksColumns}>
			<LinksList title='Меню' data={navLinks} />
			<div className={styles.linkList}>
				<h4 className={`${styles.linkListTitle} ${halvar.className}`}>
					Контакты
				</h4>
				<div className={styles.info}>
					<Link
						className={`${styles.infoText} ${halvar.className}`}
						href={`mailto: ${CONTACT_INFO.EMAIL}`}
					>
						{CONTACT_INFO.EMAIL}
					</Link>
					<Link
						className={`${styles.infoText} ${halvar.className}`}
						href={`tel: ${CONTACT_INFO.PHONE}`}
					>
						{CONTACT_INFO.PHONE}
					</Link>
				</div>
			</div>
		</div>
	);
};

export { LinksColumns };
