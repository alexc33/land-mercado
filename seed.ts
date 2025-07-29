import { PrismaClient, PropertyType, PropertyStatus } from './app/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create sample properties
  const properties = [
    {
      title: 'Premium Hunting Land - Texas',
      description: 'Beautiful 200-acre hunting property with mature timber, wildlife, and excellent access.',
      price: 450000,
      acreage: 200,
      address: '1234 County Road 123',
      city: 'Tyler',
      state: 'TX',
      zipCode: '75701',
      latitude: 32.3513,
      longitude: -95.3011,
      status: PropertyStatus.FOR_SALE,
      type: PropertyType.HUNTING,
      features: 'Mature timber, Wildlife, Hunting blinds, ATV trails',
      images: [
        {
          url: '/placeholder-land.jpg',
          alt: 'Hunting land overview',
          isPrimary: true,
        },
        {
          url: '/placeholder-land.jpg',
          alt: 'Timber stand',
          isPrimary: false,
        },
      ],
    },
    {
      title: 'Investment Farm Land - Iowa',
      description: 'Prime agricultural land perfect for farming or investment purposes.',
      price: 1200000,
      acreage: 320,
      address: '5678 Farm Road 456',
      city: 'Des Moines',
      state: 'IA',
      zipCode: '50301',
      latitude: 41.5868,
      longitude: -93.6250,
      status: PropertyStatus.FOR_SALE,
      type: PropertyType.FARM,
      features: 'Prime soil, Irrigation, Farm buildings, Road access',
      images: [
        {
          url: '/placeholder-land.jpg',
          alt: 'Farm land overview',
          isPrimary: true,
        },
      ],
    },
    {
      title: 'Recreational Lake Property - Minnesota',
      description: 'Stunning lakefront property with fishing, boating, and recreational opportunities.',
      price: 850000,
      acreage: 150,
      address: '9012 Lake Shore Drive',
      city: 'Minneapolis',
      state: 'MN',
      zipCode: '55401',
      latitude: 44.9778,
      longitude: -93.2650,
      status: PropertyStatus.FOR_SALE,
      type: PropertyType.RECREATIONAL,
      features: 'Lake frontage, Boat dock, Fishing, Swimming',
      images: [
        {
          url: '/placeholder-land.jpg',
          alt: 'Lake property',
          isPrimary: true,
        },
      ],
    },
    {
      title: 'Timber Investment - Oregon',
      description: 'Mature timber stand with excellent growth potential and logging access.',
      price: 650000,
      acreage: 400,
      address: '3456 Forest Road 789',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      latitude: 45.5152,
      longitude: -122.6784,
      status: PropertyStatus.FOR_SALE,
      type: PropertyType.TIMBER,
      features: 'Mature timber, Logging roads, Wildlife, Investment potential',
      images: [
        {
          url: '/placeholder-land.jpg',
          alt: 'Timber stand',
          isPrimary: true,
        },
      ],
    },
    {
      title: 'Residential Development Land - Florida',
      description: 'Prime residential development opportunity in growing area.',
      price: 2200000,
      acreage: 50,
      address: '7890 Development Avenue',
      city: 'Orlando',
      state: 'FL',
      zipCode: '32801',
      latitude: 28.5383,
      longitude: -81.3792,
      status: PropertyStatus.FOR_SALE,
      type: PropertyType.RESIDENTIAL,
      features: 'Zoned residential, Utilities available, High traffic area',
      images: [
        {
          url: '/placeholder-land.jpg',
          alt: 'Development land',
          isPrimary: true,
        },
      ],
    },
  ];

  for (const propertyData of properties) {
    const { images, ...propertyInfo } = propertyData;
    
    const property = await prisma.property.create({
      data: propertyInfo,
    });

    // Create images for the property
    for (const imageData of images) {
      await prisma.propertyImage.create({
        data: {
          ...imageData,
          propertyId: property.id,
        },
      });
    }

    console.log(`✅ Created property: ${property.title}`);
  }

  // Create sample VIP subscribers
  const subscribers = [
    { email: 'john@example.com' },
    { email: 'sarah@example.com' },
    { email: 'mike@example.com' },
  ];

  for (const subscriber of subscribers) {
    await prisma.vipSubscriber.create({
      data: subscriber,
    });
    console.log(`✅ Created VIP subscriber: ${subscriber.email}`);
  }

  // Create sample inquiries
  const inquiries = [
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      message: 'I\'m interested in the hunting property in Texas. Can you provide more details?',
      status: 'NEW' as const,
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
      message: 'Looking for investment opportunities in farm land. What\'s available?',
      status: 'CONTACTED' as const,
    },
  ];

  for (const inquiry of inquiries) {
    await prisma.inquiry.create({
      data: inquiry,
    });
    console.log(`✅ Created inquiry from: ${inquiry.name}`);
  }

  console.log('\n🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 