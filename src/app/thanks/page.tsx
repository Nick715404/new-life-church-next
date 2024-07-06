import styles from './page.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { halvar } from '@/constants/fonts';
import { MotionBox } from '@/components/MotionBox';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Спасибо - Церковь Слово Жизни г. Челябинск'
}

export default function ThanksPage() {
  return (
    <main className="thanks children-page">
      <div className="container">
        <div className={styles.wrapper}>
          <MotionBox className={styles.imgBox}>
            <Image
              priority
              className={styles.image}
              width={610}
              height={245}
              src="/img/png/thanks-img.webp"
              alt="Спасибо за пожертвование" />
          </MotionBox>
          <MotionBox delay={0.2}>
            <h1 className={`${styles.title} ${halvar.className}`}>Спасибо за ваше <br /> щедрое сердце</h1>
          </MotionBox>
          <MotionBox delay={0.3}>
            <p className={styles.text}>Вся информация направлена <br /> вам на почту.</p>
          </MotionBox>
          <MotionBox delay={0.4} className={styles.linkBox}>
            <Link className={styles.link} href="/">На главную</Link>
          </MotionBox>
        </div>
      </div>
    </main>
  )
}