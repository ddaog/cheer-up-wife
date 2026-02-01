'use client';

import React, { useEffect, useState } from 'react';
import { MessageCard } from '@/components/MessageCard';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { useSettings } from '@/lib/hooks/useSettings';
import { messages } from '@/lib/data/messages';
import { Trash2 } from 'lucide-react';

export default function SavedPage() {
    const { settings } = useSettings();
    const [savedIds, setSavedIds] = useLocalStorage<string[]>('cheer-saved', []);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    // Filter messages to only show saved ones
    // We reverse to show newest first if we assume ids added chronologically, 
    // but better to just map.
    // Actually, let's show them in the order of `savedIds` (if we appended).
    // But searching messages by ID is needed.
    const savedMessages = savedIds
        .map(id => messages.find(m => m.id === id))
        .filter((m): m is typeof messages[0] => m !== undefined)
        .reverse(); // Show newest saved first

    const handleRemove = (id: string) => {
        setSavedIds(savedIds.filter(savedId => savedId !== id));
    };

    if (savedMessages.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Trash2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">보관함이 비었어요</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">마음에 드는 메시지를 저장해보세요.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">마음함</h1>
                <p className="text-gray-500 dark:text-gray-400">{savedMessages.length}개의 메시지가 저장되어 있어요.</p>
            </div>

            <div className="grid gap-6">
                {savedMessages.map((message) => (
                    <div key={message.id} className="relative group">
                        <MessageCard
                            message={message}
                            nickname={settings.nickname}
                            signature={settings.signature}
                        />
                        <button
                            onClick={() => handleRemove(message.id)}
                            className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-full text-gray-400 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                            aria-label="Remove from saved"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
