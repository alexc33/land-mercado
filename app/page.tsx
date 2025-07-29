import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import VipSignup from '@/components/sections/VipSignup';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <VipSignup />
    </main>
  );
}
