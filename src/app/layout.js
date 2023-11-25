import { Inter } from 'next/font/google'
import './globals.scss'
import { DarkModeContextProvider } from '@/Context/darkModeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Irene\'s portfolio',
  description: 'Irene\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <DarkModeContextProvider>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </DarkModeContextProvider>
  )
}
