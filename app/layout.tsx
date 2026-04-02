export const metadata = {
  title: 'Sell Product',
  description: 'BJJ & フィットネスギアのおすすめ紹介',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
