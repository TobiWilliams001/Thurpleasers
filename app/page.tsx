'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Leaf, Users, Gift, Sparkles, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import { testimonials, products } from '@/lib/data'

export default function Home() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setSelectedTestimonial((prev) => (prev + 1) % testimonials.length),
      5000
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-6 text-sm font-medium tracking-wide text-primary uppercase">
                Premium coated peanuts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Taste the joy in every crunch
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-md text-balance">
                Thurspleasers brings you authentic, carefully crafted peanut snacks
                that celebrate the flavors of Nigeria and the joy of sharing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto">
                    Shop Now <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/rewards">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join Rewards
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl border border-border bg-muted/40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Sparkles size={56} className="mx-auto mb-3 text-primary/70" />
                <p className="text-sm">Premium Peanuts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Thurspleasers</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A celebration of flavor, quality, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Premium Quality', desc: 'Hand-selected peanuts, roasted to perfection.' },
              { icon: Leaf, title: 'Natural Ingredients', desc: 'No artificial preservatives or excess salt.' },
              { icon: Users, title: 'Community Driven', desc: 'Built on authentic connections and shared joy.' },
              { icon: Gift, title: 'Loyalty Rewards', desc: 'Earn points with every purchase and referral.' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature Flavors</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Each flavor tells a story of passion and tradition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-border bg-white overflow-hidden hover:border-primary/40 transition"
              >
                <div className="aspect-square bg-muted/40 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Sparkles size={40} className="mx-auto mb-2 text-primary/60" />
                    <p className="text-sm">{product.flavor}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Community Says</h2>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 md:p-12">
            {testimonials[selectedTestimonial] && (
              <div className="animate-fade-in text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array(testimonials[selectedTestimonial].rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="text-accent fill-accent" />
                    ))}
                </div>
                <p className="text-xl mb-8 text-balance leading-relaxed">
                  "{testimonials[selectedTestimonial].content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonials[selectedTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[selectedTestimonial].title}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  idx === selectedTestimonial ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Thurspleasers Community</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
            Earn rewards with every purchase, unlock exclusive flavors, and be part
            of something special.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/rewards">
              <Button size="lg" className="w-full sm:w-auto">
                Start Earning Points
              </Button>
            </Link>
            <a href="https://wa.me/2348073938558?text=I want to order Thurspleasers" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
