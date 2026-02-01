import React, { useState } from 'react';
import { Heart, Share, RotateCw, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/lib/data/messages';

interface ActionButtonsProps {
    onNewMessage: () => void;
    onSave: () => void;
    isSaved: boolean;
    message: Message;
    nickname: string;
}

export function ActionButtons({ onNewMessage, onSave, isSaved, message }: ActionButtonsProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: '남편의 응원 메시지',
                    text: message.content,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(message.content);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (error) {
            console.error('Sharing failed', error);
        }
    };

    return (
        <div className="flex items-center justify-center gap-5 mt-6 pb-4">
            {/* Save Button */}
            <button
                onClick={onSave}
                className="group relative flex flex-col items-center justify-center gap-1 active:scale-90 transition-transform duration-200"
                aria-label="Save message"
            >
                <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                    isSaved
                        ? "bg-pink-500 text-white shadow-pink-200 dark:shadow-pink-900/30"
                        : "bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                )}>
                    <Heart className={cn("w-6 h-6", isSaved && "fill-current")} />
                </div>
                <span className="text-[11px] font-medium text-gray-400">저장</span>
            </button>

            {/* Main Action: New Message */}
            <button
                onClick={onNewMessage}
                className={cn(
                    "h-14 px-10 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200",
                    "bg-[#007AFF] text-white hover:bg-[#0071E3]"
                )}
            >
                <RotateCw className="w-5 h-5" />
                <span className="text-[17px]">새로운 메시지</span>
            </button>

            {/* Share Button */}
            <button
                onClick={handleShare}
                className="group relative flex flex-col items-center justify-center gap-1 active:scale-90 transition-transform duration-200"
                aria-label="Share message"
            >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-500 shadow-sm">
                    {copied ? <Check className="w-6 h-6" /> : <Share className="w-6 h-6" />}
                </div>
                <span className="text-[11px] font-medium text-gray-400">공유</span>
            </button>
        </div>
    );
}
