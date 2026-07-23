'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-6 text-sm font-medium tracking-wide text-primary uppercase">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Welcome to the Thurspleasers Family
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We&apos;re delighted you&apos;re here. Thank you for making Thurspleasers part of
            your moments, and your taste buds part of our story.
          </p>
        </div>
      </section>

      {/* A Note From The Founder */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl font-bold mb-8">A Note From The Founder</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m passionate about peanut confection due to the experience I had in
              Abuja, Nigeria, West Africa, back then, and I can say the irresistible
              Thurspleasers Coated Peanuts — a flagship product of Thurs Business Concepts —
              was borne out of love.
            </p>
            <p>
              When I first tasted locally-made coated peanuts many years ago, I knew I had
              experienced something special. My dream was simple: to share that same joy
              with as many people as possible.
            </p>
            <p>
              Today, every pack of Thurspleasers is made with care, quality, and the hope of
              creating moments worth remembering. Thank you for being part of our journey.
            </p>
            <p>
              What started with one unforgettable taste has become a growing community of
              people who believe that life&apos;s simplest moments can often be the most
              meaningful. We are honoured to share those moments with you.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-semibold text-foreground">Mrs Akanmu, Ayoola A. (Lady AY)</p>
            <p className="text-sm text-muted-foreground">Founder, Thurs Business Concepts</p>
          </div>
        </div>
      </section>

      {/* The Thurspleasers Story */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl font-bold mb-8">The Thurspleasers Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl font-semibold text-foreground">One taste changed everything.</p>
            <p>
              Years ago in Abuja, someone offered me a handful of locally-made coated
              peanuts. It seemed like a simple gesture, but the experience stayed with me
              long after the last crunch. In that moment, I made a promise to myself: if
              something this simple could bring this much joy, more people deserved to
              experience it.
            </p>
            <p>That promise became Thurspleasers.</p>
            <p>
              There are peanuts — and then there&apos;s Thurspleasers. What began as a coated
              peanut soon became something bigger. Before it became a brand, Thurspleasers
              was a feeling: the laughter shared during family road trips, the conversations
              between friends, the comfort of a well-deserved office break, and the small
              joys that become lasting memories.
            </p>
            <p>
              People didn&apos;t just eat it — they remembered it. But as the brand grew,
              something bigger emerged. It stopped being just about peanuts. It became about
              connection.
            </p>
            <p>
              That&apos;s why we don&apos;t see ourselves as just another snack brand. We see
              ourselves as creators of moments worth sharing. We don&apos;t just make coated
              peanuts. We make memories.
            </p>
            <p>
              Every pack is crafted with love, care, quality, and the belief that wellness
              and enjoyment should exist together. As we continue to grow, we are building
              something bigger than a snack brand — a proudly Nigerian experience that goes
              beyond taste. One that brings people together, creates opportunities, and earns
              its place not just on shelves, but in hearts around the world.
            </p>
            <p>
              And through our community initiatives, every pack helps us extend that impact
              beyond our customers and into the lives of those who need it most. Because the
              best things in life are never truly enjoyed alone. They are shared.
            </p>
            <p>
              Thurspleasers isn&apos;t just what you eat — it&apos;s what stays with you.
            </p>
          </div>

          <blockquote className="mt-10 rounded-2xl border border-border bg-white p-8 text-center">
            <p className="text-xl font-semibold text-foreground text-balance">
              &ldquo;You never really finish a pack of Thurspleasers. You pass on the
              craving.&rdquo;
            </p>
            <p className="mt-4 text-muted-foreground">
              From childhood to adulthood, from laughter to legacy, from hand to hand, and
              from heart to heart.
            </p>
          </blockquote>

          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            For ethical and sustainable practices, produced in a clean and hygienic
            environment, and with a commitment to quality you can trust, Thurspleasers
            Coated Peanuts remains a choice made with confidence.
          </p>
          <p className="mt-6 text-xl font-semibold text-foreground">
            Thurspleasers Cares — for the moments your heart will always remember.
          </p>
        </div>
      </section>

      {/* Social Impact */}
      <section className="border-t border-border bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Social Impact
          </span>
          <h2 className="text-3xl font-bold mb-6">Thurspleasers Cares</h2>
          <blockquote className="text-lg text-muted-foreground italic mb-8">
            &ldquo;There is no better compass than compassion.&rdquo; — Amanda Gorman
          </blockquote>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Beyond business, our true purpose lies in giving back to the community. We
              partner with our nascent foundation, CFI, to make a difference by aligning with
              the UN Sustainable Development Goals 1 &amp; 2 — ending poverty and hunger.
            </p>
            <p>
              Our mission is to serve the most vulnerable, underserved, and impoverished
              members of our community, extending compassion and support to those who need it
              most. We do this by dedicating a percentage of our profits to helping the
              poorest of the poor in our society.
            </p>
            <p>
              For every pack of Thurspleasers you buy, you&apos;ll be helping to lift one
              soul at a time out of poverty and hunger. With your support, we can do more —
              and you can be part of our success story.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'https://www.facebook.com/share/p/1F2AQE8Xbo/',
              'https://www.facebook.com/share/p/1A4tkGRc9a/',
              'https://www.facebook.com/share/p/1DHdZJ5Foi/',
            ].map((url, i) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                See our impact #{i + 1}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Thurspleasers Family</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
            Be part of our story and share the moments that stay with you.
          </p>
          <Link href="/rewards">
            <Button size="lg">Join the Family</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
