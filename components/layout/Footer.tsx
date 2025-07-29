import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">LandMercado</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for premium land investments across the United States. 
              From hunting land to investment properties, we help you find the perfect opportunity.
            </p>
            <div className="text-gray-300">
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> info@landmercado.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-gray-300 hover:text-green-400 transition-colors">Properties</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li><Link href="/properties?type=hunting" className="text-gray-300 hover:text-green-400 transition-colors">Hunting Land</Link></li>
              <li><Link href="/properties?type=farm" className="text-gray-300 hover:text-green-400 transition-colors">Farm Land</Link></li>
              <li><Link href="/properties?type=recreational" className="text-gray-300 hover:text-green-400 transition-colors">Recreational</Link></li>
              <li><Link href="/properties?type=investment" className="text-gray-300 hover:text-green-400 transition-colors">Investment</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 LandMercado. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 