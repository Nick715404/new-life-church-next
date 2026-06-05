import localFont from 'next/font/local';
import { Montserrat, Oswald, Manrope, Caveat } from 'next/font/google';

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
});

export const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-oswald',
});

export const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
});

export const caveat = Caveat({
  weight: ['600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-caveat',
});