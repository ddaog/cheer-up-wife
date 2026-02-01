'use client';

import React from 'react';
import { SettingsForm } from '@/components/SettingsForm';

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">설정</h1>
                <p className="text-gray-500 dark:text-gray-400">메시지에 들어갈 애칭과 서명을 설정해주세요.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <SettingsForm />
            </div>
        </div>
    );
}
