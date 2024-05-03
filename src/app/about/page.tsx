import styles from './page.module.scss';

import { Hero } from '@/sections/about/index';

export default function About() {
  return (
    <div className='about children-page'>
      <Hero />
    </div>
  )
}