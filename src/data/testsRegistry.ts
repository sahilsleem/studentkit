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
  }
];
