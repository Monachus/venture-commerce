import { products } from '@/lib/products'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold">Material</h3>
            <p>{product.material}</p>
          </div>
          <div>
            <h3 className="font-semibold">Diameter</h3>
            <p>{product.diameter}</p>
          </div>
          <div>
            <h3 className="font-semibold">Weight</h3>
            <p>{product.weight}</p>
          </div>
          <div>
            <h3 className="font-semibold">Color</h3>
            <p>{product.color}</p>
          </div>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  )
}

