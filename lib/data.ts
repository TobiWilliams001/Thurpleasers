export interface Product {
  id: string
  name: string
  description: string
  price: string
  size: string
  image: string
  flavor: string
  available: boolean
}

export interface Testimonial {
  id: string
  name: string
  title: string
  content: string
  rating: number
  image: string
}

export interface Store {
  id: string
  name: string
  address: string
  city: string
  state: string
  phone: string
  hours: string
  coordinates: { lat: number; lng: number }
}

export interface CommunityPost {
  id: string
  author: string
  content: string
  image?: string
  likes: number
  date: string
  category: 'wall-of-love' | 'recipe' | 'story' | 'photo'
}

// Thurspleasers Coated Peanuts — one recipe, seven pack sizes.
// NOTE: prices were not provided by the brand. 'Enquire' is a placeholder —
// replace with real prices when available.
export const products: Product[] = [
  {
    id: 'prod_45g',
    name: 'Pocket Pleasure',
    description: 'Quick indulgence — the impulse buy and checkout-counter snack.',
    price: 'Enquire',
    size: '45g',
    image: '/placeholder-product.png',
    flavor: '45g',
    available: true,
  },
  {
    id: 'prod_70g',
    name: 'Buddy Pack',
    description: 'On-the-go treat for your handbag, briefcase, or school bag.',
    price: 'Enquire',
    size: '70g',
    image: '/placeholder-product.png',
    flavor: '70g',
    available: true,
  },
  {
    id: 'prod_150g',
    name: 'Party Pack',
    description: 'Perfect for souvenirs, work, study, and me-time.',
    price: 'Enquire',
    size: '150g',
    image: '/placeholder-product.png',
    flavor: '150g',
    available: true,
  },
  {
    id: 'prod_220g',
    name: 'Movie Mate',
    description: 'Your perfect binge-watching companion.',
    price: 'Enquire',
    size: '220g',
    image: '/placeholder-product.png',
    flavor: '220g',
    available: true,
  },
  {
    id: 'prod_300g',
    name: 'Road Trip Pleasure',
    description: 'For travel, adventure, and sharing with a friend.',
    price: 'Enquire',
    size: '300g',
    image: '/placeholder-product.png',
    flavor: '300g',
    available: true,
  },
  {
    id: 'prod_350g',
    name: 'Signature Pack',
    description: 'The family favourite.',
    price: 'Enquire',
    size: '350g',
    image: '/placeholder-product.png',
    flavor: '350g',
    available: true,
  },
  {
    id: 'prod_450g',
    name: 'Celebration Jar',
    description: 'Made for sharing memorable moments.',
    price: 'Enquire',
    size: '450g',
    image: '/placeholder-product.png',
    flavor: '450g',
    available: true,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'test_1',
    name: 'Pastor Ituah Ighodalo',
    title: 'Customer',
    content:
      'Bless you indeed, just seeing this — the products were really good. How can we order more products?',
    rating: 5,
    image: '/placeholder-avatar.png',
  },
  {
    id: 'test_2',
    name: 'Mrs Mosebolan Odufuwa',
    title: 'Customer',
    content:
      'Your peanuts are tasty, one can feel your heartfelt effort during every purchase. Not to mention you are like a smile bank — one can bank on getting a smile when we come buying. It is great for gift packs, not to mention crunchy and full of flavour.',
    rating: 5,
    image: '/placeholder-avatar.png',
  },
  {
    id: 'test_3',
    name: 'Olujuwon Olusanya (Ms.)',
    title: 'Loyal Customer',
    content:
      'The products are of high quality, thoughtfully prepared, and delivered with professionalism and integrity. In fact, I believe she makes the best peanuts in Lagos.',
    rating: 5,
    image: '/placeholder-avatar.png',
  },
]

// NOTE: phone, hours, and map coordinates were not provided per store.
// Phone uses the brand WhatsApp line; coordinates are approximate area centres —
// replace with exact values when available.
export const stores: Store[] = [
  {
    id: 'store_1',
    name: 'One Source Supermarket',
    address: 'Ligali Ayorinde Street, Victoria Island',
    city: 'Lagos',
    state: 'Lagos',
    phone: '08073938558',
    hours: 'See store',
    coordinates: { lat: 6.4318, lng: 3.4344 },
  },
  {
    id: 'store_2',
    name: 'Yemyem Supermarket',
    address: 'Unilag, Akoka',
    city: 'Lagos',
    state: 'Lagos',
    phone: '08073938558',
    hours: 'See store',
    coordinates: { lat: 6.5158, lng: 3.3964 },
  },
  {
    id: 'store_3',
    name: 'Lagos State Fresh Food Hub',
    address: 'Idi-Oro',
    city: 'Lagos',
    state: 'Lagos',
    phone: '08073938558',
    hours: 'See store',
    coordinates: { lat: 6.5244, lng: 3.35 },
  },
  {
    id: 'store_4',
    name: 'Addas Mall',
    address: '8/10 Hakeem Balogun Street (Opposite Cadbury Plc), Agidingbi, Ikeja',
    city: 'Lagos',
    state: 'Lagos',
    phone: '08073938558',
    hours: 'See store',
    coordinates: { lat: 6.6018, lng: 3.3515 },
  },
]

export const communityPosts: CommunityPost[] = [
  {
    id: 'post_1',
    author: 'Pastor Ituah Ighodalo',
    content:
      'Bless you indeed, just seeing this — the products were really good. How can we order more products?',
    likes: 245,
    date: '2024-01-15',
    category: 'wall-of-love',
  },
  {
    id: 'post_2',
    author: 'Mrs Mosebolan Odufuwa',
    content:
      'Your peanuts are tasty, one can feel your heartfelt effort during every purchase. You are like a smile bank — one can bank on getting a smile when we come buying. Great for gift packs, crunchy and full of flavour.',
    likes: 189,
    date: '2024-01-14',
    category: 'wall-of-love',
  },
  {
    id: 'post_3',
    author: 'Olujuwon Olusanya (Ms.)',
    content:
      'High quality, thoughtfully prepared, and delivered with professionalism and integrity. In fact, I believe she makes the best peanuts in Lagos.',
    likes: 312,
    date: '2024-01-13',
    category: 'story',
  },
]
