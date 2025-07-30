import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, formatAcreage } from '@/lib/utils';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    acreage: number;
    city: string;
    state: string;
    status: string;
    type: string;
    description?: string;
    images?: Array<{
      id: string;
      url: string;
      alt?: string;
      isPrimary: boolean;
    }>;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const primaryImage = property.images?.find(img => img.isPrimary) || property.images?.[0];
  const imageUrl = primaryImage?.url || '/placeholder-land.jpg';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'FOR_SALE':
        return 'bg-green-100 text-green-800';
      case 'SOLD':
        return 'bg-red-100 text-red-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'HUNTING':
        return 'bg-orange-100 text-orange-800';
      case 'FARM':
        return 'bg-green-100 text-green-800';
      case 'RECREATIONAL':
        return 'bg-blue-100 text-blue-800';
      case 'INVESTMENT':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
            {property.status.replace('_', ' ')}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <div className="mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(property.type)}`}>
            {property.type.replace('_', ' ')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-gray-600 mb-3 flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.city}, {property.state}
        </p>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium">{formatAcreage(property.acreage)}</span>
          </div>
          <div className="text-2xl font-bold text-green-600">
            {formatPrice(property.price)}
          </div>
        </div>

        {/* Description */}
        {property.description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {property.description}
          </p>
        )}

        {/* CTA Button */}
        <Link 
          href={`/properties/${property.id}`}
          className="btn-primary w-full text-center py-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
} 