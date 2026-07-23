'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { stores } from '@/lib/data'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { useState } from 'react'

export default function StoreLocatorPage() {
  const [selectedStore, setSelectedStore] = useState(stores[0])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.state.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Thurspleasers</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Pick up Thurspleasers Coated Peanuts at these stockists across Lagos. More
            locations will be added with time.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Store List */}
          <div>
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by city or store name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Stores List */}
            <div className="space-y-3">
              {filteredStores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    selectedStore.id === store.id
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <h3 className="font-bold mb-1">{store.name}</h3>
                  <p className="text-sm text-muted-foreground">{store.city}, {store.state}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Store Details */}
          <div className="lg:col-span-2">
            {selectedStore && (
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                {/* Map Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-muted to-secondary/30 flex items-center justify-center relative">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="font-medium">
                      {selectedStore.city}, {selectedStore.state}
                    </p>
                  </div>
                </div>

                {/* Store Info */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedStore.name}</h2>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-muted-foreground">{selectedStore.address}</p>
                      <p className="text-muted-foreground">
                        {selectedStore.city}, {selectedStore.state}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href={`tel:${selectedStore.phone}`} className="text-primary hover:underline">
                        {selectedStore.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-muted-foreground">{selectedStore.hours}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <a
                      href={`https://maps.google.com/?q=${selectedStore.coordinates.lat},${selectedStore.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:opacity-90">
                        <Navigation size={18} className="mr-2" />
                        Get Directions
                      </Button>
                    </a>
                    <a href={`tel:${selectedStore.phone}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Phone size={18} className="mr-2" />
                        Call
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Can&apos;t Find a Store Near You?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re expanding to more cities. Order online via WhatsApp for delivery or 
            corporate bulk orders.
          </p>
          <a href="https://wa.me/2348073938558?text=I want to order Thurspleasers" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:opacity-90">
              Order on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
