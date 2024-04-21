import { SOCIAL_LINKS } from '@/seo/constants';
import styles from './Socials.module.scss';
import { ISocialLink } from '@/interfaces/links';
import { SocialItem } from './SocialItem';

interface IProps { }

const Socials = ({ }: IProps) => {
  return (
    <div className={styles.socials}>
      <ul className={styles.list}>
        {
          SOCIAL_LINKS.map((link: ISocialLink<string>, index: number) => (
            <SocialItem key={index} data={link} mode='gray' size='small' />
          ))
        }
      </ul>
    </div>
  )
}

export { Socials };