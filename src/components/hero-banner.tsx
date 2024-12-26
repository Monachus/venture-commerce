import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <div className="relative bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Premium 3D Printing Filaments
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Discover our wide range of high-quality filaments for all your 3D printing needs.
            </p>
            <div className="mt-8">
              <Button size="lg" disabled>Coming Soon</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src="/plastic-filament.jpg"
                  alt="3D printed object"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

