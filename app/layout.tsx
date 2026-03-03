import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clínica Dental Dr. Diego Mari | Odontología Integral en Uruguay',
  description:
    'Clínica odontológica especializada en implantes dentales, ortodoncia, cirugía bucal y rehabilitación estética. Dr. Diego Mari, egresado de Udelar con especialización en cirugía sobre implantes.',
  keywords: [
    'dentista Uruguay',
    'implantes dentales',
    'ortodoncia',
    'clínica dental',
    'Dr. Diego Mari',
    'blanqueamiento dental',
    'cirugía bucal',
    'carillas dentales',
  ],
  openGraph: {
    title: 'Clínica Dental Dr. Diego Mari',
    description:
      'Odontología integral, implantes y ortodoncia con tecnología de última generación.',
    type: 'website',
    locale: 'es_UY',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
