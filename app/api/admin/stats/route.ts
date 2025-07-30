import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    // Fetch all statistics in parallel
    const [
      totalProperties,
      activeListings,
      totalUsers,
      totalInquiries,
      propertiesSold,
      totalSubscribers
    ] = await Promise.all([
      prisma.property.count(),
      prisma.property.count({
        where: {
          status: 'FOR_SALE'
        }
      }),
      prisma.user.count(),
      prisma.inquiry.count(),
      prisma.property.count({
        where: {
          status: 'SOLD'
        }
      }),
      prisma.vipSubscriber.count()
    ]);

    const stats = {
      totalProperties,
      activeListings,
      totalUsers,
      totalInquiries,
      propertiesSold,
      totalSubscribers
    };

    return NextResponse.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
} 