import localFont from 'next/font/local';
import { Montserrat, Unbounded } from 'next/font/google'

export const muller = localFont({
  src: [
    {
      path: '../../public/fonts/MullerLight.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MullerRegular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MullerMedium.woff',
      weight: '500',
      style: 'normal'
    },
  ]
});

export const unbounded = Unbounded({
  weight: ['300', '400', '500'],
  style: 'normal',
  display: 'swap',
});

export const montserrat = Montserrat({
  weight: ['500', '700'],
  style: 'normal',
  display: 'swap',
});

export const halvar = localFont({
  src: [
    {
      path: '/fonts/Halvar-Breitschrift-Black-Desktop.woff',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Halvar-Breitschrift-Regular-Desktop.woff',
      weight: '400',
      style: 'normal'
    },
  ]
})