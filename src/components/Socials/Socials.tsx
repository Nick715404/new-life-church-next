import styles from './Socials.module.scss';

import { SOCIAL_LINKS } from '@/seo/constants';
import { ISocialLink } from '@/interfaces/links';
import { SocialItem } from './SocialItem';

interface IProps {
  mode?: 'gray' | 'dark' | 'white';
  size?: 'small' | 'medium' | 'big';
}

const Socials = ({ mode, size }: IProps) => {

  const gapSize = size === 'big' ? 37 : 16;

  return (
    <div className={styles.socials}>
      <ul className={styles.list} style={{ gap: `${gapSize}px` }}>
        {
          SOCIAL_LINKS.map((link: ISocialLink<string>, index: number) => (
            <SocialItem key={index} data={link} mode={mode} size={size} />
          ))
        }
      </ul>
    </div>
  )
}

export { Socials };