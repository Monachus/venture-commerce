import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ScrollingBanner } from '@/components/scrolling-banner'
import { HeroBanner } from '@/components/hero-banner'

export default function Home() {
  return (
    <div>
      <ScrollingBanner />
      <HeroBanner />
      <h2 className="text-3xl font-bold mb-6">Our 3D Printing Filaments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}