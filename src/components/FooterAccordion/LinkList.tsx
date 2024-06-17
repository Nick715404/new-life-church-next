import styles from './FooterAccordion.module.scss';
import { footerContactsInfo } from "@/constants/links"
import { IFooterContactsInfo, INavLink } from "@/interfaces/links"
import Image from 'next/image';
import Link from "next/link"

type LinkListProps = {
  links: INavLink[] | IFooterContactsInfo[],
  icons?: boolean,
}

export function LinkList({ links, icons }: LinkListProps) {

  if (icons) {
    return (
      <>
        {
          (links as IFooterContactsInfo[]).map((item, index) => (
            <div key={index} className={styles.line}>
              <Image width={24} height={24} src={item.imgPath} alt='' />
              <Link className={styles.link} href={item.path}>{item.label}</Link>
            </div>
          ))
        }
      </>
    )
  }

  return (
    <>
      {
        (links as INavLink[]).map((item, index) => (
          <Link className={styles.link} key={index} href={item.path}>{item.label}</Link>
        ))
      }
    </>
  )
}
