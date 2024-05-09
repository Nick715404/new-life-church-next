import { unbounded } from '@/constants/fonts';
import styles from './Hero.module.scss';
import { LinksBlocks } from '@/components/LinksBlocks/LinksBlocks';

const info = {
  big: {
    label: 'Что такое церковь?',
  },
  topLeft: {
    href: '#love',
    label: 'Церковь — место любви'
  },
  topRight: {
    href: '#for-all',
    label: 'Церковь — место для всех',
  },
  bottomLeft: {
    href: '#grow',
    label: 'Церковь — место роста',
  },
  bottomRight: {
    href: '#earth',
    label: 'Церковь до края Земли'
  }
}

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.breadcrumbs}>Ценности</span>
            <h1 className={`${unbounded.className} ${styles.title}`}>1 церковь —<br /> 1 видение</h1>
            <p className={styles.text}>С момента основания нашей церкви в 1995 году мы знали, что церковь «Слово жизни» будет большой, богослужения будут проходить в разных районах Москвы и области и что независимо от количества богослужений и удаленности друг от друга, церковь «Слово жизни» будет ОДНОЙ ЦЕРКОВЬЮ.</p>
          </div>
          <div className={styles.links}>
            <LinksBlocks data={info} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };