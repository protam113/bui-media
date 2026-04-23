'use client';
import { Arrows, Icons } from '@/assets';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { useCallback, useState } from 'react';

const back = {
  backgroundImage: 'url(/bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

// ChannelCard.tsx
function ChannelCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)] bg-white font-sans">
      {/* Banner */}
      <div className="relative">
        {/* 👇 Thay bằng <img src="..." /> của bạn */}
        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
          <Image
            src={`/ogImage.jpg`}
            alt="Bui media"
            fill
            className="object-cover"
          />
        </div>

        {/* Nút Subscribe & Share */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          <button className="flex items-center gap-1.5 bg-black text-white rounded-full px-4 py-1.5 text-[13px] font-bold tracking-wide">
            {/* bell icon */}
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            SUBSCRIBE
          </button>
          <button
            onClick={handleCopyLink}
            className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center"
          >
            {/* share icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <circle cx="18" cy="5" r="3" stroke="#555" strokeWidth="2" />
              <circle cx="6" cy="12" r="3" stroke="#555" strokeWidth="2" />
              <circle cx="18" cy="19" r="3" stroke="#555" strokeWidth="2" />
              <path
                d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
                stroke="#555"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative flex justify-center h-[54px]">
        <div className="absolute -top-11 w-[88px] h-[88px] rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
          {/* 👇 Thay bằng <img src="..." className="w-full h-full object-cover" /> */}
          <div className="w-full h-full flex items-center justify-center ">
            <Image
              src={`/bui_logo.png`}
              alt="Bui media"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 pb-6 pt-2 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mt-1 tracking-tight">
          Bụi Media - Kiến tạo thương hiệu
        </h2>
        <p className="text-gray-500 text-lg mt-1">
          Bụi không chỉ làm media, chúng tôi kể câu chuyện thương hiệu của bạn
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const socialLinks = [
    {
      id: 'facebook',
      name: 'Facebook',
      description: 'Nhắn tin · Bình luận · Fanpage',
      href: 'https://www.facebook.com/profile.php?id=61569775863569',
      icon: Icons.Facebook,
      color: '#1877F2',
      bgColor: '#EBF3FF',
      hoverShadow: 'hover:shadow-blue-200',
      borderColor: '#1877F2',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      description: 'Xem video · Theo dõi',
      href: 'https://www.tiktok.com/@bui_media?_r=1&_t=ZS-95k5yJIqslw',
      icon: Icons.TikTok,
      color: '#000',
      bgColor: '#f9f9f9',
      hoverShadow: 'hover:shadow-gray-200',
      borderColor: '#e5e5e5',
    },
    {
      id: 'website',
      name: 'Website',
      description: 'Dịch vụ · Portfolio · Blog',
      href: 'https://buimedia.com/',
      icon: Icons.Globe,
      color: '#16A34A',
      bgColor: '#ECFDF5',
      hoverShadow: 'hover:shadow-green-200',
      borderColor: '#16A34A',
    },
    {
      id: 'zalo',
      name: 'Zalo',
      description: '📞 Gọi ngay · 0345 660 742',
      href: 'tel:0345660742',
      icon: Icons.Zalo,
      color: '#0068FF',
      bgColor: '#E6F0FF',
      hoverShadow: 'hover:shadow-blue-200',
      borderColor: '#0068FF',
      isActive: true,
    },
  ];
  return (
    <body
      className=" text-on-background min-h-screen flex flex-col antialiased"
      style={back}
    >
      <main className="relative flex- pt-24 pb-12 px-6">
        {/* Blur dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />
        <div className="max-w-2xl mx-auto space-y-section-margin">
          <section className="relative flex flex-col items-center justify-center text-center px-4 py-12 ">
            <ChannelCard />
          </section>
          <section className="space-y-3">
            {/* CTA Header */}
            <div className="flex items-center gap-3 py-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest whitespace-nowrap px-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full">
                  Liên hệ để nhận tư vấn ngay
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Social Links */}
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  className={`group relative flex items-center justify-between w-full rounded-2xl p-5 border-2 transition-all duration-300 overflow-hidden
              ${link.id === 'facebook' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400' : ''}
              ${link.id === 'tiktok' ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 hover:border-gray-400' : ''}
              ${link.id === 'website' ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300 hover:border-green-400' : ''}
              ${link.id === 'zalo' ? 'bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-300 hover:border-blue-500' : ''}
              hover:-translate-y-1 hover:shadow-2xl
            `}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110
                ${link.id === 'facebook' ? 'bg-blue-200 text-blue-600' : ''}
                ${link.id === 'tiktok' ? 'bg-gray-200 text-gray-700' : ''}
                ${link.id === 'website' ? 'bg-green-500 text-white' : ''}
                ${link.id === 'zalo' ? 'bg-blue-500 text-white' : ''}
              `}
                    >
                      <Icon />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900 transition-colors duration-300">
                        {link.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
                        {link.isActive && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600" />
                          </span>
                        )}
                        {link.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
              ${link.id === 'facebook' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700' : ''}
              ${link.id === 'tiktok' ? 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700' : ''}
              ${link.id === 'website' ? 'bg-green-100 text-green-600 group-hover:bg-green-200 group-hover:text-green-700' : ''}
              ${link.id === 'zalo' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700' : ''}
              group-hover:translate-x-2 group-hover:scale-125
            `}
                  >
                    <Arrows.ArrowRight />
                  </span>
                </a>
              );
            })}
          </section>
        </div>
        <div className="max-w-2xl mx-auto mt-8 space-y-section-margin">
          <Image
            src={`/ogImage.jpg`}
            alt="Bui media"
            height={800}
            width={800}
            className="object-cover"
          />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </body>
  );
}
