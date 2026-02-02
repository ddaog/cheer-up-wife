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
    onClick?: () => void;
}

export function MessageCard({ message, nickname, signature, className, onClick }: MessageCardProps) {
    const formattedText = formatMessage(message.content, nickname, signature);

    return (
        <div
            onClick={onClick}
            className={cn(
                "relative overflow-hidden p-10 min-h-[420px]",
                "flex flex-col items-center justify-center text-center",
                "cursor-pointer active:scale-[0.98] transition-all duration-200",
                "shadow-xl shadow-black/5 rotate-1 hover:rotate-0", // Slight tilt for realism
                className
            )}>
            {/* Crumpled Paper Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: "url('/paper-texture.png')" }}
            />
            {/* Paper Overlay for Tint (Optional) */}
            <div className="absolute inset-0 z-0 bg-white/40 dark:bg-black/10 mix-blend-multiply" />

            {/* Content */}
            <div className="relative z-10 max-w-xs mx-auto space-y-8">
                {/* Handwritten-style Quote Icon */}
                <Quote className="w-8 h-8 text-gray-800/40 mx-auto" strokeWidth={3} />

                <p className="text-[1.7rem] leading-[1.5] font-serif font-medium text-gray-800 dark:text-gray-900 break-keep tracking-tight text-balance decoration-clone">
                    {formattedText}
                </p>

                {signature && (
                    <div className="flex flex-col items-center gap-2 pt-4">
                        <div className="w-12 h-[1px] bg-gray-400 rotate-2" />
                        <p className="text-[14px] font-serif text-gray-500 italic">
                            {signature}
                        </p>
                    </div>
                )}
            </div>

            {/* Corner Fold Effect (CSS hack or SVG) */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 shadow-md transform rotate-45 translate-x-6 -translate-y-6" />
        </div>
    );
}
