import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  weight: ['500', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin', 'cyrillic'],
});

export const halvar = localFont({
  src: [
    {
      path: '../../public/fonts/Halvar-Breitschrift-Regular-Desktop.woff',
      weight: '400',
      style: 'normal'
    },
  ]
})