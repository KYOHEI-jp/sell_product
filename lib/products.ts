import productsData from '../data/products.json'

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  pros: string[]
  cons: string[]
  image_url: string
  affiliate_url: string
  category: string
}

export async function getProducts(): Promise<Product[]> {
  return productsData as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find((p) => p.slug === slug)
}
