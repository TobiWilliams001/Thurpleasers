'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Gift, Users, Zap, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    eventType: 'corporate-event',
    guestCount: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    const whatsappMessage = `Corporate Order Inquiry:
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Guest Count: ${formData.guestCount}
Budget: ${formData.budget}
Message: ${formData.message}`

    const encoded = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/2348073938558?text=${encoded}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Solutions</h1>
          <p className="text-xl opacity-95 max-w-3xl text-balance">
            Perfect for corporate events, team celebrations, client gifts, and employee recognition. 
            Let Thurspleasers elevate your next corporate gathering.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Corporate Partners Choose Thurspleasers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Gift, title: 'Custom Packaging', desc: 'Branded boxes and personalized touches for your event' },
              { icon: Users, title: 'Bulk Pricing', desc: 'Special rates for large orders and recurring partnerships' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times for urgent corporate needs' },
              { icon: CheckCircle, title: 'Dedicated Support', desc: 'Personal account manager for your events' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center">
                <feature.icon size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Corporate Events',
                items: ['Product launches', 'Annual conferences', 'Team building sessions', 'Office celebrations'],
              },
              {
                title: 'Client Gifting',
                items: ['Year-end gifts', 'Client appreciation', 'New business celebrations', 'VIP packages'],
              },
              {
                title: 'Employee Recognition',
                items: ['Milestone celebrations', 'Performance bonuses', 'Wellness initiatives', 'Seasonal gifts'],
              },
            ].map((useCase, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Bulk Order Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quantity: '50-100 Units', price: '₦2,000/unit', desc: 'Small team events' },
              { quantity: '100-500 Units', price: '₦1,800/unit', desc: 'Mid-size events' },
              { quantity: '500+ Units', price: 'Custom Quote', desc: 'Large events & partnerships' },
            ].map((tier, idx) => (
              <div key={idx} className="bg-card border-2 border-border rounded-xl p-6 text-center hover:border-primary transition">
                <p className="text-sm text-muted-foreground mb-2">Quantity</p>
                <p className="text-2xl font-bold mb-4">{tier.quantity}</p>
                <p className="text-3xl font-bold text-primary mb-4">{tier.price}</p>
                <p className="text-sm text-muted-foreground">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Pricing excludes custom packaging and shipping. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Request a Corporate Quote</h2>
          <div className="bg-background border border-border rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="corporate-event">Corporate Event</option>
                    <option value="client-gift">Client Gifting</option>
                    <option value="employee-recognition">Employee Recognition</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Guest Count</label>
                  <input
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    placeholder="e.g., 150"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="100k-500k">₦100K - ₦500K</option>
                  <option value="500k-1m">₦500K - ₦1M</option>
                  <option value="1m-5m">₦1M - ₦5M</option>
                  <option value="5m+">₦5M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event, timeline, and any special requests..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:opacity-90">
                Send Quote Request <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
