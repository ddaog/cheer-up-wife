'use client';

import React, { useState } from 'react';
import { useSettings } from '@/lib/hooks/useSettings';
import { Gift, Share2, Check } from 'lucide-react';

interface Coupon {
    id: string;
    title: string;
    description: string;
    color: string;
}

const COUPONS: Coupon[] = [
    { id: '1', title: '설거지 면제권', description: '오늘 설거지는 남편이 책임집니다!', color: 'bg-blue-500' },
    { id: '2', title: '마사지 30분', description: '다리와 어깨를 시원하게 풀어드려요.', color: 'bg-pink-500' },
    { id: '3', title: '자유시간 3시간', description: '혼자만의 시간을 즐기고 오세요.', color: 'bg-purple-500' },
    { id: '4', title: '야식 배달권', description: '원하는 메뉴 무엇이든 시켜드립니다.', color: 'bg-orange-500' },
];

export default function CouponPage() {
    const { settings } = useSettings();
    const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async (coupon: Coupon) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `[사랑의 쿠폰] ${coupon.title}`,
                    text: `${settings.nickname}님을 위한 ${coupon.title}이 도착했어요!\n\n"${coupon.description}"\n\n- ${settings.signature}`,
                    url: window.location.href, // Or app landing page
                });
            } catch (err) {
                console.log('Share canceled');
            }
        } else {
            // Fallback: Copy to clipboard
            const text = `[사랑의 쿠폰] ${coupon.title}\n${coupon.description}\n- ${settings.signature}`;
            navigator.clipboard.writeText(text);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">사랑의 쿠폰함 💌</h2>
                <p className="text-gray-500 text-sm">아내에게 특별한 선물을 보내보세요</p>
            </div>

            <div className="grid gap-4">
                {COUPONS.map((coupon) => (
                    <div
                        key={coupon.id}
                        className="group relative bg-white dark:bg-[#1C1C1E] rounded-3xl p-1 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:scale-[1.02] active:scale-95"
                        onClick={() => setSelectedCoupon(coupon)}
                    >
                        {/* Coupon Design */}
                        <div className="flex h-32 rounded-2xl overflow-hidden relative">
                            {/* Left Stub */}
                            <div className={`w-24 ${coupon.color} flex items-center justify-center text-white relative`}>
                                <Gift className="w-8 h-8" />
                                <div className="absolute right-0 top-0 bottom-0 w-[4px] border-l-2 border-dashed border-white/30" />
                                {/* Visual Holes */}
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-white dark:bg-[#1C1C1E] rounded-full" />
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white dark:bg-[#1C1C1E] rounded-full" />
                            </div>

                            {/* Right Content */}
                            <div className="flex-1 p-5 flex flex-col justify-center bg-white dark:bg-[#1C1C1E]">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{coupon.title}</h3>
                                <p className="text-xs text-gray-500">{coupon.description}</p>
                                <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-400 font-mono bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded w-fit">
                                    NO. {new Date().getFullYear()}-{coupon.id.padStart(3, '0')}
                                </div>
                            </div>
                        </div>

                        {/* Share Overlay Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleShare(coupon);
                            }}
                            className="absolute right-4 bottom-4 p-2 bg-gray-900/5 hover:bg-gray-900/10 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors"
                        >
                            {isSharing && selectedCoupon?.id === coupon.id ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5 text-gray-500" />}
                        </button>
                    </div>
                ))}
            </div>

            {/* Detail Dialog/Modal handled simply by alert for V1 or could be expanded. 
          For now, interactive elements are the share button. */}
        </div>
    );
}
