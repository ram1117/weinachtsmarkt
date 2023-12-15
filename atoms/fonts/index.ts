import { Montserrat, Mountains_of_Christmas } from 'next/font/google'

export const mountainChristmas = Mountains_of_Christmas({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-christmas',
})

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})
