import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import VipSignup from '@/components/sections/VipSignup';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* 🎨 MODERN LANDMERCADO HOMEPAGE - NEW DESIGN */}
      <Hero />
      <FeaturedProperties />
      <VipSignup />
    </div>
  );
}
