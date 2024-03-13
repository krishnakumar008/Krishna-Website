import type { Metadata } from 'next'
import { inter } from './ui/utility/fonts'
import './ui/utility/globals.css'
import Navbar from './ui/utility/navbar';
import Footer from './ui/utility/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Krishna',
    default: 'KrishnaKumar',
  },
  description: 'We aim to give you a crisp analysis on global and national affairs through an unbiased lens.',
  generator: 'Krishnakumar',
  applicationName: 'Krishnakumar Portfolio Website',
  keywords: ['GAD', 'GAD website', 'Gloabl Affairs Desk', 'Gobal Affairs', 'Global Affairs Website', 'Global Desk'],
  creator: 'Meheer J',
  authors: [{ name: 'Meheer', url: 'https://meheer.vercel.app/' }, { name: 'Krishnakumar' }],
  openGraph: {
    title: 'Krishnakumar Portfolio Website',
    description: 'We aim to give you a crisp analysis on global and national affairs through an unbiased lens.',
    url: 'https://krishnakumar.vercel.app/',
    siteName: 'KrishnaKumar Portfolio Website',
    images: [
      {
        url: 'https://globalaffairsdesk.com/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className='min-h-screen'>
            <Navbar />
            <div className='bg-slate-100'>
              {children}
            </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}