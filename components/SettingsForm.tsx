import React, { useState, useEffect } from 'react';
import { useSettings } from '@/lib/hooks/useSettings';
import { Save, Calendar } from 'lucide-react';
import { getTrimester } from '@/lib/utils/random';

export function SettingsForm() {
    const { settings, updateSettings } = useSettings();
    const [nickname, setNickname] = useState('');
    const [signature, setSignature] = useState('');
    const [weeks, setWeeks] = useState(12);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (settings) {
            setNickname(settings.nickname);
            setSignature(settings.signature);
            setWeeks(settings.pregnancyWeek || 12);
        }
    }, [settings]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateSettings({ nickname, signature, pregnancyWeek: weeks });
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const currentTrimester = getTrimester(weeks);
    const trimesterLabel = {
        early: '임신 초기 (1-13주)',
        middle: '임신 중기 (14-27주)',
        late: '임신 후기 (28-40주)',
        all: '전 기간'
    }[currentTrimester] || '임신 기간';

    return (
        <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-md mx-auto p-2">

            {/* Pregnancy Week Input */}
            <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    현재 임신 주수
                </label>

                <div className="bg-white dark:bg-[#1C1C1E] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 space-y-4">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{weeks}주</span>
                        <span className="text-sm font-medium text-pink-500 bg-pink-50 dark:bg-pink-900/20 px-3 py-1 rounded-full">
                            {trimesterLabel}
                        </span>
                    </div>

                    <input
                        type="range"
                        min="1"
                        max="40"
                        value={weeks}
                        onChange={(e) => setWeeks(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        주수에 맞춰서 적절한 응원 메시지와 가이드를 추천해드립니다.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <label htmlFor="nickname" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    아내 애칭
                </label>
                <input
                    type="text"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="여보"
                    className="w-full px-4 py-3 rounded-xl border-none bg-white dark:bg-[#1C1C1E] text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                />
            </div>

            <div className="space-y-4">
                <label htmlFor="signature" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    남편 서명
                </label>
                <input
                    type="text"
                    id="signature"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="사랑하는 남편이"
                    className="w-full px-4 py-3 rounded-xl border-none bg-white dark:bg-[#1C1C1E] text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                />
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all transform active:scale-95"
            >
                <Save className="w-5 h-5" />
                {saved ? '저장되었습니다!' : '설정 저장하기'}
            </button>
        </form>
    );
}
