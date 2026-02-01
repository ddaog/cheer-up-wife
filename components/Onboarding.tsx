'use client';

import React, { useState } from 'react';
import { useSettings } from '@/lib/hooks/useSettings';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export function Onboarding({ onComplete }: { onComplete: () => void }) {
    const { updateSettings } = useSettings();
    const [step, setStep] = useState(1);

    // Form State
    const [nickname, setNickname] = useState('');
    const [weeks, setWeeks] = useState(12);
    const [mbti, setMbti] = useState('ESTJ');

    const handleComplete = () => {
        updateSettings({
            nickname: nickname || '여보',
            signature: '사랑하는 남편이',
            pregnancyWeek: weeks,
            mbti
        });
        onComplete();
    };

    return (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">

            {/* Progress Bar */}
            <div className="absolute top-10 left-6 right-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-pink-500 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <div className="w-full max-w-sm space-y-8">

                {/* Step 1: Intro & Nickname */}
                {step === 1 && (
                    <div className="space-y-6 text-center animate-in slide-in-from-right duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-3xl">
                                🤰
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            <span className="text-pink-500">TO BE FAMILY</span>에<br />오신 것을 환영합니다
                        </h1>
                        <p className="text-gray-500">
                            아내분에게 힘이 되는<br />따뜻한 말 한마디를 선물해 드릴게요.
                        </p>

                        <div className="pt-4 text-left">
                            <label className="text-sm font-bold text-gray-900 dark:text-white block mb-2">
                                아내분의 애칭은 무엇인가요?
                            </label>
                            <input
                                type="text"
                                placeholder="예: 여보, OO엄마"
                                className="w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl text-lg font-bold outline-none ring-2 ring-transparent focus:ring-pink-500 transition-all"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            disabled={!nickname}
                            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            다음으로
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Step 2: Pregnancy Week */}
                {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">현재 임신 몇 주차인가요?</h2>
                            <p className="text-gray-500 mt-2">주수에 딱 맞는 응원 메시지를 준비할게요</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl text-center space-y-4">
                            <div className="text-5xl font-black text-pink-500">{weeks}<span className="text-2xl text-gray-400">주</span></div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={weeks}
                                onChange={(e) => setWeeks(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                            />
                        </div>

                        <button
                            onClick={() => setStep(3)}
                            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
                        >
                            다음으로
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Step 3: MBTI */}
                {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">아내분의 MBTI는?</h2>
                            <p className="text-gray-500 mt-2">성향에 맞춰 위로의 온도를 조절해드려요</p>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {['E', 'I'].map(type => (
                                <button key={type} onClick={() => setMbti(p => type + p.slice(1))} className={`p-4 rounded-xl font-bold transition-all ${mbti[0] === type ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>{type}</button>
                            ))}
                            {['S', 'N'].map(type => (
                                <button key={type} onClick={() => setMbti(p => p.slice(0, 1) + type + p.slice(2))} className={`p-4 rounded-xl font-bold transition-all ${mbti[1] === type ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>{type}</button>
                            ))}
                            {['T', 'F'].map(type => (
                                <button key={type} onClick={() => setMbti(p => p.slice(0, 2) + type + p.slice(3))} className={`p-4 rounded-xl font-bold transition-all ${mbti[2] === type ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>{type}</button>
                            ))}
                            {['J', 'P'].map(type => (
                                <button key={type} onClick={() => setMbti(p => p.slice(0, 3) + type)} className={`p-4 rounded-xl font-bold transition-all ${mbti[3] === type ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>{type}</button>
                            ))}
                        </div>

                        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-2xl text-center">
                            <p className="text-pink-600 dark:text-pink-300 font-bold text-sm">
                                {mbti.includes('T') ? '현실적인 해결책과 든든한 지원' : '따뜻한 공감과 감성적인 위로'}
                                <span className="font-normal text-gray-500 ml-1">위주로 준비할게요</span>
                            </p>
                        </div>

                        <button
                            onClick={handleComplete}
                            className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                        >
                            <Heart className="w-5 h-5 fill-current" />
                            시작하기
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
