'use client';

import Image from 'next/image';
import React, { useState, useCallback } from 'react';

export const Nav = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={65}
              height={65}
              className="w-14 h-14 sm:w-[65px] sm:h-[65px] object-contain"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              aria-label="Sao chép liên kết"
              className={`
                relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2
                rounded-lg text-sm font-medium
                transition-all duration-200 ease-out
                focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2
                active:scale-95
                ${
                  copied
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : 'bg-violet-50 text-violet-600 border border-violet-100 hover:bg-violet-100 hover:border-violet-200'
                }
              `}
            >
              {/* Icon */}
              <span className="flex-shrink-0 w-4 h-4">
                {copied ? (
                  /* Checkmark icon */
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8l3.5 3.5L13 4" />
                  </svg>
                ) : (
                  /* Link/share icon */
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.5 9.5a3.536 3.536 0 005 0l2-2a3.536 3.536 0 00-5-5L7 4" />
                    <path d="M9.5 6.5a3.536 3.536 0 00-5 0l-2 2a3.536 3.536 0 005 5L9 12" />
                  </svg>
                )}
              </span>

              {/* Label — hidden on very small screens */}
              <span className="hidden xs:inline sm:inline whitespace-nowrap">
                {copied ? 'Đã sao chép!' : 'Sao chép liên kết'}
              </span>

              {/* Tooltip for icon-only state on tiny screens */}
              <span className="xs:hidden sm:hidden sr-only">
                {copied ? 'Đã sao chép!' : 'Sao chép liên kết'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
