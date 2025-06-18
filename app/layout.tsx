import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Medibot',
  description: 'A Next.js application for AI-assisted emergency medicine',
  generator: 'Next.js',
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
