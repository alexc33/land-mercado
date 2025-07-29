import Image from 'next/image';
import { formatPrice, formatAcreage } from '@/lib/utils';

interface Property {
  id: string;
  title: string;
  price: number;
  acreage: number;
  city: string;
  state: string;
  image: string;
  status: 'FOR_SALE' | 'SOLD' | 'PENDING';
  type: 'HUNTING' | 'FARM' | 'RECREATIONAL' | 'INVESTMENT' | 'TIMBER';
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.status.replace('_', ' ')}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {property.city}, {property.state}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-green-600">
            {formatPrice(property.price)}
          </div>
          <div className="text-lg text-gray-700">
            {formatAcreage(property.acreage)}
          </div>
        </div>
        
        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
} 