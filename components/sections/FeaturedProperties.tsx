import PropertyCard from '@/components/property/PropertyCard';

const mockProperties = [
  {
    id: '1',
    title: 'Beautiful Hunting Land',
    price: 125000,
    acreage: 80,
    city: 'Springfield',
    state: 'Missouri',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'HUNTING' as const,
  },
  {
    id: '2',
    title: 'Investment Property',
    price: 250000,
    acreage: 120,
    city: 'Austin',
    state: 'Texas',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'INVESTMENT' as const,
  },
  {
    id: '3',
    title: 'Recreational Land',
    price: 89000,
    acreage: 45,
    city: 'Denver',
    state: 'Colorado',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'RECREATIONAL' as const,
  },
  {
    id: '4',
    title: 'Farm Land',
    price: 350000,
    acreage: 200,
    city: 'Des Moines',
    state: 'Iowa',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'FARM' as const,
  },
  {
    id: '5',
    title: 'Mountain View Property',
    price: 180000,
    acreage: 65,
    city: 'Salt Lake City',
    state: 'Utah',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'RECREATIONAL' as const,
  },
  {
    id: '6',
    title: 'Timber Investment',
    price: 420000,
    acreage: 300,
    city: 'Portland',
    state: 'Oregon',
    image: '/placeholder-land.jpg',
    status: 'FOR_SALE' as const,
    type: 'TIMBER' as const,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium land opportunities 
            across the United States.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
} 