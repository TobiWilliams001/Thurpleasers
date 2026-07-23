'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Play, Download, Salad, Flame, Cookie, Sandwich, Camera } from 'lucide-react'

export default function InspirationPage() {
  const recipes = [
    {
      id: 1,
      title: 'Thurspleasers Trail Mix',
      desc: 'Perfect snack mix with dried fruits and dark chocolate',
      category: 'snack',
      icon: Salad,
    },
    {
      id: 2,
      title: 'Spicy Peanut Sauce',
      desc: 'Blend our Spicy Thurspleasers for an African-inspired sauce',
      category: 'sauce',
      icon: Flame,
    },
    {
      id: 3,
      title: 'Energy Balls',
      desc: 'No-bake treats with Thurspleasers and nut butter',
      category: 'dessert',
      icon: Cookie,
    },
    {
      id: 4,
      title: 'Salad Topping',
      desc: 'Add crunch to your salad with Garlic & Herb Thurspleasers',
      category: 'salad',
      icon: Sandwich,
    },
  ]

  const videos = [
    { id: 1, title: 'How Thurspleasers Are Made', duration: '5:32' },
    { id: 2, title: 'Meet Our Founder', duration: '3:45' },
    { id: 3, title: 'Customer Reviews & Stories', duration: '4:15' },
    { id: 4, title: 'Cooking with Thurspleasers', duration: '6:20' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-accent to-primary text-accent-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspiration Gallery</h1>
          <p className="text-xl opacity-95 max-w-3xl text-balance">
            Discover creative ways to enjoy Thurspleasers. From quick snacks to gourmet recipes, 
            get inspired by our community and culinary experts.
          </p>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recipe Ideas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-muted/40 flex items-center justify-center">
                  <recipe.icon size={56} className="text-primary/70" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                    {recipe.category}
                  </span>
                  <h3 className="font-bold text-lg mt-3 mb-2">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{recipe.desc}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Recipe
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Watch & Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition group">
                <div className="aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden">
                  <Play size={64} className="text-primary-foreground opacity-50 group-hover:scale-110 transition" />
                  <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{video.title}</h3>
                  <Button className="w-full bg-primary hover:opacity-90">
                    <Play size={18} className="mr-2" />
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Community Creations</h2>
          <p className="text-muted-foreground mb-12">
            Check out what our community members have created with Thurspleasers
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gradient-to-br from-muted to-secondary/30 rounded-lg flex items-center justify-center border border-border hover:border-primary transition cursor-pointer"
              >
                <div className="text-center text-muted-foreground">
                  <Camera size={32} className="mx-auto" />
                  <p className="text-xs mt-2">Community Photo</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/community">
              <Button size="lg" variant="outline">
                See All Community Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Recipe Cards & Guides</h2>
          <p className="text-lg opacity-95 mb-8">
            Download our free recipe cards and cooking guides for inspiration at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <Download size={20} className="mr-2" />
              Download Recipe Cards
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Download size={20} className="mr-2" />
              Download Pairing Guide
            </Button>
          </div>
        </div>
      </section>

      {/* User Submissions */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Share Your Creation</h2>
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Have a great recipe or photo featuring Thurspleasers? We'd love to see it and feature 
              it in our community gallery!
            </p>
            <a
              href="https://wa.me/2348073938558?text=I want to submit a recipe or photo to the inspiration gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:opacity-90">
                Submit Your Creation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
