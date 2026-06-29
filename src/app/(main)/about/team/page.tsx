import { Hero, Pastors } from '@/sections/about/team/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Команда',
  alternates: {
    canonical: `${process.env.SITE_DOMEN}/about/team`
  }
}

export default function About() {
  return (
    <main className='team children-page'>
      <Hero />
      <Pastors />
    </main>
  )
}