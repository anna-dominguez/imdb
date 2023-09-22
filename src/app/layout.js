import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* TODO: Header */}
          <Header />
          {/* TODO: Navbar */}
          {/* TODO: SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
