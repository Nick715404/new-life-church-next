import { ILinkInBlock, ILinksBlocks } from '@/types/utils';
import styles from './LinksBlocks.module.scss';
import Link from 'next/link';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '../MotionBox';

interface IProps {
	data: ILinksBlocks<ILinkInBlock>;
}

const LinksBlocks = ({ data }: IProps) => {
	return (
		<div className={styles.linksBlocks}>
			<div className={styles.big}>
				<h2 className={`${styles.bigTitle} ${halvar.className}`}>
					{data.big.label}
				</h2>
			</div>
			<div className={styles.smallBox}>
				<MotionBox delay={0.2} datatype='top-left' className={styles.small}>
					<span className={`${halvar.className} ${styles.smallTitle}`}>
						{data.topLeft.label}
					</span>
					<Link className={styles.smallLink} href={data.topLeft.href} />
				</MotionBox>
				<MotionBox delay={0.3} datatype='top-right' className={styles.small}>
					<span className={`${halvar.className} ${styles.smallTitle}`}>
						{data.topRight.label}
					</span>
					<Link className={styles.smallLink} href={data.topRight.href} />
				</MotionBox>
				<MotionBox delay={0.4} datatype='bottom-left' className={styles.small}>
					<span className={`${halvar.className} ${styles.smallTitle}`}>
						{data.bottomLeft.label}
					</span>
					<Link className={styles.smallLink} href={data.bottomLeft.href} />
				</MotionBox>
				<MotionBox delay={0.5} datatype='bottom-right' className={styles.small}>
					<span className={`${halvar.className} ${styles.smallTitle}`}>
						{data.bottomRight.label}
					</span>
					<Link className={styles.smallLink} href={data.bottomRight.href} />
				</MotionBox>
			</div>
		</div>
	);
};

export { LinksBlocks };
