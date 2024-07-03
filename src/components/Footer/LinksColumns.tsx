import styles from './Footer.module.scss';
import { navLinks } from '@/constants/links';
import { LinksList } from './LinksList';
import { halvar } from '@/constants/fonts';
import Link from 'next/link';
import { CONTACT_INFO } from '@/seo/constants';

const LinksColumns = () => {
  return (
    <div className={styles.linksColumns}>
      <LinksList title='Меню' data={navLinks} />
      <div className={styles.linkList}>
        <h4 className={`${styles.linkListTitle} ${halvar.className}`}>Контакты</h4>
        <div className={styles.info}>
          <Link className={`${styles.infoText} ${halvar.className}`} href={`${CONTACT_INFO.EMAIL}`}>
            Телеграмм
          </Link>
          <Link className={`${styles.infoText} ${halvar.className}`} href={`tel: ${CONTACT_INFO.PHONE}`}>
            {CONTACT_INFO.PHONE}
          </Link>
        </div>
      </div>
    </div>
  )
}

export { LinksColumns };