export interface SpatialQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  stimulusSvg?: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const spatialQuestions = [
  {
    "id": "spat-001",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which figure represents the target shape after a 90° clockwise rotation?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <path d=\"M35 25v50h30v-15h-15v-35z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/>\n      <circle cx=\"60\" cy=\"35\" r=\"5\" fill=\"#f59e0b\" stroke=\"#d97706\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 65v-50h-30v15h15v35z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/><circle cx=\"30\" cy=\"55\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M65 35h-50v30h15v-15h35z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/><circle cx=\"55\" cy=\"60\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M15 45h50v-30h-15v15h-35z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M45 25v50h-30v-15h15v-35z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/><circle cx=\"20\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rotating the L-shape 90° clockwise points its horizontal arm downwards on the left, and moves the yellow dot from upper-right to lower-right."
  },
  {
    "id": "spat-002",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which figure is identical to the target shape, merely rotated in the 2D plane?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <path d=\"M50 20l25 30h-15v30h-20v-30h-15z\" fill=\"#3b82f6\" stroke=\"#2563eb\"/>\n      <circle cx=\"65\" cy=\"60\" r=\"5\" fill=\"#ef4444\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M50 60l-25-30h15v-30h20v30h15z\" fill=\"#3b82f6\" stroke=\"#2563eb\"/><circle cx=\"62\" cy=\"25\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M50 60l-25-30h15v-30h20v30h15z\" fill=\"#3b82f6\" stroke=\"#2563eb\"/><circle cx=\"28\" cy=\"25\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M20 50l30 25v-15h30v-20h-30v-15z\" fill=\"#3b82f6\" stroke=\"#2563eb\"/><circle cx=\"60\" cy=\"25\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M60 50l-30-25v15h-30v20h30v15z\" fill=\"#3b82f6\" stroke=\"#2563eb\"/><circle cx=\"25\" cy=\"60\" r=\"4\" fill=\"#ef4444\"/></svg>"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "When the upward arrow is rotated 180°, the red dot which was on the right side of the stem remains on the right side relative to the arrow's heading (appearing on the left side of the downward-facing arrow in 2D plane)."
  },
  {
    "id": "spat-003",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which figure shows the target quadrant circle after a 180° rotation?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <circle cx=\"50\" cy=\"50\" r=\"35\" stroke=\"#334155\" stroke-width=\"2\" fill=\"#ffffff\"/>\n      <path d=\"M50 15 A35 35 0 0 0 15 50 L50 50 Z\" fill=\"#334155\"/>\n      <circle cx=\"68\" cy=\"32\" r=\"5\" fill=\"#4f46e5\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><circle cx=\"40\" cy=\"40\" r=\"28\" stroke=\"#334155\" stroke-width=\"2\" fill=\"#ffffff\"/><path d=\"M40 12 A28 28 0 0 1 68 40 L40 40 Z\" fill=\"#334155\"/><circle cx=\"24\" cy=\"56\" r=\"4\" fill=\"#4f46e5\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><circle cx=\"40\" cy=\"40\" r=\"28\" stroke=\"#334155\" stroke-width=\"2\" fill=\"#ffffff\"/><path d=\"M40 68 A28 28 0 0 1 12 40 L40 40 Z\" fill=\"#334155\"/><circle cx=\"56\" cy=\"24\" r=\"4\" fill=\"#4f46e5\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><circle cx=\"40\" cy=\"40\" r=\"28\" stroke=\"#334155\" stroke-width=\"2\" fill=\"#ffffff\"/><path d=\"M40 68 A28 28 0 0 0 68 40 L40 40 Z\" fill=\"#334155\"/><circle cx=\"24\" cy=\"56\" r=\"4\" fill=\"#4f46e5\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><circle cx=\"40\" cy=\"40\" r=\"28\" stroke=\"#334155\" stroke-width=\"2\" fill=\"#ffffff\"/><path d=\"M40 12 A28 28 0 0 0 12 40 L40 40 Z\" fill=\"#334155\"/><circle cx=\"56\" cy=\"56\" r=\"4\" fill=\"#4f46e5\"/></svg>"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rotating 180° moves the top-left dark quadrant to the bottom-right, and shifts the indigo dot from top-right to bottom-left."
  },
  {
    "id": "spat-004",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which figure represents a 90° counter-clockwise rotation of the target?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <polygon points=\"30,75 75,75 30,30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n      <rect x=\"25\" y=\"70\" width=\"10\" height=\"10\" fill=\"#4f46e5\"/>\n      <circle cx=\"30\" cy=\"30\" r=\"5\" fill=\"#ef4444\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><polygon points=\"20,20 20,60 60,20\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><rect x=\"15\" y=\"15\" width=\"10\" height=\"10\" fill=\"#4f46e5\"/><circle cx=\"20\" cy=\"60\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><polygon points=\"60,60 60,20 20,60\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><rect x=\"55\" y=\"55\" width=\"10\" height=\"10\" fill=\"#4f46e5\"/><circle cx=\"60\" cy=\"20\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><polygon points=\"20,60 60,60 60,20\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><rect x=\"55\" y=\"55\" width=\"10\" height=\"10\" fill=\"#4f46e5\"/><circle cx=\"20\" cy=\"60\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><polygon points=\"20,20 60,20 60,60\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><rect x=\"55\" y=\"15\" width=\"10\" height=\"10\" fill=\"#4f46e5\"/><circle cx=\"20\" cy=\"20\" r=\"4\" fill=\"#ef4444\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A 90° counter-clockwise rotation rotates the horizontal base to the right vertical edge, placing the square 90° corner at the top-left, with the red circle pointing downward."
  },
  {
    "id": "spat-005",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Three of the options can be created by rotating the target in 2D space. Which option CANNOT be formed by pure 2D rotation (is a mirror reflection)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <circle cx=\"50\" cy=\"50\" r=\"28\" stroke=\"#475569\" stroke-dasharray=\"3,3\"/>\n      <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"25\" stroke=\"#4f46e5\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"50\" cy=\"25\" r=\"4\" fill=\"#4f46e5\"/>\n      <line x1=\"50\" y1=\"50\" x2=\"72\" y2=\"62\" stroke=\"#0ea5e9\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n      <polygon points=\"72,62 65,58 68,52\" fill=\"#0ea5e9\"/>\n      <line x1=\"50\" y1=\"50\" x2=\"28\" y2=\"62\" stroke=\"#ef4444\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><line x1=\"40\" y1=\"40\" x2=\"60\" y2=\"40\" stroke=\"#4f46e5\" stroke-width=\"3\"/><circle cx=\"60\" cy=\"40\" r=\"3\" fill=\"#4f46e5\"/><line x1=\"40\" y1=\"40\" x2=\"30\" y2=\"58\" stroke=\"#0ea5e9\" stroke-width=\"3\"/><line x1=\"40\" y1=\"40\" x2=\"30\" y2=\"22\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"60\" stroke=\"#4f46e5\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"60\" r=\"3\" fill=\"#4f46e5\"/><line x1=\"40\" y1=\"40\" x2=\"22\" y2=\"30\" stroke=\"#0ea5e9\" stroke-width=\"3\"/><line x1=\"40\" y1=\"40\" x2=\"58\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"20\" stroke=\"#4f46e5\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"20\" r=\"3\" fill=\"#4f46e5\"/><line x1=\"40\" y1=\"40\" x2=\"22\" y2=\"50\" stroke=\"#0ea5e9\" stroke-width=\"3\"/><line x1=\"40\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><line x1=\"40\" y1=\"40\" x2=\"20\" y2=\"40\" stroke=\"#4f46e5\" stroke-width=\"3\"/><circle cx=\"20\" cy=\"40\" r=\"3\" fill=\"#4f46e5\"/><line x1=\"40\" y1=\"40\" x2=\"50\" y2=\"22\" stroke=\"#0ea5e9\" stroke-width=\"3\"/><line x1=\"40\" y1=\"40\" x2=\"50\" y2=\"58\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the original target, moving clockwise from the circle arm leads to the blue arrow arm. In Option C, moving clockwise leads to the red arm instead, making it a mirror reflection rather than a pure 2D rotation."
  },
  {
    "id": "spat-006",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "A 3D upright letter 'F' is positioned facing North (+Y). It is rotated 90° clockwise around the vertical Z-axis (now facing East), and then rotated 90° forward around the horizontal X-axis (pitch forward). Where does the top horizontal arm of the 'F' point now?",
    "options": [
      "Pointing East along the horizontal plane",
      "Pointing downward along the vertical plane",
      "Pointing South along the horizontal plane",
      "Pointing North along the horizontal plane"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "After rotation around Z, the top arm points East (+X). The subsequent forward rotation occurs around the X-axis itself; therefore, any vector lying along the X-axis (East) is unaffected and continues pointing East."
  },
  {
    "id": "spat-007",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-008",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-009",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-010",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-011",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-012",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-013",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-014",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-015",
    "category": "Mental Rotation & Orientation",
    "difficulty": "easy",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-016",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-017",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-018",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-019",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-020",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-021",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-022",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-023",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-024",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-025",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-026",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-027",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-028",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-029",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-030",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-031",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-032",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-033",
    "category": "Mental Rotation & Orientation",
    "difficulty": "medium",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-034",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-035",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-036",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-037",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-038",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-039",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-040",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-041",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-042",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-043",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-044",
    "category": "Mental Rotation & Orientation",
    "difficulty": "hard",
    "question": "Which option represents the upward arrow rotated 90° clockwise?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M50 20 L75 50 L60 50 L60 75 L40 75 L40 50 L25 50 Z\" fill=\"#4f46e5\" stroke=\"#4338ca\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(90 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(180 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(270 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><g transform=\"rotate(45 40 40)\"><path d=\"M40 15 L60 40 L48 40 L48 65 L32 65 L32 40 L20 40 Z\" fill=\"#4f46e5\"/></g></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating the arrow 90° clockwise points it directly to the right."
  },
  {
    "id": "spat-045",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure is the exact reflection (mirror image) across the vertical dashed line?",
    "diagram": "<svg viewBox=\"0 0 140 100\" class=\"w-44 h-32\" fill=\"none\">\n      <rect width=\"130\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <path d=\"M30 25v50h25M30 50h18\" stroke=\"#4f46e5\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <polygon points=\"55,20 65,25 55,30\" fill=\"#f59e0b\"/>\n      <line x1=\"85\" y1=\"15\" x2=\"85\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 20v50h25M25 45h18\" stroke=\"#4f46e5\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"50,15 60,20 50,25\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 20v50h-25M55 45h-18\" stroke=\"#4f46e5\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"30,20 20,25 30,30\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 70v-50h25M25 45h18\" stroke=\"#4f46e5\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"50,75 60,70 50,65\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 70v-50h-25M55 45h-18\" stroke=\"#4f46e5\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"30,70 20,75 30,80\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Reflecting horizontally across a vertical axis reverses left and right while keeping vertical top and bottom intact."
  },
  {
    "id": "spat-046",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure is the reflection of the target shape across a horizontal mirror line directly below it?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <path d=\"M50 20l25 30h-15v30h-20v-30h-15z\" fill=\"#0ea5e9\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <circle cx=\"38\" cy=\"40\" r=\"5\" fill=\"#ffffff\"/>\n      <line x1=\"15\" y1=\"88\" x2=\"85\" y2=\"88\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M40 65l20-24h-12v-24h-16v24h-12z\" fill=\"#0ea5e9\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"49\" r=\"4\" fill=\"#ffffff\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M40 65l20-24h-12v-24h-16v24h-12z\" fill=\"#0ea5e9\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"49\" r=\"4\" fill=\"#ffffff\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M40 15l20 24h-12v24h-16v-24h-12z\" fill=\"#0ea5e9\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"31\" r=\"4\" fill=\"#ffffff\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M40 15l20 24h-12v24h-16v-24h-12z\" fill=\"#0ea5e9\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"31\" r=\"4\" fill=\"#ffffff\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reflecting across a horizontal mirror line flips the figure upside down. The arrow points down and the dot remains on the left side."
  },
  {
    "id": "spat-047",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection of the target shape across a diagonal line from bottom-left to top-right (y = x)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-32 h-32\" fill=\"none\">\n      <rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/>\n      <line x1=\"10\" y1=\"90\" x2=\"90\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <rect x=\"20\" y=\"30\" width=\"35\" height=\"15\" fill=\"#6366f1\" rx=\"2\"/>\n      <circle cx=\"28\" cy=\"65\" r=\"7\" fill=\"#f43f5e\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect x=\"45\" y=\"35\" width=\"15\" height=\"35\" fill=\"#6366f1\" rx=\"2\"/><circle cx=\"20\" cy=\"58\" r=\"6\" fill=\"#f43f5e\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect x=\"25\" y=\"35\" width=\"15\" height=\"35\" fill=\"#6366f1\" rx=\"2\"/><circle cx=\"58\" cy=\"20\" r=\"6\" fill=\"#f43f5e\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect x=\"25\" y=\"15\" width=\"35\" height=\"15\" fill=\"#6366f1\" rx=\"2\"/><circle cx=\"58\" cy=\"65\" r=\"6\" fill=\"#f43f5e\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect x=\"45\" y=\"15\" width=\"15\" height=\"35\" fill=\"#6366f1\" rx=\"2\"/><circle cx=\"20\" cy=\"20\" r=\"6\" fill=\"#f43f5e\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reflecting across the diagonal y = x swaps horizontal and vertical coordinates: the horizontal bar becomes vertical on the upper-right, and the dot moves to the lower-left."
  },
  {
    "id": "spat-048",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-049",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-050",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-051",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-052",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-053",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-054",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-055",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-056",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-057",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-058",
    "category": "Mirror Images & Reflections",
    "difficulty": "easy",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-059",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-060",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-061",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-062",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-063",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-064",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-065",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-066",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-067",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-068",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-069",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-070",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-071",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-072",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-073",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-074",
    "category": "Mirror Images & Reflections",
    "difficulty": "medium",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-075",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-076",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-077",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-078",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-079",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-080",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-081",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-082",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-083",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-084",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-085",
    "category": "Mirror Images & Reflections",
    "difficulty": "hard",
    "question": "Which figure represents the reflection across the vertical vertical line (left-to-right mirror image)?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 25 h-30 v25 h30 z M25 50 h-20 v25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 25 h30 v25 h-30 z M55 50 h20 v25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"35\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M25 55 h30 v-25 h-30 z M55 25 h20 v-25 h-20 z\" fill=\"#3b82f6\"/><circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-16 h-16 sm:w-20 sm:h-20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><path d=\"M55 55 h-30 v-25 h30 z M25 25 h-20 v-25 h20 z\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/></svg>"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A vertical reflection mirrors the elements across the y-axis, swapping left and right positions."
  },
  {
    "id": "spat-086",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "Which of the following capital letters has BOTH vertical (left-to-right) and horizontal (top-to-bottom) line symmetry?",
    "options": [
      "Letter A",
      "Letter H",
      "Letter E",
      "Letter M"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Letters 'A' and 'M' have only vertical line symmetry; 'E' has only horizontal symmetry. 'H' has both vertical and horizontal symmetry."
  },
  {
    "id": "spat-087",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "Which two identical 2D shapes can be joined along their longest edge to form a perfect square?",
    "options": [
      "Two right-angled isosceles triangles",
      "Two equilateral triangles",
      "Two regular pentagons",
      "Two semi-circles"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Joining two congruent 45°-45°-90° right isosceles triangles along their hypotenuses forms a square."
  },
  {
    "id": "spat-088",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "A 3D solid object has:\n- Top View: A square with an 'X' (lines joining opposite corners)\n- Front View: An isosceles triangle\n- Side View: An isosceles triangle\nWhat is the geometric object?",
    "options": [
      "Cone",
      "Square-based Pyramid",
      "Triangular Prism",
      "Octahedron"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A square-based pyramid has a square base with four triangular face edges meeting at the top vertex, producing an 'X' diagonal intersection in the top view."
  },
  {
    "id": "spat-089",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "Which set of identical 2D polygons can be assembled without gaps or overlaps to construct a regular hexagon?",
    "options": [
      "6 congruent equilateral triangles",
      "4 congruent squares",
      "5 congruent right triangles",
      "8 congruent trapezoids"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Connecting the central point of a regular hexagon to each of its six vertices partitions the hexagon into exactly 6 congruent equilateral triangles."
  },
  {
    "id": "spat-090",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-091",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-092",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-093",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-094",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-095",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-096",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-097",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-098",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-099",
    "category": "Shape Composition & Symmetry",
    "difficulty": "easy",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-100",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-101",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-102",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-103",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-104",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-105",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-106",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-107",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-108",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-109",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-110",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-111",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-112",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-113",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-114",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-115",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-116",
    "category": "Shape Composition & Symmetry",
    "difficulty": "medium",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-117",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-118",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-119",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-120",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-121",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-122",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-123",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-124",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-125",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-126",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-127",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-128",
    "category": "Shape Composition & Symmetry",
    "difficulty": "hard",
    "question": "How many axes of line symmetry does this equilateral triangle with a centered circle have?",
    "diagram": "<svg viewBox=\"0 0 100 100\" class=\"w-28 h-28 sm:w-32 sm:h-32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect width=\"90\" height=\"90\" x=\"5\" y=\"5\" rx=\"8\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" fill=\"#f8fafc\"/><polygon points=\"50,15 85,85 15,85\" fill=\"#10b981\" stroke=\"#059669\"/><circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ffffff\"/></svg>",
    "options": [
      "1 axis of symmetry",
      "2 axes of symmetry",
      "3 axes of symmetry",
      "Infinite axes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "An equilateral triangle with a centrally placed circle has 3 lines of symmetry passing from each vertex to the midpoint of the opposite side."
  },
  {
    "id": "spat-129",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "In a 2×2 grid, a shaded dot moves clockwise by 1 cell in each step: Step 1 (Top-Left), Step 2 (Top-Right), Step 3 (Bottom-Right). Where will it be in Step 4?",
    "options": [
      "Top-Left",
      "Top-Right",
      "Bottom-Left",
      "Bottom-Right"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Clockwise movement along the perimeter of a 2×2 grid: Top-Left → Top-Right → Bottom-Right → Bottom-Left."
  },
  {
    "id": "spat-130",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "A compass pointer starts pointing North. It turns 45° clockwise, then 90° counter-clockwise, and finally 180° clockwise. Which direction is it facing now?",
    "options": [
      "North-East",
      "South-East",
      "South-West",
      "North-West"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Starting North (0°): 0° + 45° (NE) - 90° = 315° (NW). 315° + 180° = 135° (South-East)."
  },
  {
    "id": "spat-131",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "Pattern sequence: The square rotates 45° clockwise each step while the solid dot moves clockwise to the adjacent corner. What is the 4th figure?",
    "diagram": "<svg viewBox=\"0 0 260 80\" class=\"w-full max-w-sm h-24\" fill=\"none\">\n      <rect width=\"70\" height=\"70\" x=\"5\" y=\"5\" rx=\"6\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/>\n      <rect width=\"36\" height=\"36\" x=\"22\" y=\"22\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n      <circle cx=\"22\" cy=\"22\" r=\"4\" fill=\"#ef4444\"/>\n      <rect width=\"70\" height=\"70\" x=\"95\" y=\"5\" rx=\"6\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/>\n      <rect width=\"36\" height=\"36\" x=\"112\" y=\"22\" stroke=\"#4f46e5\" stroke-width=\"2\" transform=\"rotate(45 130 40)\"/>\n      <circle cx=\"155\" cy=\"40\" r=\"4\" fill=\"#ef4444\"/>\n      <rect width=\"70\" height=\"70\" x=\"185\" y=\"5\" rx=\"6\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/>\n      <rect width=\"36\" height=\"36\" x=\"202\" y=\"22\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n      <circle cx=\"238\" cy=\"58\" r=\"4\" fill=\"#ef4444\"/>\n    </svg>",
    "options": [
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect width=\"32\" height=\"32\" x=\"24\" y=\"24\" stroke=\"#4f46e5\" stroke-width=\"2\" transform=\"rotate(45 40 40)\"/><circle cx=\"18\" cy=\"40\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect width=\"32\" height=\"32\" x=\"24\" y=\"24\" stroke=\"#4f46e5\" stroke-width=\"2\" transform=\"rotate(45 40 40)\"/><circle cx=\"40\" cy=\"62\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect width=\"32\" height=\"32\" x=\"24\" y=\"24\" stroke=\"#4f46e5\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"56\" r=\"4\" fill=\"#ef4444\"/></svg>",
      "<svg viewBox=\"0 0 80 80\" class=\"w-20 h-20\" fill=\"none\"><rect width=\"76\" height=\"76\" x=\"2\" y=\"2\" rx=\"6\" stroke=\"#cbd5e1\" stroke-width=\"1\" fill=\"#f8fafc\"/><rect width=\"32\" height=\"32\" x=\"24\" y=\"24\" stroke=\"#4f46e5\" stroke-width=\"2\" transform=\"rotate(45 40 40)\"/><circle cx=\"40\" cy=\"18\" r=\"4\" fill=\"#ef4444\"/></svg>"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "At step 4, the square is rotated by 135° (diamond orientation), and the dot reaches the bottom vertex."
  },
  {
    "id": "spat-132",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "Transformation rule: The outer shape stays the same, while the inner shape rotates 90° clockwise and inverts from solid to outline. Applying this rule to Figure 3, what is Figure 4?",
    "diagram": "<svg viewBox=\"0 0 220 80\" class=\"w-full max-w-xs h-24\" fill=\"none\">\n      <rect width=\"60\" height=\"60\" x=\"5\" y=\"10\" rx=\"6\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/>\n      <polygon points=\"35,20 50,55 20,55\" fill=\"#4f46e5\"/>\n      <text x=\"75\" y=\"45\" font-size=\"20\" fill=\"#64748b\">→</text>\n      <rect width=\"60\" height=\"60\" x=\"100\" y=\"10\" rx=\"6\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/>\n      <polygon points=\"145,40 110,25 110,55\" stroke=\"#4f46e5\" stroke-width=\"2\" fill=\"none\"/>\n    </svg>",
    "options": [
      "A circle containing a solid arrow pointing down",
      "A square containing a solid triangle pointing right",
      "A diamond containing an inverted square",
      "A figure where the inner shape rotates 90° clockwise and turns into an empty outline"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The transformation rule strictly consists of a 90° clockwise rotation of the inner element combined with a solid-to-outline color inversion."
  },
  {
    "id": "spat-133",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "A square paper sheet is folded in half from left to right, then folded in half from top to bottom (forming a quarter-sized square with the folded center at bottom-left). A circular hole is punched through the bottom-left corner. When unfolded, what is the result?",
    "options": [
      "4 separate holes near the four outer corners",
      "1 single circular hole in the exact center of the sheet",
      "2 holes along the vertical center crease",
      "4 holes along the outer borders"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The bottom-left corner of the twice-folded paper comprises the single central point of the original sheet. Punching through this corner produces exactly 1 hole in the sheet center."
  },
  {
    "id": "spat-134",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-135",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-136",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-137",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-138",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-139",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-140",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-141",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-142",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-143",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "easy",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-144",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-145",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-146",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-147",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-148",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-149",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-150",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-151",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-152",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-153",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-154",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-155",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-156",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-157",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-158",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-159",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-160",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-161",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "medium",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-162",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-163",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-164",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-165",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-166",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-167",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-168",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-169",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-170",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-171",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-172",
    "category": "Spatial Transformations & Sequences",
    "difficulty": "hard",
    "question": "If the clock hand rotates 45° clockwise at each step, where will it point after 3 steps from the 12 o'clock position?",
    "options": [
      "1:30 position (45°)",
      "3:00 position (90°)",
      "4:30 position (135°)",
      "6:00 position (180°)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 steps of 45° = 135° clockwise rotation, pointing to the 4:30 position on a clock face."
  },
  {
    "id": "spat-173",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A cube shows 'A' on the Front face, 'B' on the Top face, and 'C' on the Right face. If you tilt the cube 90° forward so the Top face becomes the Front face, which face is now on Top?",
    "options": [
      "The original Front face",
      "The original Back face",
      "The original Bottom face",
      "The original Right face"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Tilting the cube 90° forward brings the original Back face up to the Top position, the Top face to the Front, and the Front face to the Bottom."
  },
  {
    "id": "spat-174",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "On a standard die, opposite faces sum to 7 (1-6, 2-5, 3-4). If the Top face shows 3 and the Front face shows 2, what number is on the Bottom face?",
    "options": [
      "4",
      "5",
      "1",
      "6"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The face opposite Top is Bottom. Since Top is 3 and opposite faces sum to 7, the Bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-175",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A solid cube is painted blue on all 6 faces and then sliced into 27 equal smaller unit cubes (3×3×3). How many unit cubes have paint on EXACTLY TWO faces?",
    "options": [
      "6",
      "8",
      "12",
      "16"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In a 3×3×3 cube, cubes with exactly 2 painted faces are located along the middle of the 12 edges: 12 × (3 - 2) = 12 unit cubes."
  },
  {
    "id": "spat-176",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "In the same 3×3×3 painted cube cut into 27 unit cubes, how many unit cubes have NO paint on any face?",
    "options": [
      "0",
      "1",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The unpainted cubes are located entirely in the interior core: (3 - 2)³ = 1 unit cube."
  },
  {
    "id": "spat-177",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A cube has six distinct symbols on its faces. Its unfolded net reveals that Circle is opposite Star, Square is opposite Diamond, and Triangle is opposite Cross. If you look at the folded cube and see Circle on the Top face and Square on the Front face, which symbol CANNOT be on the Right face?",
    "options": [
      "Triangle",
      "Cross",
      "Star",
      "None of these"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Since Circle is on the Top, Star must be on the Bottom. A symbol on the Bottom cannot be on the Right side."
  },
  {
    "id": "spat-178",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-179",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-180",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-181",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-182",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-183",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-184",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-185",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-186",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-187",
    "category": "Cube & 3D Reasoning",
    "difficulty": "easy",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-188",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-189",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-190",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-191",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-192",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-193",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-194",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-195",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-196",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-197",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-198",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-199",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-200",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-201",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-202",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-203",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-204",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-205",
    "category": "Cube & 3D Reasoning",
    "difficulty": "medium",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-206",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-207",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-208",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-209",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-210",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-211",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-212",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-213",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-214",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-215",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-216",
    "category": "Cube & 3D Reasoning",
    "difficulty": "hard",
    "question": "A standard six-sided die has opposite faces that sum to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    "options": [
      "1",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Opposite faces sum to 7. Since the top face is 3, the bottom face is 7 - 3 = 4."
  },
  {
    "id": "spat-217",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "In a cross-shaped cube net: Face 1 is in the center, Face 2 is Above, Face 3 is Below, Face 4 is Left, Face 5 is Right, and Face 6 is attached to the bottom of Face 3. When folded into a cube, which face is directly OPPOSITE Face 1?",
    "options": [
      "Face 2",
      "Face 3",
      "Face 4",
      "Face 6"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "When folding the cross net into a cube, Faces 2, 3, 4, and 5 form the four vertical side walls around Face 1, and Face 6 folds over the top to become opposite Face 1."
  },
  {
    "id": "spat-218",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "Which of the following 2D arrangements of 6 connected squares CANNOT be folded into a closed cube?",
    "options": [
      "A classic Latin cross arrangement (4 in a row, 1 on top, 1 on bottom)",
      "A 2×3 solid rectangle of 6 squares",
      "A 3-step stair arrangement (2-2-2)",
      "A T-shaped arrangement of 6 squares"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A 2×3 solid block of squares has adjacent rows that overlap upon folding, leaving opposite faces open and failing to form a closed 3D cube."
  },
  {
    "id": "spat-219",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A solid 3D geometric object has the following orthogonal projections:\n- Top View: A circle\n- Front View: An isosceles triangle\n- Side View: An isosceles triangle\nWhat is the 3D shape?",
    "options": [
      "Cylinder",
      "Cone",
      "Square Pyramid",
      "Sphere"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A cone has a circular base (Top View = Circle) and tapers to a single vertex (Front & Side Views = Isosceles Triangles)."
  },
  {
    "id": "spat-220",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A square paper is folded in half left-to-right, then bottom-to-top (folded center is at top-left). A triangular notch is cut out of the open bottom-right corner. When unfolded, what does the paper look like?",
    "options": [
      "A diamond hole in the center",
      "4 triangular notches, one on each of the 4 outer corners",
      "2 notches on the top and bottom edges only",
      "A single square cutout in the center"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The open bottom-right corner corresponds to the four external corners of the unfolded sheet. Cutting a notch here produces 4 corner notches on the final sheet."
  },
  {
    "id": "spat-221",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-222",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-223",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-224",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-225",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-226",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-227",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-228",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-229",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-230",
    "category": "Shape Folding & Nets",
    "difficulty": "easy",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-231",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-232",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-233",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-234",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-235",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-236",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-237",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-238",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-239",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-240",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-241",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-242",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-243",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-244",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-245",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-246",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-247",
    "category": "Shape Folding & Nets",
    "difficulty": "medium",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-248",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-249",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-250",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-251",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-252",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-253",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-254",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-255",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-256",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-257",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-258",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-259",
    "category": "Shape Folding & Nets",
    "difficulty": "hard",
    "question": "A cross-shaped net made of 6 identical connected squares is folded into a 3D cube. How many vertices does the resulting cube have?",
    "options": [
      "6 vertices",
      "8 vertices",
      "10 vertices",
      "12 vertices"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Every 3D cube has 6 square faces, 12 straight edges, and exactly 8 vertices (corners)."
  },
  {
    "id": "spat-260",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid structure rests on the floor. Looking at the grid of vertical columns from above, the block heights are: Column (1,1)=3, Column (1,2)=2, Column (2,1)=1, Column (2,2)=2. How many total unit cubes form the structure?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Total number of unit cubes = 3 + 2 + 1 + 2 = 8 blocks."
  },
  {
    "id": "spat-261",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "An isometric staircase structure has 3 columns of height 1 in the front row, 2 columns of height 2 in the middle row, and 1 column of height 3 in the back row. How many total unit cubes are in the solid?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Front row = 3 × 1 = 3 blocks. Middle row = 2 × 2 = 4 blocks. Back row = 1 × 3 = 3 blocks. Total = 3 + 4 + 3 = 10 unit cubes."
  },
  {
    "id": "spat-262",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A stepped solid is built inside a 4×4×4 cubic box. It spans the full 4-block width with stepping heights: Row 1 = 4, Row 2 = 3, Row 3 = 2, Row 4 = 1. How many additional unit cubes are required to completely fill the 4×4×4 box?",
    "options": [
      "24",
      "32",
      "40",
      "44"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Total volume = 4³ = 64 blocks. Blocks in staircase = 4 width × (4 + 3 + 2 + 1) = 40 blocks. Additional blocks needed = 64 - 40 = 24 blocks."
  },
  {
    "id": "spat-263",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-264",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-265",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-266",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-267",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-268",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-269",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-270",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-271",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-272",
    "category": "Block/Structure Visualization",
    "difficulty": "easy",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-273",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-274",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-275",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-276",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-277",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-278",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-279",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-280",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-281",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-282",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-283",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-284",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-285",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-286",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-287",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-288",
    "category": "Block/Structure Visualization",
    "difficulty": "medium",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-289",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-290",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-291",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-292",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-293",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-294",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-295",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-296",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-297",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-298",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-299",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  },
  {
    "id": "spat-300",
    "category": "Block/Structure Visualization",
    "difficulty": "hard",
    "question": "A solid rectangular prism is constructed using identical 1x1x1 unit cubes. If its dimensions are 3 cubes wide, 4 cubes long, and 5 cubes high, how many total unit cubes are used?",
    "options": [
      "48 cubes",
      "54 cubes",
      "60 cubes",
      "72 cubes"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Volume = width * length * height = 3 * 4 * 5 = 60 unit cubes."
  }
];
