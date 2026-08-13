import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: "Surendhar K | Software Developer | AI, Cloud & Java",
  description:
    "Surendhar K is a software developer specializing in AI, cloud computing, Java, and modern web technologies. Explore projects, certifications, skills, and experience.",

  openGraph: {
    title: "Surendhar K | Software Developer | AI, Cloud & Java",
    description:
      "Explore Surendhar K's projects, technical skills, certifications, and experience in AI, cloud computing, Java, and modern web technologies.",
    url: "https://surendhar-ks.github.io/",
    siteName: "Surendhar K Portfolio",
    images: [
      {
        url: "https://surendhar-ks.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surendhar K - Software Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Surendhar K | Software Developer | AI, Cloud & Java",
    description:
      "Explore Surendhar K's projects, skills, certifications, and experience.",
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
    "@type": "Person",
    "name": "Surendhar K",
    "jobTitle": "Software Developer",
    "description": "Software Developer focused on AI, Cloud, and Java.",
    "url": "https://surendhar-ks.github.io/",
    "sameAs": [
      "https://github.com/surendhar-ks",
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
