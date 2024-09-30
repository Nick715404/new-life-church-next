import styles from './FooterAccordion.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IFooterContactsInfo, INavLink } from '@/types/links';

type LinkListProps = {
	links: INavLink[] | IFooterContactsInfo[];
	icons?: boolean;
};

export function LinkList({ links, icons }: LinkListProps) {
	if ((links as IFooterContactsInfo[]).some(item => item.imgPath)) {
		return (
			<>
				{(links as IFooterContactsInfo[]).map((item, index) => (
					<div key={index} className={styles.line}>
						<Image width={24} height={24} src={item.imgPath} alt='' />
						<Link className={styles.link} href={item.path}>
							{item.label}
						</Link>
					</div>
				))}
			</>
		);
	}

	return (
		<>
			{(links as INavLink[]).map((item, index) => (
				<Link className={styles.link} key={index} href={item.path}>
					{item.label}
				</Link>
			))}
		</>
	);
}
