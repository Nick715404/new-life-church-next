import styles from './styles.module.scss';
import { YsNav } from './components/YsNav';
import { YsHero } from './components/YsHero';
import { YsVerse } from './components/YsVerse';
import { YsManifesto } from './components/YsManifesto';
import { YsSchedule } from './components/YsSchedule';
import { YsSpeakers } from './components/YsSpeakers';
import { YsRevival } from './components/YsRevival';
import { YsRegister } from './components/YsRegister';
import { YsFooter } from './components/YsFooter';

export default function YouthUralPage() {
  return (
    <div className={styles.root}>
      <YsNav />
      <YsHero />
      <YsVerse />
      <YsManifesto />
      <YsSchedule />
      <YsSpeakers />
      <YsRevival />
      <YsRegister />
      <YsFooter />
      <div className={styles.scanlines} />
      <div className={styles.grain} />
    </div>
  );
}
