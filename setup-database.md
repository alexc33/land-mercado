# Database Setup Guide

## Option 1: Neon (Recommended - Free)

1. Go to https://neon.tech
2. Sign up for free account
3. Create new project: `land-mercado`
4. Copy the connection string
5. Replace the DATABASE_URL in your `.env.local` file

## Option 2: Vercel Postgres

1. Go to your Vercel dashboard
2. Select your project: `land-mercado`
3. Go to "Storage" tab
4. Create new Postgres database
5. Copy the DATABASE_URL

## After getting the database URL:

1. Update your `.env.local` file with the real DATABASE_URL
2. Run: `npx prisma db push`
3. Run: `npx prisma generate`

## Current .env.local structure:
```env
DATABASE_URL="your-real-database-url-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
CHECKOUT_SECRET_KEY="sk_sbox_your-checkout-secret-key"
NEXT_PUBLIC_CHECKOUT_PUBLIC_KEY="pk_sbox_your-checkout-public-key"
CHECKOUT_WEBHOOK_SECRET="your-webhook-secret"
``` 