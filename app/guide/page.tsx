'use client';

import React from 'react';
import { guides, GuideCategory } from '@/lib/data/guides';
import { cn } from '@/lib/utils';
import { BookOpen, Sparkles, AlertCircle, HeartHandshake } from 'lucide-react';

export default function GuidePage() {
    const categories: { id: GuideCategory; label: string; icon: React.ReactNode; color: string }[] = [
        { id: 'physical', label: '신체적 변화 지원', icon: <HeartHandshake className="w-5 h-5" />, color: "bg-blue-100/50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
        { id: 'emotional', label: '정서적 지지', icon: <Sparkles className="w-5 h-5" />, color: "bg-purple-100/50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
        { id: 'prep', label: '출산 및 실전 준비', icon: <AlertCircle className="w-5 h-5" />, color: "bg-orange-100/50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    ];

    return (
        <div className="space-y-8 pb-10">
            <div className="space-y-2 px-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-7 h-7 text-pink-500" />
                    남편 가이드
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    아내를 위해 무엇을 해야 할지 모르겠다면 참고하세요.
                </p>
            </div>

            <div className="space-y-10">
                {categories.map((cat) => (
                    <section key={cat.id} className="space-y-4">
                        <div className="flex items-center gap-2 px-2">
                            <div className={cn("p-2 rounded-lg", cat.color)}>
                                {cat.icon}
                            </div>
                            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                                {cat.label}
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {guides.filter(g => g.category === cat.id).map((guide) => (
                                <div
                                    key={guide.id}
                                    className="bg-white dark:bg-[#1C1C1E] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 space-y-3"
                                >
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                                        {guide.title}
                                    </h3>
                                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {guide.content}
                                    </div>
                                    {guide.source && (
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                            출처: {guide.source}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
