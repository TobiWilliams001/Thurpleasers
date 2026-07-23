'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
            T
          </div>
          <span className="hidden sm:inline">Thurspleasers</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition font-medium">
            About
          </Link>
          <Link href="/products" className="text-foreground hover:text-primary transition font-medium">
            Products
          </Link>
          <Link href="/store-locator" className="text-foreground hover:text-primary transition font-medium">
            Stores
          </Link>
          <Link href="/rewards" className="text-foreground hover:text-primary transition font-medium">
            Rewards
          </Link>
          <Link href="/community" className="text-foreground hover:text-primary transition font-medium">
            Community
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition font-medium">
            Contact
          </Link>
        </div>

        {/* Rewards Badge */}
        <Link href="/rewards" className="hidden sm:flex items-center">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            My Rewards
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/products" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="/store-locator" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Stores
            </Link>
            <Link href="/rewards" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Rewards
            </Link>
            <Link href="/community" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Community
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
