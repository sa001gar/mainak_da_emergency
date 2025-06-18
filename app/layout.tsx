import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Medicine Emergency',
  description: 'Created with love by Sagar Kundu',
  generator: 'sa001gar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
