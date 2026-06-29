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
import { Metadata } from 'next';

export const revalidate = false;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Библейские семинары - Церковь Слово Жизни г. Челябинск',
  description:
    'Библейские семинары - это девять месяцев глубокого погружения в Писание, церковную культуру и настоящее христианское комьюнити — для молодёжи, которая хочет строить крепкий духовный фундамент.',
};

export default function BiblicalSeminarPage() {
  return (
    <div
      className={`${oswald.variable} ${manrope.variable} ${caveat.variable} ${styles.page}`}
    >
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
