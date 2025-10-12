import type React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/components/query-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohammed Baabbad - Mobile Application Developer',
  description:
    'Mobile Application Developer building production apps with React Native and Flutter. UI-led, performance-first, production-ready.',
  keywords: ['Mobile Developer', 'React Native', 'Flutter', 'Expo', 'UI/UX', 'Frontend'],
  authors: [{ name: 'Mohammed Baabbad' }],
  creator: 'Mohammed Baabbad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammed-Baabbad.vercel.app',
    title: 'Mohammed Baabbad - Mobile Application Developer',
    description:
      'Mobile Application Developer building production apps with React Native and Flutter.',
    siteName: 'Mohammed Baabbad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Baabbad - Mobile Application Developer',
    description:
      'Mobile Application Developer building production apps with React Native and Flutter.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
