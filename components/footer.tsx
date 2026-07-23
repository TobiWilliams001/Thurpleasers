'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                T
              </div>
              <span className="font-bold text-lg">Thurspleasers</span>
            </div>
            <p className="text-sm opacity-90">
              Crafting premium coated peanuts with passion and pride. Taste the joy of every crunch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="hover:underline">
                  Find Stores
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:underline">
                  Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="hover:underline">
                  Community Hub
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="hover:underline">
                  Inspiration Gallery
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:underline">
                  Loyalty Rewards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+2348073938558" className="hover:underline">
                  0807 393 8558
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@thurspleasers.com" className="hover:underline">
                  hello@thurspleasers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm opacity-90 mb-4 sm:mb-0">
            © 2024 Thurspleasers. All rights reserved. Taste the joy.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-80 transition"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-80 transition"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-80 transition"
              aria-label="X"
            >
              <XIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
