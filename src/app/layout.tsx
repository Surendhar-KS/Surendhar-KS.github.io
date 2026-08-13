import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Surendhar - Portfolio',
  description: 'Software developer focused on AI, cloud computing, and modern web technologies.',
  keywords: ['Software Developer', 'AI', 'Cloud Computing', 'Web Technologies', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Surendhar - Portfolio',
    description: 'Software developer focused on AI, cloud computing, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Surendhar K",
    "jobTitle": "Software Developer",
    "description": "Software Developer focused on AI, Cloud, and Java.",
    "url": "https://surendhar-ks.github.io/",
    "sameAs": [
      "https://github.com/SURENDHAR-725",
      "https://www.linkedin.com/in/surendhar-ks/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
