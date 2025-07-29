#!/bin/bash

echo "🚀 LandMercado Database Setup"
echo "=============================="
echo ""

echo "Please enter your database URL:"
read -p "DATABASE_URL: " db_url

if [ -z "$db_url" ]; then
    echo "❌ No database URL provided. Exiting."
    exit 1
fi

# Update .env.local file
echo "Updating .env.local file..."
sed -i '' "s|DATABASE_URL=.*|DATABASE_URL=\"$db_url\"|" .env.local

echo "✅ Database URL updated!"
echo ""
echo "Now running database setup..."
echo ""

# Run Prisma commands
echo "📊 Pushing database schema..."
npx prisma db push

echo "🔧 Generating Prisma client..."
npx prisma generate

echo ""
echo "🎉 Database setup complete!"
echo "You can now run: npm run dev" 