export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory?: string
  rating: number
  reviewCount: number
  isOnSale?: boolean
  inStock: boolean
  stockQuantity: number
  features: string[]
  specifications?: Record<string, string>
  reviews?: Review[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description: string
}
