import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        images: {
          orderBy: {
            isPrimary: 'desc'
          }
        }
      }
    });

    return NextResponse.json({
      success: true,
      properties: properties.map(property => ({
        id: property.id,
        title: property.title,
        price: property.price,
        acreage: property.acreage,
        city: property.city,
        state: property.state,
        status: property.status,
        type: property.type,
        createdAt: property.createdAt.toISOString(),
        description: property.description,
        address: property.address,
        images: property.images
      }))
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
} 