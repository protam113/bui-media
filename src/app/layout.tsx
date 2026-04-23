import { Nav } from '@/components/nav';
import '../assets/styles/global.css';

import {
  metadata as siteMetadata,
  viewport as siteViewport,
} from '@/constants/appInfos';
import { Footer } from '@/components/footer';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
