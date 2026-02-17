'use client';

import React, { useState } from 'react';
import { Sparkles, Send, RefreshCw, ChevronLeft } from 'lucide-react';
import { useSettings } from '@/lib/hooks/useSettings';
import { generateEncouragement } from '@/lib/actions/ai';
import * as analytics from '@/lib/utils/analytics';
import { cn } from '@/lib/utils';

export default function AIPage() {
    const { settings } = useSettings();
    const [situation, setSituation] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!situation.trim() || loading) return;

        setLoading(true);
        analytics.trackClick('ai_generate');
        analytics.event({
            action: 'ai_encourage_generate',
            category: 'ai',
            label: situation.substring(0, 20)
        });

        try {
            const message = await generateEncouragement(
                situation,
                settings.mbti || 'ISTJ',
                settings.pregnancyWeek || 12
            );
            setResult(message);
            analytics.event({
                action: 'ai_encourage_result',
                category: 'ai',
                label: 'success'
            });
        } catch (error) {
            console.error(error);
            alert('메시지 생성에 실패했습니다. 다시 시도해 주세요.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <header className="text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900/30 rounded-2xl mb-2">
                    <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI 케어</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    지금 아내의 상황을 알려주시면<br />
                    가장 필요한 응원 한마디를 만들어드려요.
                </p>
            </header>

            {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                        <textarea
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            placeholder="예: 입덧이 너무 심해서 아무것도 못 먹고 있어요, 오늘 회사에서 힘든 일이 있었다고 하네요"
                            maxLength={100}
                            className="w-full h-40 p-5 rounded-3xl bg-white dark:bg-[#1C1C1E] border-none shadow-sm ring-1 ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-pink-500 outline-none transition-all resize-none text-gray-800 dark:text-gray-200"
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                            {situation.length}/100
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-start gap-3">
                        <div className="p-1 px-2.5 bg-blue-500 text-white text-[10px] font-bold rounded-lg mt-0.5">TIP</div>
                        <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                            아내의 MBTI({settings.mbti || '설정안됨'})와 임신 주수({settings.pregnancyWeek || 12}주) 정보를 바탕으로 {settings.mbti?.includes('T') ? '논리적 해결책' : '따뜻한 공감'}이 담긴 메시지를 생성합니다.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={!situation.trim() || loading}
                        className={cn(
                            "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg",
                            loading || !situation.trim()
                                ? "bg-gray-100 text-gray-400"
                                : "bg-pink-500 text-white shadow-pink-500/20 hover:bg-pink-600"
                        )}
                    >
                        {loading ? (
                            <RefreshCw className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                응원 문장 만들기
                            </>
                        )}
                    </button>
                </form>
            ) : (
                <div className="space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink-500/5 blur-2xl rounded-full" />
                        <div className="relative bg-white dark:bg-[#1C1C1E] p-8 rounded-3xl shadow-xl shadow-pink-500/5 border border-white/20 dark:border-white/5">
                            <div className="flex justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
                            </div>
                            <blockquote className="text-xl font-medium text-gray-900 dark:text-white text-center leading-relaxed break-keep italic">
                                "{result}"
                            </blockquote>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setResult(null);
                                setSituation('');
                            }}
                            className="flex-1 py-4 bg-gray-100 dark:bg-[#2C2C2E] text-gray-600 dark:text-gray-300 rounded-2xl font-bold active:scale-95 transition-all"
                        >
                            다시 작성하기
                        </button>
                        <button
                            onClick={async () => {
                                await navigator.clipboard.writeText(result);
                                alert('메시지가 복사되었습니다!');
                                analytics.trackClick('ai_copy');
                            }}
                            className="flex-[1.5] py-4 bg-pink-500 text-white rounded-2xl font-bold shadow-lg shadow-pink-500/20 active:scale-95 transition-all"
                        >
                            복사하기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
