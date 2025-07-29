'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-green-600"> Land Investment</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover premium land opportunities across the United States. 
            From hunting land to investment properties, we have what you're looking for.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by location, acreage, or property type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Search Properties
              </button>
            </div>
          </form>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">47</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150,000+</div>
              <div className="text-gray-600">Acres Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 