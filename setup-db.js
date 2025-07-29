const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up LandMercado Database...\n');

// For now, let's create a local SQLite database for development
// This will work immediately without external setup

const sqliteUrl = 'file:./dev.db';

console.log('📊 Creating local SQLite database for development...');

// Update the schema to use SQLite for development
const schemaContent = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  output   = "../app/generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

enum Role {
  USER
  ADMIN
}

enum PropertyStatus {
  FOR_SALE
  SOLD
  PENDING
  OFF_MARKET
}

enum PropertyType {
  HUNTING
  FARM
  RECREATIONAL
  INVESTMENT
  TIMBER
  RESIDENTIAL
  COMMERCIAL
}

enum InquiryStatus {
  NEW
  CONTACTED
  INTERESTED
  NOT_INTERESTED
  CLOSED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  favorites    Favorite[]
  inquiries    Inquiry[]
  payments     Payment[]
  vipSubscribers VipSubscriber?

  @@map("users")
}

model Property {
  id          String        @id @default(cuid())
  title       String
  description String?
  price       Float
  acreage     Float
  address     String?
  city        String
  state       String
  zipCode     String?
  latitude    Float?
  longitude   Float?
  status      PropertyStatus @default(FOR_SALE)
  type        PropertyType
  features    String?
  images      PropertyImage[]
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  // Relations
  favorites   Favorite[]
  inquiries   Inquiry[]
  payments    Payment[]

  @@map("properties")
}

model PropertyImage {
  id         String   @id @default(cuid())
  url        String
  alt        String?
  isPrimary  Boolean  @default(false)
  propertyId String
  createdAt  DateTime @default(now())

  // Relations
  property Property @relation(fields: [propertyId], references: [id], onDelete: Cascade)

  @@map("property_images")
}

model Favorite {
  id         String   @id @default(cuid())
  userId     String
  propertyId String
  createdAt  DateTime @default(now())

  // Relations
  user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  property Property @relation(fields: [propertyId], references: [id], onDelete: Cascade)

  @@unique([userId, propertyId])
  @@map("favorites")
}

model Inquiry {
  id         String        @id @default(cuid())
  name       String
  email      String
  phone      String?
  message    String
  status     InquiryStatus @default(NEW)
  propertyId String?
  userId     String?
  createdAt  DateTime      @default(now())
  updatedAt  DateTime      @updatedAt

  // Relations
  property Property? @relation(fields: [propertyId], references: [id], onDelete: SetNull)
  user     User?     @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@map("inquiries")
}

model VipSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  userId    String?  @unique
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  user User? @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@map("vip_subscribers")
}

model Payment {
  id            String        @id @default(cuid())
  amount        Float
  currency      String        @default("USD")
  status        PaymentStatus @default(PENDING)
  checkoutId    String?       @unique
  propertyId    String?
  userId        String?
  description   String?
  metadata      String? // JSON as string for SQLite
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  // Relations
  property Property? @relation(fields: [propertyId], references: [id], onDelete: SetNull)
  user     User?     @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@map("payments")
}`;

// Write the updated schema
fs.writeFileSync(path.join(__dirname, 'prisma', 'schema.prisma'), schemaContent);

console.log('✅ Updated Prisma schema for SQLite');

// Update .env.local with SQLite URL
const envContent = `DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
CHECKOUT_SECRET_KEY="sk_sbox_your-checkout-secret-key"
NEXT_PUBLIC_CHECKOUT_PUBLIC_KEY="pk_sbox_your-checkout-public-key"
CHECKOUT_WEBHOOK_SECRET="your-webhook-secret"`;

fs.writeFileSync(path.join(__dirname, '.env.local'), envContent);

console.log('✅ Updated environment variables');

// Run Prisma commands
try {
  console.log('📊 Pushing database schema...');
  execSync('npx prisma db push', { stdio: 'inherit' });
  
  console.log('🔧 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  console.log('\n🎉 Database setup complete!');
  console.log('📁 Database file: dev.db');
  console.log('🚀 You can now run: npm run dev');
  
} catch (error) {
  console.error('❌ Error setting up database:', error.message);
  process.exit(1);
} 