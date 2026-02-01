'use client';

import React, { useState, useEffect } from 'react';
import { MessageCard } from '@/components/MessageCard';
import { Controls } from '@/components/Controls';
import { ActionButtons } from '@/components/ActionButtons';
import { useSettings } from '@/lib/hooks/useSettings';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { getTodaysMessage, getRandomMessage } from '@/lib/utils/random';
import { messages, Tone, Tag } from '@/lib/data/messages';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { settings } = useSettings();
  const [savedIds, setSavedIds] = useLocalStorage<string[]>('cheer-saved', []);
  const [isClient, setIsClient] = useState(false);

  // State for generator
  const [currentTone, setTone] = useState<Tone>('warm');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [currentMessage, setCurrentMessage] = useState(() => messages[0]); // Default initial

  // Hydration fix
  useEffect(() => {
    setIsClient(true);
    setCurrentMessage(getRandomMessage(messages, 'warm', []));
  }, []);

  const toggleTag = (tag: Tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleNewMessage = () => {
    const nextMsg = getRandomMessage(messages, currentTone, selectedTags, settings.pregnancyWeek);
    setCurrentMessage(nextMsg);
  };

  const handleSave = () => {
    if (savedIds.includes(currentMessage.id)) {
      setSavedIds(savedIds.filter(id => id !== currentMessage.id));
    } else {
      setSavedIds([...savedIds, currentMessage.id]);
    }
  };

  if (!isClient) return null; // Avoid hydration mismatch

  const todaysMessage = getTodaysMessage(messages, settings.pregnancyWeek || 12);
  const isSaved = savedIds.includes(currentMessage.id);

  return (
    <div className="space-y-12">
      {/* Today's Message Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>오늘의 메시지</span>
        </div>
        <MessageCard
          message={todaysMessage}
          nickname={settings.nickname}
          signature={settings.signature}
          className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-none shadow-lg"
        />
      </section>

      {/* Main Generator Section */}
      <section className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            당신을 위한 한마디
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">기분과 상황에 맞춰 메시지를 찾아보세요.</p>
        </div>

        <Controls
          currentTone={currentTone}
          setTone={setTone}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
        />

        <div className="relative">
          <MessageCard
            message={currentMessage}
            nickname={settings.nickname}
            signature={settings.signature}
          />
        </div>

        <ActionButtons
          message={currentMessage}
          isSaved={isSaved}
          onSave={handleSave}
          onNewMessage={handleNewMessage}
          nickname={settings.nickname}
        />
      </section>
    </div>
  );
}
