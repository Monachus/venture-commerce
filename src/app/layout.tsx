import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3D Filament Store',
  description: 'High-quality 3D printing filaments for all your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Venture Commerce</h1>
            <h2 className="text-sm text-gray-400">Your friendly plastic filament store</h2>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-primary text-primary-foreground py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Venture Commerce</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
