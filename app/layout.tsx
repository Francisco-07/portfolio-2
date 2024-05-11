import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import Footer from './_sections/Footer'
import AppProvider from './AppProvider'
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francisco Garciarena',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          {children}
          {getInitColorSchemeScript({
            attribute: 'data-mui-color-scheme',
            modeStorageKey: 'mui-mode',
            colorSchemeStorageKey: 'mui-color-scheme',
            defaultMode: 'dark',
          })}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
