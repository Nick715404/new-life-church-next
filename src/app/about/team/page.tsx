import { Hero, Pastors } from '@/sections/about/team/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Команда - Церковь Слово Жизни г. Челябинск'
}

export default function About() {
  return (
    <main className='team children-page'>
      <Hero />
      <Pastors />
    </main>
  )
}