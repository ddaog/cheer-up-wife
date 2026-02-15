'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Settings, Home, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/utils/analytics';

export function TabBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50">
            <div className="max-w-md mx-auto">
                <div className="ios-glass border-t border-gray-200/50 dark:border-gray-800/50 flex items-center justify-around pb-5 pt-3 px-2">

                    <TabLink
                        href="/"
                        active={pathname === '/'}
                        icon={<Home className="w-[26px] h-[26px]" strokeWidth={2.5} />}
                        label="투데이"
                    />

                    <TabLink
                        href="/guide"
                        active={pathname === '/guide'}
                        icon={<BookOpen className="w-[26px] h-[26px]" strokeWidth={2.5} />}
                        label="가이드"
                    />

                    <TabLink
                        href="/saved"
                        active={pathname === '/saved'}
                        icon={<Heart className="w-[26px] h-[26px]" strokeWidth={2.5} />}
                        label="마음함"
                    />



                    <TabLink
                        href="/settings"
                        active={pathname === '/settings'}
                        icon={<Settings className="w-[26px] h-[26px]" strokeWidth={2.5} />}
                        label="설정"
                    />

                </div>
            </div>
        </nav>
    );
}

function TabLink({ href, active, icon, label }: { href: string; active: boolean; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            onClick={() => trackClick(label, 'link')}
            className={cn(
                "flex flex-col items-center gap-1 min-w-[64px] transition-colors duration-200 active:scale-95",
                active
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            )}
        >
            {icon}
            <span className="text-[10px] font-medium tracking-tight">{label}</span>
        </Link>
    );
}
