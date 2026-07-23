'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const perfectFor = [
  'Hotels',
  'Airlines',
  'Hospitals',
  'Schools (day & boarding)',
  'Restaurants',
  'Lounges',
  'Conferences',
  'Workshops',
  'Weddings',
  'Birthdays',
  'Naming ceremonies',
  'Burials',
  'Anniversaries',
  'Corporate events',
  'Retreats',
  'Product launches',
  'Meetings',
  'Religious gatherings',
]

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    eventType: '',
    guestCount: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Event / Souvenir Enquiry:
Name: ${formData.name}
Contact: ${formData.contact}
Event: ${formData.eventType}
Guests: ${formData.guestCount}
Details: ${formData.message}`
    window.open(`https://wa.me/2348073938558?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Event &amp; Souvenir Orders
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Make Your Moments Special
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Make your events truly memorable with thoughtfully packaged Thurspleasers Coated
            Peanuts — delightful, unforgettable mementos for your guests, clients, and
            friends. Let&apos;s help you create lasting impressions that linger long after
            the moment is gone.
          </p>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perfect For</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {perfectFor.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Order via WhatsApp */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Order Now</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Message us on WhatsApp and we&apos;ll help you plan your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.link/uc0jvz" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <MessageSquare size={18} className="mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href="https://wa.link/5ttuef" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Alternative WhatsApp
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or call{' '}
            <a href="tel:+2348073938558" className="text-primary font-medium hover:underline">
              0807 393 8558
            </a>
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="border-t border-border bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Send an Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone or Email</label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="How we can reach you"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Event Type</label>
                <input
                  type="text"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  placeholder="e.g. Wedding, Conference"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Guest Count</label>
                <input
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  placeholder="e.g. 150"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Details</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your event and what you need"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send via WhatsApp <ArrowRight className="ml-2" size={18} />
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
