import styles from './Socials.module.scss';

import { SOCIAL_LINKS } from '@/seo/constants';
import { ISocialLink } from '@/types/links';
import { SocialItem } from './SocialItem';
import { MotionBox } from '../MotionBox';

interface IProps {
	mode?: 'gray' | 'dark' | 'white';
	size?: 'small' | 'medium' | 'big';
}

const Socials = ({ mode, size }: IProps) => {
	const gapSize = size === 'big' ? 37 : 16;

	return (
		<div className={styles.socials}>
			<ul className={styles.list} style={{ gap: `${gapSize}px` }}>
				{SOCIAL_LINKS.map((link: ISocialLink<string>, index: number) => (
					<MotionBox key={index} delay={+`0.${index + 4}`}>
						<SocialItem data={link} mode={mode} size={size} />
					</MotionBox>
				))}
			</ul>
		</div>
	);
};

export { Socials };
