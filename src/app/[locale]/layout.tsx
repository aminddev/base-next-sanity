import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { draftMode } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import '../globals.css'

import { SanityLive } from '@/sanity/lib/live'
import VisualEditing from '@/components/VisualEditing'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { routing } from '@/i18n/routing'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Next.js Sanity Boilerplate',
    default: 'Next.js + Sanity Boilerplate - Production Ready',
  },
  description: 'A high-performance blog boilerplate built with Next.js 16, Sanity v3, and Tailwind CSS 4.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    siteName: 'Sanity Boilerplate',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    return null
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
        <SanityLive />
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  )
}
