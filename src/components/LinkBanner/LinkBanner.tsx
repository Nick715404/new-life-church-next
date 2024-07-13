import styles from './LinkBanner.module.scss';
import { halvar } from '@/constants/fonts';
import { PrayingButton } from '@/components/PrayingButton/PrayingButton';
import { MotionBox } from '@/components/MotionBox';

type LinkBannerProps = {
  title: string,
  text?: string,
  path: string,
}

export const LinkBanner = ({ path, text, title }: LinkBannerProps) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <MotionBox delay={0.1} className={styles.titleBox}>
              <h2 className={`${styles.title} ${halvar.className}`}>
                {title}
              </h2>
            </MotionBox>
            <MotionBox delay={0.2}>
              {text ? <p>{text}</p> : null}
            </MotionBox>
            <MotionBox delay={0.3} className={styles.btnBox}>
              <PrayingButton path={path} text='хочу поделиться' />
            </MotionBox>
          </div>
        </div>
      </div>
    </section>
  )
}