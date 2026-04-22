import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-main text-gray-300 py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center justify-center space-x-2">
          <Image src={`/logo.svg`} alt="logo" width={50} height={50} />

          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-white font-semibold">Bụi Media</h3>
            <p className="text-sm text-gray-400">Agency</p>
          </div>
        </div>
        {/* Center */}
        <div className="text-sm text-gray-400 text-center mb-4 md:mb-0">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://vietstrix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vietstrix
          </a>
          . All rights reserved.
        </div>

        {/* Right side */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-white" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-white" aria-label="Portfolio">
            <i className="fas fa-external-link-alt"></i>
          </a>
          <a
            href="mailto:buimarketing.agency@gmail.com"
            className="hover:text-white"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
