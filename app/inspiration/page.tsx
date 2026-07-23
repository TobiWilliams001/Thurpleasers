'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Tasty Inspirations
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Creative Ways to Enjoy Thurspleasers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            However you enjoy your Thurspleasers, we&apos;d love to see it.
          </p>
        </div>
      </section>

      {/* Add Yours */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Yours</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
            Share your favourite way to enjoy Thurspleasers and we&apos;ll feature it with the
            community.
          </p>
          <a
            href="https://wa.me/2348073938558?text=I want to share a way I enjoy Thurspleasers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Share Yours</Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
