import { Message, Tone, Tag, Trimester } from '../data/messages';

// Simple pseudo-random number generator seeded with a string (date)
function seededRandom(seed: string) {
    let h = 0xdeadbeef;
    for (let i = 0; i < seed.length; i++) {
        h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
    }
    h = ((h ^ h >>> 16) >>> 0);
    return function () {
        h = Math.imul(h ^ (h >>> 13), 2246822507);
        h = Math.imul(h ^ (h >>> 15), 3266489909);
        return ((h = Math.imul(h ^ (h >>> 16), 2246822507)) >>> 0) / 4294967296;
    }
}

export function getTrimester(weeks: number): Trimester {
    if (weeks <= 13) return 'early';
    if (weeks <= 27) return 'middle';
    return 'late';
}

export function getTodaysMessage(messages: Message[], weeks: number): Message {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const rng = seededRandom(today);

    // Filter for relevant messages (Current Trimester + ALL)
    const currentTrimester = getTrimester(weeks);
    const candidates = messages.filter(m => m.trimester === currentTrimester || m.trimester === 'all');

    if (candidates.length === 0) return messages[0];

    const randomIndex = Math.floor(rng() * candidates.length);
    return candidates[randomIndex];
}

export function getRandomMessage(
    messages: Message[],
    currentTone?: Tone,
    selectedTags: Tag[] = [],
    weeks: number = 12,
    mbti: string = ''
): Message {
    let candidates = messages;

    // 1. Tags filtering (AND logic)
    if (selectedTags.length > 0) {
        candidates = candidates.filter(msg =>
            selectedTags.every(tag => msg.tags.includes(tag))
        );
    }

    // 2. Tone filtering (Optional override by manual selection)
    if (currentTone) {
        candidates = candidates.filter(msg => msg.tone === currentTone);
    }

    // 3. Trimester prioritization
    const currentTrimester = getTrimester(weeks);
    const trimesterMatches = candidates.filter(m => m.trimester === currentTrimester || m.trimester === 'all');

    // If we have matches for the current trimester, prefer them. Otherwise fallback to all candidates.
    let finalPool = trimesterMatches.length > 0 ? trimesterMatches : candidates;

    // 4. MBTI Weighting (Only if tone wasn't manually selected)
    // If the user didn't pick a specific tone, we can subtly bias the random selection based on MBTI
    if (!currentTone && mbti.length === 4) {
        const isThinking = mbti[2] === 'T'; // 3rd letter is T/F
        const isFeeling = mbti[2] === 'F';

        if (isThinking) {
            // T types prefer Calm/Rational messages. Boost 'calm' tone probability.
            // We do this by duplicating 'calm' messages in the pool or filtering. 
            // Let's try a softer approach: 70% chance to pick from 'calm', 30% random.
            const calmMessages = finalPool.filter(m => m.tone === 'calm');
            if (calmMessages.length > 0 && Math.random() < 0.6) {
                finalPool = calmMessages;
            }
        } else if (isFeeling) {
            // F types prefer Warm/Cheerful.
            const emotionalMessages = finalPool.filter(m => m.tone === 'warm' || m.tone === 'cheerful');
            if (emotionalMessages.length > 0 && Math.random() < 0.6) {
                finalPool = emotionalMessages;
            }
        }
    }

    // Fallback if filtering removed everything
    if (finalPool.length === 0) return messages[0];

    const randomIndex = Math.floor(Math.random() * finalPool.length);
    return finalPool[randomIndex];
}

export function formatMessage(content: string, nickname: string, signature: string): string {
    let text = content.replace(/{nickname}/g, nickname || '여보');
    text = text.replace(/{signature}/g, signature || '');
    return text.trim();
}
