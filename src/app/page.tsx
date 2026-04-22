import { Arrows, Icons } from '@/assets';
import Image from 'next/image';

const partnerLogos = [
  'https://buimedia.com/wp-content/uploads/2025/12/LOGO-CLIENTS-WEBSITE-6-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-10-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-2-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-16-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-11-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-3-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-4-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/LOGO-CLIENTS-WEBSITE-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/LOGO-CLIENTS-WEBSITE-1-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-12-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/28-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/LOGO-CLIENTS-WEBSITE-3-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-22-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/LOGO-CLIENTS-WEBSITE-2-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-17-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/08/Bui-Media-Marketing-Agency-15-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/31-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/32-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/33-1024x454.png',
  'https://buimedia.com/wp-content/uploads/2025/09/LOGO-CLIENTS-WEBSITE-4-1024x454.png',
];

export default function Home() {
  return (
    <body className="bg-white text-on-background min-h-screen flex flex-col antialiased">
      <main className="flex-grow bg-white pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto space-y-section-margin">
          <section className="relative flex flex-col items-center justify-center text-center px-4 py-12 bg-white">
            {/* Logo */}
            <div className="mb-6">
              <div className="bg-gray-100 rounded-full p-4 shadow-sm">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={220}
                  height={220}
                  className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Text block */}
            <div className="max-w-md border border-gray-200 rounded-2xl px-5 py-6 shadow-sm">
              <p className="text-lg sm:text-lg md:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                Bụi Media - Kiến tạo thương hiệu
              </p>

              <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-3" />

              <p className="text-base sm:text-base text-gray-800 leading-relaxed">
                Bụi không chỉ quay video, chúng tôi kể câu chuyện thương hiệu
                của bạn
              </p>
            </div>
          </section>
          <section className="space-y-4">
            {/* Facebook */}
            <a
              className="group block w-full bg-[#EBF3FF] border border-[#1877F2]/20 text-gray-900 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100 hover:border-[#1877F2]/40 transition-all duration-200"
              href="https://www.facebook.com/profile.php?id=61569775863569"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icons.Facebook />
                  <span className="font-headline-md text-headline-md">
                    Facebook
                  </span>
                </div>
                <span className="text-[#1877F2]/40 group-hover:translate-x-1 group-hover:text-[#1877F2] transition-all duration-200">
                  <Arrows.ArrowRight />
                </span>
              </div>
            </a>

            {/* TikTok */}
            <a
              className="group block w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-gray-200 hover:border-gray-400 transition-all duration-200"
              href="https://www.tiktok.com/@bui_media?_r=1&_t=ZS-95k5yJIqslw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icons.TikTok />
                  <span className="font-headline-md text-headline-md">
                    TikTok
                  </span>
                </div>
                <span className="text-gray-300 group-hover:translate-x-1 group-hover:text-gray-700 transition-all duration-200">
                  <Arrows.ArrowRight />
                </span>
              </div>
            </a>

            {/* Website */}
            <a
              className="group block w-full bg-[#ECFDF5] border border-[#16A34A]/20 text-gray-900 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-green-100 hover:border-[#16A34A]/40 transition-all duration-200"
              href="https://buimedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icons.Globe />
                  <span className="font-headline-md text-headline-md">
                    Website
                  </span>
                </div>
                <span className="text-[#16A34A]/40 group-hover:translate-x-1 group-hover:text-[#16A34A] transition-all duration-200">
                  <Arrows.ArrowRight />
                </span>
              </div>
            </a>

            {/* Zalo */}
            <a
              className="group block w-full bg-[#E6F0FF] border border-[#0068FF]/20 text-gray-900 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100 hover:border-[#0068FF]/40 transition-all duration-200"
              href="tel:0345660742"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icons.Zalo />
                  <span className="font-headline-md text-headline-md">
                    Zalo (Call)
                  </span>
                </div>
                <span className="text-[#0068FF]/40 group-hover:translate-x-1 group-hover:text-[#0068FF] transition-all duration-200">
                  <Arrows.ArrowRight />
                </span>
              </div>
            </a>
          </section>

          <section className="mt-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
              {partnerLogos.map((src, i) => (
                <div
                  key={i}
                  className="bg-[#EAF2FF]/80 rounded-xl p-3 flex items-center justify-center aspect-[2/1]"
                >
                  <img
                    src={src}
                    alt={`Partner ${i + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-3">
            {/* Content Creators */}
            <div className="bg-[#EEF2FF] border border-[#6366F1]/20 rounded-2xl p-5 relative overflow-hidden hover:shadow-md hover:shadow-[#6366F1]/15 hover:-translate-y-0.5 transition-all duration-200">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#6366F1">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="text-[32px] sm:text-[40px] font-extrabold leading-none mb-1 text-[#4F46E5]">
                  7,500+
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#6366F1]/70">
                  Content Creators
                </div>
              </div>
            </div>

            {/* Brands Partnered */}
            <div className="bg-[#F0F9FF] border border-[#0EA5E9]/20 rounded-2xl p-5 relative overflow-hidden hover:shadow-md hover:shadow-[#0EA5E9]/15 hover:-translate-y-0.5 transition-all duration-200">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#0EA5E9">
                  <path d="M20 4H4v2l8 5 8-5V4zm0 4.236l-8 5-8-5V20h16V8.236z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="text-[32px] sm:text-[40px] font-extrabold leading-none mb-1 text-[#0284C7]">
                  600+
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0EA5E9]/70">
                  Brands Partnered
                </div>
              </div>
            </div>

            {/* TOP 1 MCN - full width */}
            <div className="col-span-2 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#0EA5E9] rounded-2xl p-7 text-center relative overflow-hidden shadow-lg shadow-[#6366F1]/30 hover:-translate-y-0.5 transition-all duration-200">
              {/* decorative blobs */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mt-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mb-3 opacity-90"
                >
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V18H7v2h10v-2h-4v-2.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
                <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none mb-1 tracking-tight">
                  TOP 1 MCN
                </div>
                <div className="text-sm text-white/75 font-medium tracking-wide">
                  Leading Multi-Channel Network
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </body>
  );
}
