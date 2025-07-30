'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            LandMercado
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Properties
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contact
            </Link>
            {session ? (
              <>
                {session.user.role === 'ADMIN' && (
                  <Link href="/admin" className="text-gray-700 hover:text-green-600 transition-colors font-semibold">
                    Admin
                  </Link>
                )}
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, {session.user.name || session.user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link href="/auth/signin" className="btn-primary">
                Login
              </Link>
            )}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <span className="font-semibold text-green-600">Call us:</span> (555) 123-4567
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <Link href="/properties" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contact
              </Link>
              {session ? (
                <>
                  {session.user.role === 'ADMIN' && (
                    <Link href="/admin" className="text-gray-700 hover:text-green-600 transition-colors font-semibold">
                      Admin
                    </Link>
                  )}
                  <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    Welcome, {session.user.name || session.user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/auth/signin" className="btn-primary text-center">
                  Login
                </Link>
              )}
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                <span className="font-semibold text-green-600">Call us:</span> (555) 123-4567
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 