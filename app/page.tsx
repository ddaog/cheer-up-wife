'use client';

import React, { useState, useEffect } from 'react';
import { MessageCard } from '@/components/MessageCard';
import { Controls } from '@/components/Controls';
import { ActionButtons } from '@/components/ActionButtons';
import { useSettings } from '@/lib/hooks/useSettings';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { getTodaysMessage, getRandomMessage } from '@/lib/utils/random';
import { messages, Tone, Tag } from '@/lib/data/messages';
import { Onboarding } from '@/components/Onboarding';
import { Sparkles, Settings as SettingsIcon } from 'lucide-react';

export default function Home() {
  const { settings } = useSettings();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [savedIds, setSavedIds] = useLocalStorage<string[]>('cheer-saved', []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if onboarding is needed (empty nickname implies new user)
    // We use a small timeout to let settings load from localStorage
    if (!settings.nickname) {
      setShowOnboarding(true);
    }
  }, [settings.nickname]);

  // If onboarding takes place, we refresh the page or state after completion
  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    // Force reload/re-render might be needed to apply settings instantly to randomizer
    window.location.reload();
  };


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
    const nextMsg = getRandomMessage(messages, currentTone, selectedTags, settings.pregnancyWeek, settings.mbti);
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

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const todaysMessage = getTodaysMessage(messages, settings.pregnancyWeek || 12);
  const isSaved = savedIds.includes(currentMessage.id);

  // MBTI Logic for Badge
  const mbti = settings.mbti || '';
  const isT = mbti.includes('T');
  const isF = mbti.includes('F');

  // Decide badge text and color based on MBTI
  let badgeText = '아내 맞춤 설정';
  let badgeColor = 'bg-gray-100 text-gray-500';

  if (mbti.length === 4) {
    badgeText = `${mbti} 아내 맞춤 설정`;
    if (isT) {
      badgeText += ' (논리형)';
      badgeColor = 'bg-blue-50 text-blue-600 border border-blue-100';
    } else if (isF) {
      badgeText += ' (공감형)';
      badgeColor = 'bg-pink-50 text-pink-600 border border-pink-100';
    }
  }

  return (
    <div className="space-y-6">

      {/* MBTI Badge */}
      <div className="flex justify-center -mt-2 mb-4">
        <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${badgeColor} flex items-center gap-1.5 transition-all`}>
          <SettingsIcon className="w-3.5 h-3.5" />
          {badgeText}
        </span>
      </div>
      {/* Today's Message Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>오늘의 메시지</span>
        </div>
        {todaysMessage ? (
          <MessageCard
            message={todaysMessage}
            nickname={settings.nickname}
            signature={settings.signature}
            className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-none shadow-lg"
          />
        ) : null}
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
          <div className="relative">
            {currentMessage && currentMessage.tone ? (
              <MessageCard
                message={currentMessage}
                nickname={settings.nickname}
                signature={settings.signature}
              />
            ) : (
              <div className="p-8 text-center bg-gray-100 rounded-2xl dark:bg-gray-800">
                <p className="text-gray-500">메시지를 불러오고 있어요...</p>
              </div>
            )}
          </div>
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
