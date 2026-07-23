'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { communityPosts, leaderboardUsers } from '@/lib/data'
import Link from 'next/link'
import { Heart, MessageCircle, Share2, Trophy, TrendingUp, ChefHat, BookOpen, Camera } from 'lucide-react'
import { useState } from 'react'

export default function CommunityPage() {
  const [likes, setLikes] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState<'all' | 'wall' | 'recipes' | 'stories' | 'leaderboard'>('all')

  const toggleLike = (postId: string) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const filteredPosts = {
    all: communityPosts,
    wall: communityPosts.filter((p) => p.category === 'wall-of-love'),
    recipes: communityPosts.filter((p) => p.category === 'recipe'),
    stories: communityPosts.filter((p) => p.category === 'story'),
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Hub</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Connect with fellow Thurspleasers lovers, share your moments, discover recipes, 
            and celebrate what makes our community special.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border sticky top-16 z-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4">
            {(
              [
                { id: 'all', label: 'All Posts' },
                { id: 'wall', label: 'Wall of Love' },
                { id: 'recipes', label: 'Recipes' },
                { id: 'stories', label: 'Stories' },
                { id: 'leaderboard', label: 'Hall of Crunch' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {activeTab === 'leaderboard' ? (
          /* Hall of Crunch Leaderboard */
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Hall of Crunch</h2>
              <p className="text-muted-foreground">
                Our most passionate community members and loyalty program champions
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="hidden md:grid grid-cols-5 gap-4 p-6 bg-muted font-bold border-b border-border">
                <div>Rank</div>
                <div>Member</div>
                <div className="text-right">Points</div>
                <div className="text-right">Tier</div>
                <div className="text-right">Status</div>
              </div>

              <div className="divide-y divide-border">
                {leaderboardUsers.map((user, idx) => (
                  <div key={user.rank} className="p-6 hover:bg-muted/50 transition">
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        {user.rank <= 3 && (
                          <Trophy
                            size={24}
                            className={
                              user.rank === 1
                                ? 'text-yellow-500'
                                : user.rank === 2
                                  ? 'text-gray-400'
                                  : 'text-orange-600'
                            }
                          />
                        )}
                        <span className="font-bold text-lg">#{user.rank}</span>
                      </div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-right md:text-right font-bold text-primary">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-right md:text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            user.tier === 'Bronze'
                              ? 'bg-amber-100 text-amber-800'
                              : user.tier === 'Silver'
                                ? 'bg-gray-100 text-gray-800'
                                : user.tier === 'Gold'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {user.tier}
                        </span>
                      </div>
                      <div className="text-right hidden md:block">
                        <TrendingUp size={20} className="text-accent inline" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-accent/10 border border-accent rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to see your name on the Hall of Crunch?
              </p>
              <Link href="/rewards">
                <Button className="bg-accent text-accent-foreground hover:opacity-90">
                  Join the Rewards Program
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* Community Feed */
          <div>
            {/* New Post CTA */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-4">Share Your Thurspleasers Moment</h3>
              <div className="space-y-4">
                <textarea
                  placeholder="What's your favorite way to enjoy Thurspleasers? Share a recipe, story, or just tell us what you love!"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  disabled
                />
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" disabled>
                    Add Image
                  </Button>
                  <Button disabled className="bg-primary hover:opacity-90">
                    Post (Coming Soon)
                  </Button>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {(activeTab === 'all'
                ? filteredPosts.all
                : activeTab === 'wall'
                  ? filteredPosts.wall
                  : activeTab === 'recipes'
                    ? filteredPosts.recipes
                    : filteredPosts.stories
              ).map((post) => (
                <div key={post.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{post.author}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category === 'wall-of-love' ? (
                        <>
                          <Heart size={12} /> Wall of Love
                        </>
                      ) : post.category === 'recipe' ? (
                        <>
                          <ChefHat size={12} /> Recipe
                        </>
                      ) : post.category === 'story' ? (
                        <>
                          <BookOpen size={12} /> Story
                        </>
                      ) : (
                        <>
                          <Camera size={12} /> Photo
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

                  {post.image && (
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground">
                      Image
                    </div>
                  )}

                  <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 hover:text-accent transition ${
                        likes[post.id] ? 'text-accent' : ''
                      }`}
                    >
                      <Heart size={18} fill={likes[post.id] ? 'currentColor' : 'none'} />
                      {post.likes + (likes[post.id] ? 1 : 0)}
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition">
                      <MessageCircle size={18} />
                      Comment
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition">
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Brand message */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-balance">
            &ldquo;You never really finish a pack of Thurspleasers. You pass on the
            craving.&rdquo;
          </p>
          <p className="mt-4 text-muted-foreground">
            From hand to hand, and from heart to heart.
          </p>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Community Guidelines</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Be Respectful',
                desc: 'Treat all community members with kindness and respect. We celebrate diversity.',
              },
              {
                title: 'Share Authentically',
                desc: 'Share genuine experiences and stories. We value honest feedback and creative expressions.',
              },
              {
                title: 'Keep It Positive',
                desc: 'Focus on positive interactions. Constructive criticism is welcome; negativity is not.',
              },
              {
                title: 'No Spam',
                desc: 'Share relevant content only. Commercial promotion without permission is prohibited.',
              },
            ].map((guideline, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{guideline.title}</h3>
                <p className="text-muted-foreground">{guideline.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
