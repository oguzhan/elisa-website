import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Island_Moments } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const HandFont = Island_Moments({ subsets: ['latin'], variable: '--font-hand', weight: '400' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elisahertzler.com'),
  title: {
    default: 'Elisa Hertzler – Entrepreneur in AI & Growth Strategist',
    template: '%s | Elisa Hertzler',
  },
  description:
    'Entrepreneur in AI and growth strategist. Case studies, portfolio, and ways to work together.',
  applicationName: 'Elisa Hertzler',
  generator: 'Next.js',
  authors: [{ name: 'Elisa Hertzler' }],
  keywords: [
    'Elisa Hertzler',
    'AI entrepreneur',
    'growth strategist',
    'GTM',
    'case studies',
    'portfolio',
  ],
  creator: 'Elisa Hertzler',
  publisher: 'Elisa Hertzler',
  openGraph: {
    type: 'website',
    url: 'https://www.elisahertzler.com/',
    siteName: 'Elisa Hertzler',
    title: 'Elisa Hertzler – Entrepreneur in AI & Growth Strategist',
    description:
      'Entrepreneur in AI and growth strategist. Case studies, portfolio, and ways to work together.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@',
    creator: '@',
    title: 'Elisa Hertzler – Entrepreneur in AI & Growth Strategist',
    description:
      'Entrepreneur in AI and growth strategist. Case studies, portfolio, and ways to work together.',
    images: ['/placeholder.jpg'],
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/placeholder-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/placeholder-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/placeholder-logo.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${HandFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Elisa Hertzler',
              url: 'https://www.elisahertzler.com',
              jobTitle: 'Entrepreneur in AI & Growth Strategist',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Elisa Hertzler',
              url: 'https://www.elisahertzler.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.elisahertzler.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
