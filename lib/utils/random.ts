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
    weeks: number = 12
): Message {
    let candidates = messages;

    const currentTrimester = getTrimester(weeks);

    // 1. Filter by tone if selected
    if (currentTone) {
        candidates = candidates.filter(m => m.tone === currentTone);
    }

    // 2. Filter by tags if selected
    if (selectedTags.length > 0) {
        const tagFiltered = candidates.filter(m =>
            m.tags.some(tag => selectedTags.includes(tag))
        );
        if (tagFiltered.length > 0) {
            candidates = tagFiltered;
        }
    }

    // 3. Weighting: Prioritize current trimester logic
    // Instead of hard filtering, we'll try to pick a relevant one if available.
    const relevantCandidates = candidates.filter(m => m.trimester === currentTrimester || m.trimester === 'all');

    // If we have relevant candidates containing the tone/tags, use them.
    // Otherwise fall back to any candidate matching tone/tags
    const finalPool = relevantCandidates.length > 0 ? relevantCandidates : candidates;

    if (finalPool.length === 0) return messages[0];

    const randomIndex = Math.floor(Math.random() * finalPool.length);
    return finalPool[randomIndex];
}

export function formatMessage(content: string, nickname: string, signature: string): string {
    let text = content.replace(/{nickname}/g, nickname || '여보');
    text = text.replace(/{signature}/g, signature || '');
    return text.trim();
}
