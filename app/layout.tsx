import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Made - Your AI-Powered Creative Team',
  description: 'Build better content, grow faster, no burnout. Made gives creators their own team of AI agents to ideate, create, analyze, and grow.',
  keywords: 'AI content creation, YouTube automation, creator tools, AI agents, content strategy, video optimization',
  openGraph: {
    title: 'Made - Your AI-Powered Creative Team',
    description: 'Build better content, grow faster, no burnout.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made - Your AI-Powered Creative Team',
    description: 'Build better content, grow faster, no burnout.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-display antialiased">{children}</body>
    </html>
  )
}