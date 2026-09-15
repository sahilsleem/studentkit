export interface FocusDurationOption {
  minutes: number;
  label: string;
  description: string;
  recommendedFor: string;
}

export const focusDurations: FocusDurationOption[] = [
  { minutes: 5, label: '5 Minutes', description: 'Quick reset to clear mental clutter between study tasks.', recommendedFor: 'Beginner / Rapid Reset' },
  { minutes: 10, label: '10 Minutes', description: 'Standard attention anchor. Solid distraction-free interval.', recommendedFor: 'Recommended Daily' },
  { minutes: 15, label: '15 Minutes', description: 'Deep single-tasking session. Train sustained focus stamina.', recommendedFor: 'Deep Focus' },
  { minutes: 20, label: '20 Minutes', description: 'High-intensity focus block without phone or tab-switching.', recommendedFor: 'Mastery' }
];

export const focusQuotes = [
  "Where your attention goes, your learning grows.",
  "Distraction is costly. Single-tasking is an unfair advantage.",
  "Deep focus is a trainable muscle, not a personality trait.",
  "One task. One breath. Complete attention."
];
