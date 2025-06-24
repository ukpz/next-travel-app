// lib/constants/loadingKeys.ts

export const LOADING_KEYS = ['main', 'auth', 'flight', 'booking','transfer'] as const;

export type LoadingKey = typeof LOADING_KEYS[number];
