import { getProducts, getProductBySlug } from '@/lib/products'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug)

  if (!product) notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-8">{product.description}</p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="font-semibold text-green-700 mb-2">メリット</h2>
          <ul className="space-y-1">
            {product.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-red-700 mb-2">デメリット</h2>
          <ul className="space-y-1">
            {product.cons.map((con) => (
              <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-red-400 mt-0.5">✗</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        詳細・購入はこちら
      </a>
    </main>
  )
}
