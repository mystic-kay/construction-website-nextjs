import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import PageWrapper from "@/components/layout/page-wrapper";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vanguardconstruct.com'),
  title: {
    default: "Vanguard Construct | Award-Winning Construction & Renovation",
    template: "%s | Vanguard Construct"
  },
  description: "For over 25 years, Vanguard Construct has been delivering excellence in commercial and residential construction. LEED-certified, OSHA-compliant, and trusted by 500+ clients nationwide.",
  keywords: [
    "construction services",
    "commercial construction",
    "residential construction",
    "renovation services",
    "LEED certified builders",
    "construction management",
    "design-build",
    "sustainable building",
    "construction company",
    "general contractor"
  ],
  authors: [{ name: "Vanguard Construct" }],
  creator: "Vanguard Construct",
  publisher: "Vanguard Construct",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vanguardconstruct.com',
    title: 'Vanguard Construct | Award-Winning Construction & Renovation',
    description: 'For over 25 years, Vanguard Construct has been delivering excellence in commercial and residential construction. LEED-certified, OSHA-compliant, and trusted by 500+ clients nationwide.',
    siteName: 'Vanguard Construct',
    images: [
      {
        url: '/images/hero/construction-site.jpg',
        width: 1200,
        height: 630,
        alt: 'Vanguard Construct - Premium Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard Construct | Award-Winning Construction & Renovation',
    description: 'For over 25 years, delivering excellence in construction. LEED-certified, OSHA-compliant, and trusted by 500+ clients.',
    images: ['/images/hero/construction-site.jpg'],
    creator: '@vanguardconstruct',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-background text-foreground font-sans`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
