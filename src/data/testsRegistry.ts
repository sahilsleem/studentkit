export interface Test {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  timeEstimate: string;
  questionsCount: number;
}

export const testsRegistry: Test[] = [
  {
    id: "iq-reasoning-test",
    title: "Online IQ & Reasoning Test",
    description: "Measure numerical, logical, verbal, pattern recognition, spatial, and working memory reasoning abilities with our free online cognitive assessment.",
    slug: "iq-test",
    icon: "brain",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  },
  {
    id: "logical-reasoning-test",
    title: "Logical Reasoning Test",
    description: "Evaluate your pattern recognition, deductive logic, and problem-solving abilities.",
    slug: "logical-reasoning",
    icon: "logic",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  },
  {
    id: "numerical-reasoning-test",
    title: "Numerical Reasoning Test",
    description: "Test your speed and accuracy with sequences, percentages, ratios, arithmetic, and quantitative problems.",
    slug: "numerical-reasoning",
    icon: "calculator",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  },
  {
    id: "verbal-reasoning-test",
    title: "Verbal Reasoning Test",
    description: "Evaluate your word relationships, verbal logic, reading comprehension, and deductive reasoning.",
    slug: "verbal-reasoning",
    icon: "book",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  },
  {
    id: "spatial-reasoning-test",
    title: "Spatial Reasoning Test",
    description: "Measure mental rotation, 2D/3D transformations, cube folding, and visual-spatial reasoning.",
    slug: "spatial-reasoning",
    icon: "cube",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  },
  {
    id: "memory-test",
    title: "Memory Test",
    description: "Assess short-term memory, working memory, sequence recall, pattern recognition, and spatial positioning.",
    slug: "memory",
    icon: "memory",
    timeEstimate: "~20 minutes",
    questionsCount: 30
  }
];
