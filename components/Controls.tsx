import React from 'react';
import { Tone, Tag } from '@/lib/data/messages';
import { cn } from '@/lib/utils';
import { Sun, MessageCircleHeart, Smile } from 'lucide-react';

interface ControlsProps {
    currentTone: Tone;
    setTone: (tone: Tone) => void;
    selectedTags: Tag[];
    toggleTag: (tag: Tag) => void;
}

const TONES: { value: Tone; label: string; icon: React.ReactNode }[] = [
    { value: 'calm', label: '담백', icon: <Sun className="w-4 h-4" /> },
    { value: 'warm', label: '다정', icon: <MessageCircleHeart className="w-4 h-4" /> },
    { value: 'cheerful', label: '유쾌', icon: <Smile className="w-4 h-4" /> },
];

const TAGS: { value: Tag; label: string }[] = [
    { value: 'condition', label: '컨디션' },
    { value: 'hospital', label: '병원' },
    { value: 'food', label: '식사' },
    { value: 'sleep', label: '수면' },
    { value: 'emotion', label: '감정' },
    { value: 'prep', label: '출산준비' },
];

export function Controls({ currentTone, setTone, selectedTags, toggleTag }: ControlsProps) {
    return (
        <div className="space-y-6 w-full mx-auto">
            {/* iOS Segmented Control */}
            <div className="bg-gray-200/80 dark:bg-zinc-800 p-1 rounded-lg flex relative">
                {TONES.map((tone) => {
                    const isSelected = currentTone === tone.value;
                    return (
                        <button
                            key={tone.value}
                            onClick={() => setTone(tone.value)}
                            className={cn(
                                "flex-1 py-1.5 flex items-center justify-center gap-1.5 text-[13px] font-semibold rounded-[7px] transition-all duration-200",
                                isSelected
                                    ? "bg-white dark:bg-gray-600 text-black dark:text-white shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                            )}
                        >
                            <span className={cn(isSelected ? "opacity-100" : "opacity-70")}>{tone.icon}</span>
                            {tone.label}
                        </button>
                    );
                })}
            </div>

            {/* Tag Chips */}
            <div className="flex flex-wrap gap-2.5 justify-center">
                {TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag.value);
                    return (
                        <button
                            key={tag.value}
                            onClick={() => toggleTag(tag.value)}
                            className={cn(
                                "px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 active:scale-95",
                                isSelected
                                    ? "bg-blue-500 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/40 border border-transparent"
                                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                            )}
                        >
                            #{tag.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
