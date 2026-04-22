import type { Metadata, Viewport } from 'next';

export const appInfo = {
  logo: '/logo.svg',
  title: 'Bụi Media - Kiến tạo thương hiệu',
  description:
    'Bụi không chỉ quay video, chúng tôi kể câu chuyện thương hiệu của bạn',
  domain: 'https://buimedia.com',
  ogImage: '/ogImage.jpg',
  themeColor: '#ffffff',
  keywords: [
    'xây dựng thương hiệu',
    'sản xuất video doanh nghiệp',
    'quay video quảng cáo',
    'làm video marketing',
    'kể chuyện thương hiệu',
    'branding doanh nghiệp',
    'truyền thông thương hiệu',
    'video viral',
    'content marketing',
    'chiến lược nội dung',
    'quảng cáo mạng xã hội',
    'video tiktok doanh nghiệp',
    'dịch vụ media',
    'creative agency việt nam',
  ],
};

export const metadata: Metadata = {
  title: appInfo.title,
  description: appInfo.description,
  keywords: appInfo.keywords,
  applicationName: appInfo.title,
  generator: 'Next.js',

  icons: {
    icon: appInfo.logo,
    apple: appInfo.logo,
    shortcut: appInfo.logo,
  },

  openGraph: {
    type: 'website',
    title: appInfo.title,
    description: appInfo.description,
    siteName: appInfo.title,
    url: appInfo.domain,
    images: [
      {
        url: appInfo.ogImage,
        width: 1200,
        height: 630,
        alt: appInfo.title,
      },
    ],
    locale: 'vi_VN',
  },

  twitter: {
    card: 'summary_large_image',
    title: appInfo.title,
    description: appInfo.description,
    images: [appInfo.ogImage],
    creator: '@bui_media',
    site: '@bui_media',
  },

  alternates: {
    canonical: appInfo.domain,
    languages: {
      'en-US': `${appInfo.domain}/en`,
      'vi-VN': `${appInfo.domain}`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'DHscGD5w7gIke_3M9XpkRVleQLuva4RO7BrrE4YvC4c',
    yandex: 'cc89c2e7c496f9c9',
  },
  category: 'technology',
  creator: 'Bui Media',
  publisher: 'Bui Media',

  authors: [
    {
      name: 'Bui Media',
      url: appInfo.domain,
    },
  ],

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  metadataBase: new URL(appInfo.domain),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: appInfo.themeColor,
};

export const siteBaseUrl = 'https://buimedia.com';

export function generatePageMetadata({
  title,
  description,
  ogImage,
  path,
}: {
  title: string;
  description?: string;
  ogImage?: string;
  path: string;
}): Metadata {
  const url = `${appInfo.domain}${path}`;
  const image = ogImage ?? appInfo.ogImage;

  return {
    title: `${title} | ${appInfo.title}`,
    description: description ?? appInfo.description,
    openGraph: {
      title,
      description: description ?? appInfo.description,
      url,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
