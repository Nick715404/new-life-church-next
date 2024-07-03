import styles from './page.module.scss';
import { halvar } from '@/constants/fonts';
import { Hero } from '@/sections/donation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пожертвование - Церковь Слово Жизни г. Челябинск'
}

const DonationPage = () => {
  return (
    <main className="donation children-page">
      <Hero />
      <section className={styles.verse}>
        <div className="container-small">
          <div className={styles.wrapper}>
            <h2 className={`${halvar.className} ${styles.verseTitle}`}>2 КОР 9:7−14</h2>
            <p className={styles.verseText}>
              Каждый уделяй по расположению сердца, не с огорчением и не с принуждением; ибо доброхотно дающего любит Бог. Бог же силен обогатить вас всякою благодатью, чтобы вы, всегда и во всем имея всякое довольство, были богаты на всякое доброе дело, как написано: расточил, раздал нищим; правда его пребывает в век. <br />
            </p>
            <p className={styles.verseText}>
              Дающий же семя сеющему и хлеб в пищу подаст обилие посеянному вами и умножит плоды правды вашей, так чтобы вы всем богаты были на всякую щедрость, которая через нас производит благодарение Богу.
            </p>
            <p className={styles.verseText}>
              Ибо дело служения сего не только восполняет скудость святых, но и производит во многих обильные благодарения Богу; ибо, видя опыт сего служения, они прославляют Бога за покорность исповедуемому вами Евангелию Христову и за искреннее общение с ними и со всеми, молясь за вас, по расположению к вам, за преизбыточествующую в вас благодать Божию.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DonationPage;