import type { Metadata } from 'next'
import './globals.css'
import MenuBar from '@/components/MenuBar'
import WeatherButton from '@/components/weather/WeatherButton'
import { montserrat, mountainChristmas } from '@/atoms/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Weihnachtsmarkt',
  description: 'Find weihnachtsmarkt in and around Berlin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${mountainChristmas.variable}`}
    >
      <body className={`h-screen w-screen font-montserrat`}>
        <MenuBar />
        <WeatherButton />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
