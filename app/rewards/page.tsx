import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const perks = [
  'Monthly Giveaway',
  'Referral Rewards',
  'Customer Spotlight',
  'Community Stories',
  'Exclusive Experiences',
  'Founder’s Choice Award',
  'VIP First Access to New Packs',
  'Events',
]

const steps = [
  { n: 1, text: 'Follow our social media pages. Like and comment on our latest post.', pts: '1 point' },
  { n: 2, text: 'Tag 10 friends.', pts: '2 points' },
  { n: 3, text: 'Repost or share our page with at least 10 people or groups who would enjoy Thurspleasers.', pts: '3 points' },
  { n: 4, text: 'Send us a screenshot of your comment, repost, and share.', pts: '' },
  { n: 5, text: 'You’re automatically entered into our monthly draw — Bronze Category.', pts: '1 bonus entry' },
]

const earnGroups = [
  {
    title: 'Purchase Points',
    note: 'Added after you upload your receipt, enter the receipt number, and upload a photo of the pack showing the batch code — so each receipt is redeemed only once.',
    rows: [
      ['150g', '2 points'],
      ['220g', '3 points'],
      ['300g', '5 points'],
      ['350g', '6 points'],
      ['450g', '7 points'],
    ],
  },
  {
    title: 'Referrals & Corporate',
    note: '',
    rows: [
      ['Refer a customer who buys a 300–450g pack', '20 pts + entry'],
      ['Corporate referral that becomes a customer', '200 pts'],
    ],
  },
  {
    title: 'Social Media Engagement',
    note: 'Complete all three to qualify for a bonus entry in our monthly draw.',
    rows: [
      ['Follow, like & comment on a post', '1 point'],
      ['Tag 10 friends', '2 points'],
      ['Share/repost to 10 people or groups', '3 points'],
    ],
  },
  {
    title: 'User-Generated Content',
    note: 'Tag @Thurspleasers and use the campaign hashtag.',
    rows: [
      ['Post a reel / photo / video', '40 points'],
      ['Feature us in a story', '10 points'],
      ['Google review', '20 points'],
      ['Video testimonial', '30 points'],
    ],
  },
]

const tiers = [
  { name: 'Crunch Champion', range: '500 – 1,000 pts', benefits: ['Monthly Bronze Award', 'Community recognition'] },
  { name: 'Joy Ambassador', range: '1,001 – 2,000 pts', benefits: ['Quarterly Silver Crunch Award', 'VIP first access to new packs', 'Featured in the Hall of Crunch', 'Ambassador certificate'] },
  { name: 'Gold Ambassador', range: '2,001 – 10,000 pts', benefits: ['Bi-annual Gold Crunch Award', 'VIP first access to new packs', 'Featured in the Hall of Crunch', 'Ambassador certificate'] },
  { name: 'Legacy Ambassador', range: '10,000+ pts', benefits: ['Yearly Founder’s Choice Award', 'Invitation to brand events', "Founder's Circle", 'Ambassador of the Year recognition'] },
]

const awards = [
  { cadence: 'Monthly', name: 'Bronze Crunch Award', perks: ['Free Thurspleasers pack', 'Featured on our socials'] },
  { cadence: 'Quarterly', name: 'Silver Crunch Award', perks: ['Gift box of 2+ packs', 'Personalized appreciation card', 'Featured on our socials'] },
  { cadence: 'Bi-annual', name: 'Gold Crunch Award', perks: ['Premium gift hamper', 'Free delivery', 'Personalized card', 'Featured on our socials'] },
  { cadence: 'Yearly', name: 'Founder’s Choice Award', perks: ['Selected by Lady AY', 'Special gifts & event tickets', 'Recognition on all platforms'] },
]

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            The Thurspleasers Insider Club
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Crunch &amp; Share Rewards</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            More Crunch. More Joy. More Impact. Every crunch tells a story — and every month,
            we reward members of our community.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Members Get</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {perks.map((perk) => (
              <span key={perk} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                {perk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Participate</h2>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                  {step.n}
                </span>
                <div className="flex-1">
                  <p>{step.text}</p>
                  {step.pts && <p className="text-sm font-medium text-primary mt-1">{step.pts}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How members earn crunch points */}
      <section className="border-t border-border bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Members Earn Crunch Points</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {earnGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
                <ul className="space-y-2 text-sm">
                  {group.rows.map(([label, pts]) => (
                    <li key={label} className="flex items-start justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-semibold text-primary whitespace-nowrap">{pts}</span>
                    </li>
                  ))}
                </ul>
                {group.note && <p className="text-xs text-muted-foreground mt-4">{group.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador ladder */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Exchange Points for Rewards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{tier.range}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-border bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Crunch Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div key={award.name} className="rounded-2xl border border-border p-6">
                <p className="text-xs font-medium tracking-wide uppercase text-primary mb-2">{award.cadence}</p>
                <h3 className="font-semibold text-lg mb-4">{award.name}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {award.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
