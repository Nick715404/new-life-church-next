import styles from './page.module.scss';
import { oswald, manrope, caveat } from '@/constants/fonts';
import {
  BiblicalHero,
  BiblicalStatement,
  BiblicalWhatAwaits,
  BiblicalTopics,
  BiblicalSchedule,
  BiblicalCta,
} from '@/sections/biblical-seminars';

export const revalidate = false;
export const dynamic = 'force-static';

export default function BiblicalSeminarPage() {
  return (
    <div className={`${oswald.variable} ${manrope.variable} ${caveat.variable} ${styles.page}`}>
      <div className={styles.wrap}>
        <BiblicalHero />
        <BiblicalStatement />
        <BiblicalWhatAwaits />
        <BiblicalTopics />
        <BiblicalSchedule />
        <BiblicalCta />
      </div>
    </div>
  );
}
