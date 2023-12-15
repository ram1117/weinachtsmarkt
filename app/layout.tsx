import type { Metadata } from 'next'
import './globals.css'
import MenuBar from '@/components/MenuBar'

export const metadata: Metadata = {
  title: 'Weinachtsmarkt Berlin',
  description: 'Find winachtsmarkt in and around Berlin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen`}>
        <MenuBar />
        {children}
      </body>
    </html>
  )
}
