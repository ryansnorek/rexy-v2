import './globals.css';
import { Inter } from 'next/font/google';
import ClientProvider from './pages/client/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wordcel',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
