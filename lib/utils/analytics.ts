export const GA_TRACKING_ID = 'G-JXGH4P99G3';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
            service_name: 'cheer-up-wife',
        });
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, ...params }: any) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
            service_name: 'cheer-up-wife',
            ...params,
        });
    }
};

// Custom event for button clicks as requested
export const trackClick = (buttonName: string, type: 'button' | 'link' = 'button') => {
    event({
        action: type === 'button' ? 'button_click' : 'link_click',
        category: 'interaction',
        label: buttonName,
        button_name: buttonName,
    });
};

declare global {
    interface Window {
        gtag: any;
        dataLayer: any;
    }
}
