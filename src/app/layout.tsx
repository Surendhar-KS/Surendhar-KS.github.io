import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL("https://surendhar-ks.github.io"),
  title: "Surendhar K | Software Developer | AI, Web & Cloud Solutions",
  description:
    "Software developer building AI-powered web applications, cloud solutions, and scalable digital products. Explore my projects, skills, experience, and services.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: "Surendhar K | Software Developer",
    description:
      "I build scalable, intelligent and impactful digital solutions that help businesses grow.",
    url: "https://surendhar-ks.github.io/",
    siteName: "Surendhar K Portfolio",
    images: [
      {
        url: "https://surendhar-ks.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surendhar K - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Surendhar K | Software Developer",
    description:
      "I build scalable, intelligent and impactful digital solutions that help businesses grow.",
    images: ["https://surendhar-ks.github.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://surendhar-ks.github.io/#person",
      "name": "Surendhar K",
      "url": "https://surendhar-ks.github.io/",
      "jobTitle": "Software Developer",
      "description": "Software developer building scalable digital solutions across web development, AI, cloud solutions, and data analytics.",
      "sameAs": [
        "https://github.com/surendhar-ks",
        "https://www.linkedin.com/in/surendhar-ks/"
      ]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://surendhar-ks.github.io/#website",
    "url": "https://surendhar-ks.github.io/",
    "name": "Surendhar K",
    "description": "Portfolio of Surendhar K, a software developer building digital solutions.",
    "publisher": {
      "@id": "https://surendhar-ks.github.io/#person"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://static.figma.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.figma.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
