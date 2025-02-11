import ChangeThemeSwitch from '@/components/atoms/ChangeThemeSwitch';
import { Header } from '@/components/atoms/Header';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: '개발자 정성엽',
  description: '정성엽의 놀이터',
  authors: {
    url: '',
    name: '정성엽',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('dark');
                if (theme === 'true') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          `antialiased`,
          'transition-all duration-300',
          'min-h-screen max-w-screen-md mx-auto'
        )}
      >
        <Header />
        <header className='fixed top-14 right-1 md:right-10 md:top-14 z-[1000]'>
          <ChangeThemeSwitch />
        </header>
        <div className='pt-32'>{children}</div>
      </body>
    </html>
  );
}
