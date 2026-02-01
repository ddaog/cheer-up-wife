import React from 'react';
import { Message } from '@/lib/data/messages';
import { formatMessage } from '@/lib/utils/random';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface MessageCardProps {
    message: Message;
    nickname: string;
    signature: string;
    className?: string;
}

export function MessageCard({ message, nickname, signature, className }: MessageCardProps) {
    const formattedText = formatMessage(message.content, nickname, signature);

    // iOS System Gradients for subtle background
    const gradientHint = {
        calm: "from-blue-100/30 to-transparent dark:from-blue-900/20",
        warm: "from-orange-100/30 to-transparent dark:from-orange-900/20",
        cheerful: "from-yellow-100/30 to-transparent dark:from-yellow-900/20"
    };

    return (
        <div className={cn(
            "relative overflow-hidden rounded-[26px] p-8",
            "bg-white dark:bg-[#1C1C1E]", // iOS System Background
            "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-black/50", // Soft, diffuse shadow
            "flex flex-col items-center justify-center text-center min-h-[380px]",
            "border border-black/5 dark:border-white/5", // Ultra subtle border
            "transition-all duration-300 active:scale-[0.98]", // Spring animation on press
            className
        )}>
            {/* Subtle Gradient Wash */}
            <div className={cn("absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-100", gradientHint[message.tone])} />

            {/* Icon */}
            <Quote className="w-10 h-10 text-gray-400/80 dark:text-gray-500/80 mb-6" />

            {/* Typography: SF Pro Display style */}
            <div className="relative z-10 max-w-xs mx-auto space-y-8">
                <p className="text-[1.85rem] leading-[1.35] font-semibold text-black dark:text-white break-keep tracking-tight text-balance">
                    {formattedText}
                </p>

                {signature && (
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-[2px] bg-gray-200 dark:bg-gray-700 rounded-full" />
                        <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            {signature}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
