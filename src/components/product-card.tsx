import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/product/${product.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

