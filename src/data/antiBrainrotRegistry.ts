export interface AntiBrainrotModule {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  duration: string;
  badge?: string;
  icon: string;
  status: 'active' | 'coming-soon';
}

export const antiBrainrotModules: AntiBrainrotModule[] = [
  {
    id: 'quick-math',
    slug: 'quick-math',
    title: 'Quick Math',
    tagline: 'Rapid mental arithmetic under pressure.',
    description: 'Solve arithmetic calculations against a tight per-question timer. Adapts dynamically to your speed and accuracy.',
    skills: ['Mental Speed', 'Working Memory', 'Calculation'],
    duration: '30 Questions • ~3 Mins',
    badge: 'Flagship',
    icon: 'lightning',
    status: 'active'
  },
  {
    id: 'focus-challenge',
    slug: 'focus-challenge',
    title: 'Focus Challenge',
    tagline: 'Sustained attention and distraction resistance.',
    description: 'Practice staying anchored with a single uninterrupted task for 5, 10, 15, or 20 minutes without context-switching.',
    skills: ['Sustained Focus', 'Impulse Control', 'Deep Work'],
    duration: '5–20 Mins',
    icon: 'target',
    status: 'active'
  },
  {
    id: 'attention-challenge',
    slug: 'attention-challenge',
    title: 'Attention Challenge',
    tagline: 'Visual discrimination and noticing what matters.',
    description: 'Fast visual discrimination drills: spot subtle pattern changes, identify anomalies, and filter out visual noise against tight per-round timers.',
    skills: ['Visual Discrimination', 'Selective Attention', 'Detail Recall'],
    duration: '30 Rounds • ~3 Mins',
    icon: 'eye',
    status: 'active'
  },
  {
    id: 'working-memory',
    slug: 'working-memory',
    title: 'Working Memory',
    tagline: 'Hold and manipulate information in your head.',
    description: 'Progressively challenging digit and letter spans, reverse sequences, and mental updating tasks that scale with your capacity.',
    skills: ['Working Memory', 'Mental Manipulation', 'Sequence Recall'],
    duration: '20 Tasks • ~4 Mins',
    icon: 'cpu',
    status: 'active'
  },
  {
    id: 'memory-challenge',
    slug: 'memory-challenge',
    title: 'Memory Challenge',
    tagline: 'Visual patterns, spatial grids, and order memory.',
    description: 'Memorize visual grids, shape configurations, and item orders before they disappear from view.',
    skills: ['Spatial Memory', 'Pattern Retention', 'Recall Speed'],
    duration: '20 Tasks • ~5 Mins',
    icon: 'grid',
    status: 'active'
  },
  {
    id: 'mental-math',
    slug: 'mental-math',
    title: 'Mental Math',
    tagline: 'Advanced percentages, ratios, and estimation.',
    description: 'Go beyond basic arithmetic with mental percentage shortcuts, fraction-decimal conversions, proportions, and algebraic tricks.',
    skills: ['Quantitative Logic', 'Estimation', 'Shortcuts'],
    duration: '25 Tasks · ~5 Mins',
    icon: 'calculator',
    status: 'active'
  }
];

export function getAntiBrainrotModule(slug: string): AntiBrainrotModule | undefined {
  return antiBrainrotModules.find((m) => m.slug === slug);
}
