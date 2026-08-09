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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
