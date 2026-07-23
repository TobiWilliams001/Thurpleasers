'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useLoyalty } from '@/hooks/use-loyalty'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Gift, TrendingUp, Users, Copy, Check } from 'lucide-react'

export default function RewardsPage() {
  const { userRewards, isLoading, createUser, addPoints, redeemPoints, uploadReceipt, getPointsToNextTier } = useLoyalty()
  const [copied, setCopied] = useState(false)
  const [showSignup, setShowSignup] = useState(!userRewards && !isLoading)
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      createUser(formData.name, formData.email)
      setShowSignup(false)
    }
  }

  const handleCopyCode = () => {
    if (userRewards?.referralCode) {
      navigator.clipboard.writeText(userRewards.referralCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const tierColors = {
    Bronze: 'from-amber-600 to-amber-700',
    Silver: 'from-gray-400 to-gray-500',
    Gold: 'from-yellow-500 to-yellow-600',
    Legacy: 'from-purple-600 to-purple-700',
  }

  const tierBenefits = {
    Bronze: '1x Points Multiplier',
    Silver: '1.25x Points Multiplier',
    Gold: '1.5x Points Multiplier',
    Legacy: '2x Points Multiplier',
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-wide uppercase opacity-90 mb-3">
            The Thurspleasers Insider Club
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crunch &amp; Share Rewards</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            More Crunch. More Joy. More Impact. Every crunch tells a story — earn Crunch
            Points on every purchase, referral, and post, and climb from Champion to Legacy
            Ambassador.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {showSignup ? (
          /* Signup Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-2">Join the Rewards Program</h2>
              <p className="text-muted-foreground mb-8">
                Create your account to start earning points and unlocking exclusive benefits.
              </p>

              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:opacity-90">
                  Create My Account
                </Button>
              </form>
            </div>
          </div>
        ) : userRewards ? (
          /* Dashboard */
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between flex-col md:flex-row gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome, {userRewards.name}!</h2>
                <p className="text-muted-foreground">Member ID: {userRewards.userId}</p>
              </div>
              <Button 
                variant="outline"
                onClick={() => {
                  localStorage.removeItem('thurspleasers_user')
                  window.location.reload()
                }}
              >
                Sign Out
              </Button>
            </div>

            {/* Points Card */}
            <div className={`bg-gradient-to-br ${tierColors[userRewards.tier]} text-white rounded-xl p-8 md:p-12 shadow-lg`}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-white/80 mb-2">Current Tier</p>
                  <h3 className="text-3xl md:text-4xl font-bold">{userRewards.tier}</h3>
                </div>
                <div className="text-right">
                  <p className="text-white/80 mb-2">Member Since</p>
                  <p className="text-lg font-semibold">
                    {new Date(userRewards.joinedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white/80 mb-2">Total Points</p>
                  <p className="text-5xl font-bold">{userRewards.points.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">Benefit</p>
                  <p className="text-2xl font-semibold">{tierBenefits[userRewards.tier]}</p>
                </div>
              </div>
            </div>

            {/* Progress to Next Tier */}
            {userRewards.tier !== 'Legacy' && (
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">Progress to Next Tier</p>
                <div className="bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        ((userRewards.points - [0, 500, 1500, 5000][['Bronze', 'Silver', 'Gold', 'Legacy'].indexOf(userRewards.tier)]) /
                          (getPointsToNextTier(userRewards.points) + (userRewards.points - [0, 500, 1500, 5000][['Bronze', 'Silver', 'Gold', 'Legacy'].indexOf(userRewards.tier)]))) *
                          100
                      )}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {getPointsToNextTier(userRewards.points)} points to reach {['Silver', 'Gold', 'Legacy', 'Infinity'][['Bronze', 'Silver', 'Gold', 'Legacy'].indexOf(userRewards.tier)]}
                </p>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => uploadReceipt()}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition text-left"
              >
                <TrendingUp size={32} className="text-primary mb-3" />
                <h3 className="font-bold mb-2">Upload Receipt</h3>
                <p className="text-sm text-muted-foreground mb-4">Earn 25-75 bonus points</p>
                <Button size="sm" variant="outline">
                  Upload Now
                </Button>
              </button>

              <button
                onClick={handleCopyCode}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition text-left"
              >
                <Users size={32} className="text-accent mb-3" />
                <h3 className="font-bold mb-2">Referral Code</h3>
                <p className="text-sm text-muted-foreground mb-4">Share & earn 100 bonus points</p>
                <div className="flex items-center gap-2">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono font-bold">
                    {userRewards.referralCode}
                  </code>
                  <button onClick={handleCopyCode} className="p-1 hover:bg-muted rounded">
                    {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
                  </button>
                </div>
              </button>

              <Link href="/community" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition text-left block">
                <Gift size={32} className="text-secondary mb-3" />
                <h3 className="font-bold mb-2">Redeem Rewards</h3>
                <p className="text-sm text-muted-foreground mb-4">View exclusive perks</p>
                <Button size="sm" variant="outline">
                  View More
                </Button>
              </Link>
            </div>

            {/* Tier System */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8">Tier System</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {(
                  [
                    { tier: 'Bronze', min: 0, max: 499 },
                    { tier: 'Silver', min: 500, max: 1499 },
                    { tier: 'Gold', min: 1500, max: 4999 },
                    { tier: 'Legacy', min: 5000, max: 99999 },
                  ] as const
                ).map((tierInfo) => (
                  <div
                    key={tierInfo.tier}
                    className={`rounded-lg p-6 border-2 ${
                      userRewards.tier === tierInfo.tier
                        ? `border-${tierInfo.tier.toLowerCase()} bg-secondary/20`
                        : 'border-border'
                    }`}
                  >
                    <h4 className="font-bold text-lg mb-2">{tierInfo.tier}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {tierInfo.min.toLocaleString()} - {tierInfo.max.toLocaleString()} points
                    </p>
                    {tierInfo.tier === 'Bronze' && <p className="text-sm">1x Points</p>}
                    {tierInfo.tier === 'Silver' && <p className="text-sm">1.25x Points</p>}
                    {tierInfo.tier === 'Gold' && <p className="text-sm">1.5x Points</p>}
                    {tierInfo.tier === 'Legacy' && <p className="text-sm font-bold">2x Points</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground text-sm mb-2">Receipts Uploaded</p>
                <p className="text-3xl font-bold">{userRewards.receiptsUploaded}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground text-sm mb-2">Member Email</p>
                <p className="text-xl font-bold break-all">{userRewards.email}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* How Members Earn Crunch Points */}
      <section className="border-t border-border bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Members Earn Crunch Points</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the community, then earn points every time you buy, refer, and share.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Purchases */}
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Purchase Points</h3>
              <ul className="space-y-2 text-sm">
                {[
                  ['150g', '2 points'],
                  ['220g', '3 points'],
                  ['300g', '5 points'],
                  ['350g', '6 points'],
                  ['450g', '7 points'],
                ].map(([size, pts]) => (
                  <li key={size} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0">
                    <span className="text-muted-foreground">{size}</span>
                    <span className="font-semibold text-primary">{pts}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Points are added after you upload your receipt and a photo of the pack showing
                the batch/production code, so each receipt is redeemed only once.
              </p>
            </div>

            {/* Referrals & Corporate */}
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Referrals &amp; Corporate</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Refer a customer who buys a 300–450g pack</span>
                  <span className="font-semibold text-primary whitespace-nowrap">20 pts + entry</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Corporate referral (hotel, school, hospital, cinema, airline, supermarket, distributor) that becomes a customer</span>
                  <span className="font-semibold text-primary whitespace-nowrap">200 pts</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Social Media Engagement</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Follow, like &amp; comment on a post</span>
                  <span className="font-semibold text-primary whitespace-nowrap">1 point</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Tag 10 friends</span>
                  <span className="font-semibold text-primary whitespace-nowrap">2 points</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Share/repost to 10 people or groups</span>
                  <span className="font-semibold text-primary whitespace-nowrap">3 points</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Complete all three to also qualify for a bonus entry in our monthly draw.
              </p>
            </div>

            {/* UGC */}
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">User-Generated Content</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Post a reel / photo / video</span>
                  <span className="font-semibold text-primary whitespace-nowrap">40 points</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Feature us in a story</span>
                  <span className="font-semibold text-primary whitespace-nowrap">10 points</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Google review</span>
                  <span className="font-semibold text-primary whitespace-nowrap">20 points</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Video testimonial</span>
                  <span className="font-semibold text-primary whitespace-nowrap">30 points</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Tag @Thurspleasers and use the campaign hashtag on Instagram, Facebook, TikTok,
                LinkedIn, or X.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Ladder */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exchange Points for Rewards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The more you crunch and share, the higher you climb.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Crunch Champion', range: '500 – 1,000 pts', benefits: ['Qualify for the Monthly Bronze Award', 'Community recognition'] },
              { name: 'Joy Ambassador', range: '1,001 – 2,000 pts', benefits: ['Quarterly Silver Crunch Award', 'VIP first access to new packs', 'Featured in our Hall of Crunch', 'Ambassador certificate'] },
              { name: 'Gold Ambassador', range: '2,001 – 10,000 pts', benefits: ['Bi-annual Gold Crunch Award', 'VIP first access to new packs', 'Featured in our Hall of Crunch', 'Ambassador certificate'] },
              { name: 'Legacy Ambassador', range: '10,000+ pts', benefits: ['Yearly Founder’s Choice Award', 'Invitation to brand events', "Founder's Circle", 'Ambassador of the Year recognition'] },
            ].map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{tier.range}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-border bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Crunch Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Bronze Crunch Award', cadence: 'Monthly', perks: ['Free Thurspleasers pack', 'Featured on our socials'] },
              { name: 'Silver Crunch Award', cadence: 'Quarterly', perks: ['Gift box of 2+ packs', 'Personalized appreciation card', 'Featured on our socials'] },
              { name: 'Gold Crunch Award', cadence: 'Bi-annual', perks: ['Premium gift hamper', 'Free delivery', 'Personalized card', 'Featured on our socials'] },
              { name: 'Founder’s Choice Award', cadence: 'Yearly', perks: ['Selected by Lady AY', 'Special gifts & event tickets', 'Recognition on all platforms'] },
            ].map((award) => (
              <div key={award.name} className="rounded-2xl border border-border p-6">
                <p className="text-xs font-medium tracking-wide uppercase text-primary mb-2">{award.cadence}</p>
                <h3 className="font-semibold text-lg mb-4">{award.name}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {award.perks.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I earn Crunch Points?',
                a: 'Earn points on every purchase (by pack size), on referrals, corporate introductions, social engagement, and user-generated content. Purchases earn points after you upload your receipt and a photo of the pack showing the batch code.',
              },
              {
                q: 'How are purchases verified?',
                a: 'Upload the purchase receipt, enter the receipt number, and upload a photo of the pack showing the production/batch code. We then mark that receipt as redeemed so it cannot be used again. Orders placed directly with us are verified automatically from our records.',
              },
              {
                q: 'What are the ambassador levels?',
                a: 'Crunch Champion (500–1,000), Joy Ambassador (1,001–2,000), Gold Ambassador (2,001–10,000), and Legacy Ambassador (10,000+). Each level unlocks awards, VIP access, and recognition in our Hall of Crunch.',
              },
              {
                q: 'How do referrals count?',
                a: 'One unique phone number or email counts as one discovery, and we only count the first registration from each. Duplicate entries are automatically ignored. Refer a customer who buys a 300–450g pack to earn 20 points plus a bonus entry.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-background border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary">+</span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
