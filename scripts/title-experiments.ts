// Phase 10: Title Experimentation Record
// Tracks proposed title/description experiments and their rationale
// DO NOT change anything here automatically — all changes require human review.
//
// Format:
//   slug:         tool identifier
//   currentTitle: what the page currently has
//   currentDesc:  current meta description
//   proposed:     experimental variant to test
//   reason:       evidence-based rationale
//   targetQuery:  the primary search intent this would target
//   status:       PROPOSED | TESTING | ACCEPTED | REJECTED
//   date:         when this was proposed

export const titleExperiments = [
  {
    slug: "cgpa-to-percentage",
    currentTitle: "CGPA to Percentage",
    currentDesc: "Convert your CGPA to a percentage using standard or custom formulas.",
    proposed: {
      title: "CGPA to Percentage Converter — Indian University Formula",
      description: "Convert your 10-point CGPA to percentage instantly. Uses the standard ×9.5 formula accepted by CBSE, VTU, AICTE, and most Indian universities."
    },
    reason: "Indian students specifically search for CBSE/VTU context. 'Converter' is a clearer action word than the noun-only title.",
    targetQuery: "cgpa to percentage conversion india",
    status: "PROPOSED",
    date: "2026-09-02"
  },
  {
    slug: "attendance-calculator",
    currentTitle: "Attendance Calculator",
    currentDesc: "Check if your attendance meets the minimum requirement.",
    proposed: {
      title: "Attendance Calculator — Classes You Need to Attend",
      description: "Find your current attendance percentage and see exactly how many classes you need to maintain 75% or any custom threshold."
    },
    reason: "Current description is vague. Surfacing '75%' (the most common threshold) in the snippet matches the intent of users checking if they're safe.",
    targetQuery: "how many classes do i need to attend to maintain 75 attendance",
    status: "PROPOSED",
    date: "2026-09-02"
  },
  {
    slug: "gpa-calculator",
    currentTitle: "GPA Calculator",
    currentDesc: "Calculate your semester GPA based on subject credits and grades.",
    proposed: {
      title: "GPA Calculator — Semester GPA from Credits & Grades",
      description: "Calculate your semester or cumulative GPA on a 4.0 scale. Enter your courses, credit hours, and grades — result updates instantly."
    },
    reason: "'4.0 scale' is the universally known term; adding it anchors the intent clearly. 'Updates instantly' reinforces the tool's interactive value.",
    targetQuery: "calculate my gpa 4.0 scale",
    status: "PROPOSED",
    date: "2026-09-02"
  },
  {
    slug: "percentage-change",
    currentTitle: "Percentage Change",
    currentDesc: "Calculate the percentage increase or decrease between two values.",
    proposed: {
      title: "Percentage Change Calculator — Increase or Decrease",
      description: "Calculate the exact percentage increase or decrease between two numbers. Shows whether the change is positive (growth) or negative (reduction)."
    },
    reason: "Adding 'Calculator' to the title aligns with how most tool-search queries are phrased. Explicit mention of both increase and decrease captures both intents.",
    targetQuery: "percentage increase calculator",
    status: "PROPOSED",
    date: "2026-09-02"
  },
  {
    slug: "standard-deviation",
    currentTitle: "Standard Deviation Calculator",
    currentDesc: "Calculate population or sample standard deviation from a dataset.",
    proposed: {
      title: "Standard Deviation Calculator — Population & Sample",
      description: "Enter a list of numbers and compute both population (σ) and sample (s) standard deviation. Shows mean, variance, and step-by-step results."
    },
    reason: "Many students specifically search for 'sample standard deviation' vs 'population standard deviation'. Mentioning both in the description targets both intents. 'Step-by-step' is a highly converting phrase for educational tools.",
    targetQuery: "sample standard deviation calculator",
    status: "PROPOSED",
    date: "2026-09-02"
  }
];
