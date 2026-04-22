import type { Metadata, Viewport } from 'next';

export const appInfo = {
  logo: '/logo.svg',
  title: 'Bụi Media - Kiến tạo thương hiệu',
  description:
    'Bụi không chỉ quay video, chúng tôi kể câu chuyện thương hiệu của bạn',
  domain: 'https://bui-media.vercel.app',
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
  twitterCreator: '@bui_media',
  category: 'Local Business',
  publisher: 'Bụi Media',
};

export const metadata: Metadata = {
  metadataBase: new URL(appInfo.domain),
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
        url: `${appInfo.domain}${appInfo.ogImage}`,
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
    images: [`https://bui-media.vercel.app/`],
    creator: appInfo.twitterCreator,
    site: appInfo.twitterCreator,
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
    google: 'verification_token',
    yandex: 'verification_token',
  },

  category: appInfo.category,
  creator: appInfo.twitterCreator,
  publisher: appInfo.publisher,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: appInfo.themeColor,
};

// Function to generate metadata for child pages
export function PageMetadata(
  pageTitle: string,
  pageDescription?: string
): Metadata {
  return {
    ...metadata,
    title: `${pageTitle} | ${appInfo.title}`,
    description: pageDescription || metadata.description,
    openGraph: {
      ...metadata.openGraph,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
    twitter: {
      ...metadata.twitter,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
  };
}

export function generatePageMetadata({
  title,
  description,
  ogImage,
  path,
  keywords,
  type = 'website',
}: {
  title: string;
  description?: string;
  ogImage?: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
}): Metadata {
  const url = `${appInfo.domain}${path}`;
  const image = ogImage ?? appInfo.ogImage;
  const fullTitle = `${title} | ${appInfo.title}`;
  const desc = description ?? appInfo.description;

  return {
    metadataBase: new URL(appInfo.domain),
    title: fullTitle,
    description: desc,
    keywords: keywords ?? appInfo.keywords,
    openGraph: {
      type,
      title: fullTitle,
      description: desc,
      url,
      siteName: appInfo.title,
      images: [
        {
          url: `${appInfo.domain}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [`${appInfo.domain}${image}`],
      creator: appInfo.twitterCreator,
    },
    alternates: {
      canonical: url,
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
  };
}
