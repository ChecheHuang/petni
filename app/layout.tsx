import Navbar from './components/Navbar'
import './globals.css'
import QueryProvider from '@/components/providers/queryProvider'
import { ThemeProvider } from '@/components/providers/themeProvider'
import ToastProvider from '@/components/providers/toastProvider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'

const inter = Noto_Sans_TC({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PetNi',
  description: '寵物收養系統',
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(inter.className, ' min-h-screen w-full bg-[#f8f8f8]')}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryProvider>
            {authModal}
            <header className="mx-auto flex h-[77.53px] max-w-[1280px]  items-center justify-between bg-[#FFFFFF] pl-[87px] shadow-[0px_1px_9px_0px_#2626260D] ">
              <Navbar />
            </header>
            <main className="h-[calc(100vh-77.53px)] w-full">{children}</main>
            <ToastProvider />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
