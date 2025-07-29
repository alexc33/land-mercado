'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600">
            LandMercado
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-gray-700 hover:text-green-600 transition-colors">
              Properties
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600 transition-colors">
              Login
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Call us:</span> (555) 123-4567
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/properties" className="text-gray-700 hover:text-green-600 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-green-600 transition-colors">
                Login
              </Link>
              <div className="text-sm text-gray-600 pt-2">
                <span className="font-semibold">Call us:</span> (555) 123-4567
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 