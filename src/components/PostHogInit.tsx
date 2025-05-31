'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';

export default function PostHogInit() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !posthog.__loaded) {
      posthog.init('YOUR_POSTHOG_API_KEY', {
        api_host: 'https://app.posthog.com',
      });
    }
  }, []);
  return null;
}
