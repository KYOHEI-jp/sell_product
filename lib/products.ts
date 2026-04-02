import productsData from '../data/products.json'

export type Product = {
  id: string
  name: string
  description: string
  pros: string[]
  cons: string[]
  image_url: string
  affiliate_url: string
  category: string
}

export function getAllProducts(): Product[] {
  return productsData as Product[]
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.id === slug) as Product | undefined
}

export function getAllSlugs(): string[] {
  return productsData.map((p) => p.id)
}
