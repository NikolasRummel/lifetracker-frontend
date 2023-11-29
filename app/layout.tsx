import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cubid Lifetracker',
  description: 'A simple Dashboard for tracking your life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html suppressHydrationWarning>
        <body>
          <Providers attribute={"class"}>{children}</Providers>
        </body>
      </html>
  )
}
