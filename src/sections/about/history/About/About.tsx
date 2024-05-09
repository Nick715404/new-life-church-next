import { unbounded } from '@/constants/fonts';
import styles from './About.module.scss';
import { InfoTabs } from '@/components/InfoTabs/InfoTabs';

const data = [
  {
    // - Элемент таба
    number: 200,
    subtitle: 'properties',
    text: 'Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.',
    icon: '+',
  },
  {
    // - Элемент таба
    number: 300,
    subtitle: 'clients',
    text: 'Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.',
    icon: '+',
  },
  {
    // - Элемент таба
    number: 100,
    subtitle: 'happy clients',
    text: 'Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.',
    icon: '%',
  },
]

const About = () => {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={`${styles.title} ${unbounded.className}`}>Начало</h2>
            <p className={styles.text}>
              Церковь основана в 1992 году. Сейчас имеет свое здание с залом на 800 мест, христианскую школу и реабилитационный центр.
              Церковь «Новая Жизнь» появилась 5 января 1992 года через служение пастора Байдимирова Николая Сергеевича.В 1995 году администрация города Челябинска выделила церкви здание в центре города. Здание, которому cвыше 120 лет, было реконструировано и к нему еще пристроен зал на 800 мест.
            </p>
          </div>
          <div className={styles.tabs}>
            <InfoTabs data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };