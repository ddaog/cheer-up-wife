import React, { useState } from 'react';
import { Heart, Share, RotateCw, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/lib/data/messages';

interface ActionButtonsProps {
    onSave: () => void;
    isSaved: boolean;
    onShare: () => Promise<void>;
    currentMessage?: Message; // kept for legacy if needed, but unused in simplified view
}

export function ActionButtons({ onSave, isSaved, onShare }: { onSave: () => void, isSaved: boolean, onShare: () => void }) {
    const [copied, setCopied] = useState(false);

    const handleShareClick = async () => {
        await onShare();
        if (!navigator.share) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex items-center justify-center gap-12 mt-8">
            {/* Save Button */}
            <button
                onClick={onSave}
                className="group flex flex-col items-center justify-center gap-2 active:scale-90 transition-transform duration-200"
                aria-label="Save message"
            >
                <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-gray-100 dark:border-white/10",
                    isSaved
                        ? "bg-pink-500 text-white shadow-pink-200"
                        : "bg-white dark:bg-[#2C2C2E] text-gray-400"
                )}>
                    <Heart className={cn("w-7 h-7", isSaved && "fill-current")} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold text-gray-400">저장하기</span>
            </button>

            {/* Share Button */}
            <button
                onClick={handleShareClick}
                className="group flex flex-col items-center justify-center gap-2 active:scale-90 transition-transform duration-200"
                aria-label="Share message"
            >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-[#2C2C2E] text-blue-500 shadow-sm border border-gray-100 dark:border-white/10">
                    {copied ? <Check className="w-7 h-7" /> : <Share className="w-7 h-7" strokeWidth={2.5} />}
                </div>
                <span className="text-xs font-bold text-gray-400">공유하기</span>
            </button>
        </div>
    );
}
