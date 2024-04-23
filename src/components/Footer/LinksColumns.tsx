import { navLinks } from '@/constants/links';
import styles from './Footer.module.scss';
import { LinksList } from './LinksList';

const LinksColumns = () => {
  return (
    <div className={styles.linksColumns}>
      <LinksList title='Ссылки' data={navLinks} />
      <LinksList title='Ссылки' data={navLinks} />
      <LinksList title='Ссылки' data={navLinks} />
    </div>
  )
}

export { LinksColumns };