import type { Metadata, Viewport } from 'next';
import './globals.css';
import Link from 'next/link';
import { Heart, Settings, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TabBar } from '@/components/TabBar';

export const metadata: Metadata = {
  title: '아내를 위한 응원',
  description: '임신한 아내에게 보내는 진심 어린 응원 메시지',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen font-sans selection:bg-pink-100 dark:selection:bg-pink-900 pb-24">
        {/* Mobile Container Shell */}
        <div className="mx-auto min-h-screen max-w-md flex flex-col relative bg-transparent">

          {/* Main Content */}
          <main className="flex-1 px-5 pt-8 pb-8 w-full animate-in fade-in duration-500">
            {children}
          </main>

          {/* Bottom Tab Bar (Fixed) */}
          <TabBar />

        </div>
      </body>
    </html>
  );
}
