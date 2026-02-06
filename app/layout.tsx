import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEONav from '@/components/SEONav'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'


export const metadata: Metadata = {
  metadataBase: new URL('https://popolnit-alipay.com'),
  title: {
    default: 'Карго и платежи в Китае под ключ | Пополнение Alipay, WeChat Pay',
    template: '%s | Kargo By Kim'
  },
  description: 'Карго-доставка из Китая, пополнение Alipay и WeChat Pay, оплата инвойсов поставщикам. Гарантированная доставка за 10 дней, обмен валют за минуты.',
  keywords: 'карго из китая, доставка грузов, пополнение alipay, wechat pay, оплата инвойсов китай',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Kargo By Kim',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  themeColor: '#080808',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const organizationData = {
  '@type': 'Organization',
  name: 'Kargo By Kim',
  url: 'https://popolnit-alipay.com',
  logo: 'https://popolnit-alipay.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Russian'],
  },
  sameAs: [
    'https://t.me/Dmitriy_kargo',
  ],
}

const websiteData = {
  '@type': 'WebSite',
  name: 'Kargo By Kim',
  url: 'https://popolnit-alipay.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://popolnit-alipay.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <StructuredDataGenerator type="Organization" data={organizationData} />
        <StructuredDataGenerator type="WebSite" data={websiteData} />
        <SEONav />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
