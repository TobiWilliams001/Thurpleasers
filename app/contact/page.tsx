'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageSquare, Zap } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general-inquiry',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Support Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Have a question? We&apos;d love to hear from you. Reach out through any of our channels 
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: 'Phone',
                value: '0807 393 8558',
                action: 'tel:+2348073938558',
                label: 'Call us',
              },
              {
                icon: Mail,
                title: 'Email',
                value: 'hello@thurspleasers.com',
                action: 'mailto:hello@thurspleasers.com',
                label: 'Email us',
              },
              {
                icon: MessageSquare,
                title: 'WhatsApp',
                value: 'Message us anytime',
                action:
                  'https://wa.me/2348073938558?text=Hi%20Thurspleasers!%20I%20have%20a%20question...',
                label: 'Chat now',
              },
              {
                icon: MapPin,
                title: 'Headquarters',
                value: 'Lagos, Nigeria',
                action: '#',
                label: 'Visit us',
              },
            ].map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary transition"
              >
                <method.icon size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.value}</p>
                <Button size="sm" variant="outline">
                  {method.label}
                </Button>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
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
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="product-question">Product Question</option>
                    <option value="order-issue">Order Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What are your business hours?',
                    a: 'We are open Monday-Saturday, 10am-8pm and Sundays 12pm-6pm. Contact support anytime via WhatsApp.',
                  },
                  {
                    q: 'How long does delivery take?',
                    a: 'Standard delivery within Lagos: 1-2 days. Outside Lagos: 2-5 days depending on location.',
                  },
                  {
                    q: 'Can I customize bulk orders?',
                    a: 'Yes! We offer custom packaging and flavors for bulk orders. Contact our corporate team.',
                  },
                  {
                    q: 'Do you have payment plans?',
                    a: 'For corporate orders, we can discuss flexible payment terms. Please contact us directly.',
                  },
                  {
                    q: 'What if I have an allergy concern?',
                    a: 'We take allergies seriously. All products are processed in facilities with peanuts. Please contact us for details.',
                  },
                  {
                    q: 'How do I return an order?',
                    a: 'If there&apos;s an issue with your order, contact us immediately for a resolution or replacement.',
                  },
                ].map((faq, idx) => (
                  <details key={idx} className="bg-card border border-border rounded-lg p-4 cursor-pointer">
                    <summary className="font-bold flex items-center justify-between">
                      {faq.q}
                      <span className="text-primary">+</span>
                    </summary>
                    <p className="text-muted-foreground mt-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Quick Response Times</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { channel: 'WhatsApp', time: 'Within 1 hour' },
              { channel: 'Email', time: 'Within 24 hours' },
              { channel: 'Phone', time: 'During business hours' },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border">
                <p className="font-bold text-lg mb-2">{item.channel}</p>
                <p className="text-muted-foreground">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
