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
  const { settings, updateSettings } = useSettings();
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
  // We initialize tone as undefined so MBTI logic takes precedence by default
  const [currentTone, setTone] = useState<Tone | undefined>(undefined);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [currentMessage, setCurrentMessage] = useState(() => messages[0]); // Default initial

  // Hydration fix & Auto-refresh on MBTI change
  useEffect(() => {
    setIsClient(true);
    // Refresh message if MBTI changes (and it's not the initial mount)
    // We pass settings.mbti to getRandomMessage to ensure weighting is applied
    const msg = getRandomMessage(messages, undefined, [], settings.pregnancyWeek, settings.mbti);
    setCurrentMessage(msg);
  }, [settings.mbti, settings.pregnancyWeek]);

  const toggleTag = (tag: Tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleNewMessage = () => {
    // Pass currentTone (which is undefined by default) so getRandomMessage uses MBTI logic
    const nextMsg = getRandomMessage(messages, currentTone, selectedTags, settings.pregnancyWeek, settings.mbti);
    setCurrentMessage(nextMsg);
  };

  // Share functionality
  const handleShare = async () => {
    try {
      const shareData = {
        title: '남편의 응원 메시지',
        text: currentMessage.content,
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(currentMessage.content);
        // Optional: you could add a toast state here if you want to verify copy success
        // For now, simpler is better to avoid complex state
      }
    } catch (error) {
      console.error('Sharing failed', error);
    }
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

      {/* Quick Week Selector */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => {
            const currentWeek = settings.pregnancyWeek || 12;
            if (currentWeek > 1) {
              updateSettings({ pregnancyWeek: currentWeek - 1 });
            }
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#1C1C1E] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 active:scale-95 transition-all"
        >
          -
        </button>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
            임신 {settings.pregnancyWeek || 12}주차
          </span>
          <span className="text-[10px] text-gray-400">
            {getTodaysMessage(messages, settings.pregnancyWeek || 12).trimester === 'early' ? '초기' :
              getTodaysMessage(messages, settings.pregnancyWeek || 12).trimester === 'middle' ? '중기' : '후기'}
          </span>
        </div>
        <button
          onClick={() => {
            const currentWeek = settings.pregnancyWeek || 12;
            if (currentWeek < 42) {
              updateSettings({ pregnancyWeek: currentWeek + 1 });
            }
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#1C1C1E] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 active:scale-95 transition-all"
        >
          +
        </button>
      </div>
      {/* Quick MBTI Toggle */}
      <div className="flex justify-between items-center bg-white dark:bg-[#1C1C1E] p-1.5 rounded-full border border-gray-100 dark:border-white/5 mb-6 mx-auto w-full max-w-[280px] shadow-sm relative z-10">
        <button
          onClick={() => {
            let newMbti = settings.mbti || 'ISTJ';
            if (!newMbti.match(/[TF]/)) newMbti = 'ISTJ';
            updateSettings({ mbti: newMbti.replace(/[TF]/, 'T') });
          }}
          className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${settings.mbti.includes('T') ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm' : 'text-gray-400 opacity-70'}`}
        >
          T (해결책) 🛠️
        </button>
        <button
          onClick={() => {
            let newMbti = settings.mbti || 'ISFJ';
            if (!newMbti.match(/[TF]/)) newMbti = 'ISFJ';
            updateSettings({ mbti: newMbti.replace(/[TF]/, 'F') });
          }}
          className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${settings.mbti.includes('F') ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300 shadow-sm' : 'text-gray-400 opacity-70'}`}
        >
          F (공감) ❤️
        </button>
      </div>

      {/* Main Card Section */}
      <section className="flex flex-col flex-1 justify-center relative z-0 min-h-[500px]">
        <div className="relative">
          {currentMessage && currentMessage.tone ? (
            <MessageCard
              message={currentMessage}
              nickname={settings.nickname}
              signature={settings.signature}
              onClick={handleNewMessage}
            />
          ) : (
            <div className="p-8 text-center bg-gray-100 rounded-2xl dark:bg-gray-800 animate-pulse">
              <p className="text-gray-500">컨닝페이퍼 찾는 중...</p>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-4 animate-bounce">
            👆 카드를 눌러서 다음 장 넘기기
          </p>
        </div>

        <ActionButtons
          onSave={handleSave}
          isSaved={isSaved}
          onShare={handleShare}
        />
      </section>
    </div>
  );
}
