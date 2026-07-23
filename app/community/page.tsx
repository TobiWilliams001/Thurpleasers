'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { communityPosts } from '@/lib/data'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Wall of Love
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What Our Customers Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real words from the people who make Thurspleasers part of their moments.
          </p>
        </div>
      </section>

      {/* Wall of Love */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-6">
            {communityPosts.map((post) => (
              <div key={post.id} className="rounded-2xl border border-border p-8">
                <p className="text-lg leading-relaxed mb-6">&ldquo;{post.content}&rdquo;</p>
                <p className="font-semibold text-primary">{post.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand quote */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-balance">
            &ldquo;You never really finish a pack of Thurspleasers. You pass on the
            craving.&rdquo;
          </p>
          <p className="mt-4 text-muted-foreground">From hand to hand, and from heart to heart.</p>
        </div>
      </section>

      {/* Join the Family */}
      <section className="border-t border-border bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Family</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
            Follow us, stay connected, and share your own Thurspleasers moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/2348073938558" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                Connect on WhatsApp
              </Button>
            </a>
            <Link href="/rewards">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Join Rewards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
