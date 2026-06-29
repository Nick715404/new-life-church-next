import localFont from 'next/font/local';
import { Montserrat, Oswald, Manrope, Caveat, JetBrains_Mono } from 'next/font/google';

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

export const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const lozungCaps = localFont({
  src: [{ path: '../../public/fonts/Lozung-Caps-Black.woff', weight: '900', style: 'normal' }],
  display: 'swap',
  variable: '--font-lozung-caps',
});

export const ceremoniousOne = localFont({
  src: [{ path: '../../public/fonts/ceremonious-one.woff', weight: '400', style: 'normal' }],
  display: 'swap',
  variable: '--font-ceremonious-one',
});