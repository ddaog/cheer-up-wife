import { useLocalStorage } from './useLocalStorage';

export interface Settings {
    nickname: string;
    signature: string;
    pregnancyWeek: number; // 1 to 40
}

export const DEFAULT_SETTINGS: Settings = {
    nickname: '여보',
    signature: '',
    pregnancyWeek: 12, // Default to end of first trimester
};

export function useSettings() {
    const [settings, setSettings] = useLocalStorage<Settings>('cheer-settings', DEFAULT_SETTINGS);

    const updateSettings = (newSettings: Partial<Settings>) => {
        setSettings((prev) => ({ ...prev, ...newSettings }));
    };

    return { settings, updateSettings };
}
