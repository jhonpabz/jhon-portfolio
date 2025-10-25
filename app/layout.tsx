import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jhon Portfolio',
  description: 'Jhon Cesar Pablo Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full h-full max-w-6xl p-5 mx-auto">
            <div className="flex flex-row">
              <div className="invisible lg:basis-1/2 lg:visible">
                <div className="fixed max-w-sm">
                  <Header />
                </div>
              </div>
              <div className="lg:basis-1/2">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
