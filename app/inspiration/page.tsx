'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Salad, Flame, Cookie, Sandwich } from 'lucide-react'

const recipes = [
  {
    id: 1,
    title: 'Thurspleasers Trail Mix',
    desc: 'Toss a handful with dried fruit and dark chocolate for the perfect snack mix.',
    category: 'Snack',
    icon: Salad,
  },
  {
    id: 2,
    title: 'Spicy Peanut Sauce',
    desc: 'Blend the pack into a rich, African-inspired sauce for grilled meats and noodles.',
    category: 'Sauce',
    icon: Flame,
  },
  {
    id: 3,
    title: 'Energy Balls',
    desc: 'Fold into no-bake treats with nut butter and honey for an on-the-go boost.',
    category: 'Dessert',
    icon: Cookie,
  },
  {
    id: 4,
    title: 'Salad Topping',
    desc: 'Add crunch and flavour to any salad or grain bowl.',
    category: 'Salad',
    icon: Sandwich,
  },
]

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
            A few simple ideas to make the most of every pack — then add your own.
          </p>
        </div>
      </section>

      {/* Recipe Ideas */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recipe Ideas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="rounded-2xl border border-border p-6">
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <recipe.icon size={22} className="text-primary" />
                </div>
                <span className="text-xs font-medium tracking-wide uppercase text-primary">
                  {recipe.category}
                </span>
                <h3 className="font-semibold text-lg mt-2 mb-2">{recipe.title}</h3>
                <p className="text-sm text-muted-foreground">{recipe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Creation */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Yours</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
            Have a great recipe or photo featuring Thurspleasers? We&apos;d love to see it and
            share it with the community.
          </p>
          <a
            href="https://wa.me/2348073938558?text=I want to share a recipe or photo featuring Thurspleasers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Share Your Creation</Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
