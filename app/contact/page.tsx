'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, MapPin } from 'lucide-react'
import { useState } from 'react'

const helpItems = [
  'Report a product issue',
  'Share a complaint',
  'Request a replacement',
  'Ask a question',
  'Suggest an improvement',
  'Compliment the product or service',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Support & Feedback:
Name: ${formData.name}
Contact: ${formData.contact}
Message: ${formData.message}`
    window.open(`https://wa.me/2348073938558?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Support &amp; Feedback
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">We&apos;re Here to Help</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a question, a complaint, or something kind to say? Reach out and we&apos;ll
            get back to you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="tel:+2348073938558"
              className="rounded-2xl border border-border p-6 text-center hover:border-primary/40 transition"
            >
              <Phone size={24} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">0807 393 8558</p>
            </a>
            <a
              href="https://wa.me/2348073938558"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border p-6 text-center hover:border-primary/40 transition"
            >
              <MessageSquare size={24} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Message us anytime</p>
            </a>
            <div className="rounded-2xl border border-border p-6 text-center">
              <MapPin size={24} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we can help with + Form */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">How We Can Help</h2>
              <ul className="space-y-3">
                {helpItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
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
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
