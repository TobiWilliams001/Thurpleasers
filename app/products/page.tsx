'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import Link from 'next/link'
import { Sparkles, ShoppingCart, Heart } from 'lucide-react'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white text-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Our Gifts to the World
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Every Pack Size</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            One irresistible recipe of premium coated peanuts, made for every moment — from
            a quick pocket pleasure to a celebration jar made for sharing.
          </p>
        </div>
      </section>

      {/* Count */}
      <section className="bg-muted/30 py-5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-semibold">{products.length} pack sizes</span>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition group"
              >
                {/* Product Image */}
                <div className="aspect-square bg-muted/40 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted-foreground group-hover:scale-105 transition">
                    <Sparkles size={56} className="mx-auto mb-2 text-primary/60" />
                    <p className="text-sm font-medium">{product.size}</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg flex-1">{product.name}</h3>
                    {product.available && (
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        Available
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-semibold">{product.size}</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                  </div>

                  <div className="flex gap-2">
                    <a href="https://wa.me/2348073938558?text=I want to order Thurspleasers" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-primary hover:opacity-90">
                        <ShoppingCart size={18} className="mr-2" />
                        Order
                      </Button>
                    </a>
                    <Button variant="outline" size="icon" aria-label="Add to favorites">
                      <Heart size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning a Corporate Event or Celebration?</h2>
          <p className="text-lg mb-8 opacity-95">
            We offer special bulk order pricing and custom packaging for events, corporate gifting, 
            and celebrations. Contact our team for a personalized quote.
          </p>
          <Link href="/corporate">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
