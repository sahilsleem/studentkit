export interface VerbalQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const verbalQuestions = [
  {
    "id": "verb-001",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Pencil is to Write as Scissors is to _______.",
    "options": [
      "Sharpen",
      "Cut",
      "Paper",
      "Draw"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A pencil is a tool used to write; scissors are a tool used to cut."
  },
  {
    "id": "verb-002",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Bird is to Aviary as Bee is to _______.",
    "options": [
      "Nest",
      "Hive",
      "Flower",
      "Swarm"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "An aviary is an enclosure/structure where birds are kept; a hive is the home/structure where bees reside."
  },
  {
    "id": "verb-003",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Thermostat is to Temperature as Barometer is to _______.",
    "options": [
      "Humidity",
      "Pressure",
      "Rainfall",
      "Wind"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A thermostat measures or regulates temperature; a barometer is an instrument that measures atmospheric pressure."
  },
  {
    "id": "verb-004",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Architect is to Blueprint as Composer is to _______.",
    "options": [
      "Instrument",
      "Score",
      "Orchestra",
      "Concert"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "An architect creates a blueprint (a written design plan for a structure); a composer creates a score (a written notation plan for musical performance)."
  },
  {
    "id": "verb-005",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Trowel is to Mason as Scalpel is to _______.",
    "options": [
      "Patient",
      "Hospital",
      "Surgeon",
      "Incision"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "A trowel is the specialized primary tool of a mason; a scalpel is the specialized primary tool of a surgeon."
  },
  {
    "id": "verb-006",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Spurious is to Authenticity as Transient is to _______.",
    "options": [
      "Permanence",
      "Momentum",
      "Velocity",
      "Intensity"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Something 'spurious' inherently lacks 'authenticity'. Similarly, something 'transient' (temporary) inherently lacks 'permanence'."
  },
  {
    "id": "verb-007",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nOASIS : DESERT ::",
    "options": [
      "Island : Ocean",
      "Peak : Mountain",
      "Glacier : Pole",
      "Forest : Jungle"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "An oasis is a fertile spot within an arid desert, just as an island is a body of land surrounded by an ocean."
  },
  {
    "id": "verb-008",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSCALPEL : SURGEON ::",
    "options": [
      "Chisel : Sculptor",
      "Baton : Conductor",
      "Anvil : Blacksmith",
      "Telescope : Astronomer"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A scalpel is the primary cutting tool used by a surgeon, just as a chisel is used by a sculptor."
  },
  {
    "id": "verb-009",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nTHERMOMETER : TEMPERATURE ::",
    "options": [
      "Scale : Weight",
      "Clock : Speed",
      "Ruler : Volume",
      "Compass : Pressure"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A thermometer measures temperature, just as a scale measures weight."
  },
  {
    "id": "verb-010",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nARCHITECT : BLUEPRINT ::",
    "options": [
      "Author : Manuscript",
      "Musician : Instrument",
      "Painter : Canvas",
      "Actor : Stage"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "An architect produces a blueprint as the guiding design, just as an author writes a manuscript."
  },
  {
    "id": "verb-011",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nCANDLE : ILLUMINATE ::",
    "options": [
      "Refrigerator : Cool",
      "Stove : Bake",
      "Fan : Heat",
      "Mirror : Magnify"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The primary function of a candle is to illuminate, just as the function of a refrigerator is to cool."
  },
  {
    "id": "verb-012",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGARRULOUS : TALKATIVE ::",
    "options": [
      "Taciturn : Reserved",
      "Arrogant : Humble",
      "Timid : Bold",
      "Generous : Greedy"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Garrulous is a synonym for talkative, just as taciturn is a synonym for reserved."
  },
  {
    "id": "verb-013",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nMETAPHOR : FIGURATIVE ::",
    "options": [
      "Fable : Didactic",
      "Sonnet : Prose",
      "Satire : Literal",
      "Tragedy : Humorous"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A metaphor is inherently figurative, just as a fable is inherently didactic (designed to teach a lesson)."
  },
  {
    "id": "verb-014",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nEPILOGUE : NOVEL ::",
    "options": [
      "Coda : Symphony",
      "Overture : Opera",
      "Prologue : Play",
      "Intermission : Film"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "An epilogue is the concluding section of a novel, just as a coda is the concluding passage of a piece of music."
  },
  {
    "id": "verb-015",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nDESICCATE : MOISTURE ::",
    "options": [
      "Decelerate : Speed",
      "Inflate : Air",
      "Illuminate : Light",
      "Fortify : Strength"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "To desiccate is to remove moisture, just as to decelerate is to reduce speed."
  },
  {
    "id": "verb-016",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSEISMOGRAPH : EARTHQUAKE ::",
    "options": [
      "Barometer : Atmospheric Pressure",
      "Anemometer : Humidity",
      "Galvanometer : Temperature",
      "Hydrometer : Sound"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A seismograph measures earthquakes, just as a barometer measures atmospheric pressure."
  },
  {
    "id": "verb-017",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nPHILATELIST : STAMPS ::",
    "options": [
      "Numismatist : Coins",
      "Genealogist : Minerals",
      "Entomologist : Birds",
      "Cartographer : Weather"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A philatelist collects stamps, just as a numismatist collects coins."
  },
  {
    "id": "verb-018",
    "category": "Analogies & Word Relationships",
    "difficulty": "easy",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nCORONA : SUN ::",
    "options": [
      "Atmosphere : Earth",
      "Halo : Moon",
      "Ring : Saturn",
      "Crater : Mars"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The corona is the outermost atmospheric layer surrounding the sun, analogous to the atmosphere surrounding Earth."
  },
  {
    "id": "verb-019",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nINSOMNIA : SLEEP ::",
    "options": [
      "Amnesia : Memory",
      "Anemia : Iron",
      "Fatigue : Energy",
      "Fever : Temperature"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Insomnia is the inability to sleep, just as amnesia is the loss of memory."
  },
  {
    "id": "verb-020",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHERPETOLOGY : REPTILES ::",
    "options": [
      "Ornithology : Birds",
      "Ichthyology : Insects",
      "Mycology : Mammals",
      "Botany : Rocks"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Herpetology is the study of reptiles, just as ornithology is the study of birds."
  },
  {
    "id": "verb-021",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nLUBRICANT : FRICTION ::",
    "options": [
      "Insulation : Heat Loss",
      "Adhesive : Separation",
      "Solvent : Reaction",
      "Catalyst : Inhibition"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A lubricant reduces friction, just as insulation reduces heat loss."
  },
  {
    "id": "verb-022",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nTACIT : EXPLICIT ::",
    "options": [
      "Nebulous : Precise",
      "Overt : Obvious",
      "Ephemeral : Fleeting",
      "Spurious : False"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Tacit (implied) is the antonym of explicit (direct), just as nebulous is the antonym of precise."
  },
  {
    "id": "verb-023",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nCANVAS : PAINTER ::",
    "options": [
      "Marble : Sculptor",
      "Stage : Actor",
      "Violin : Composer",
      "Paper : Journalist"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Canvas is the medium upon which a painter works, just as marble is the material worked by a sculptor."
  },
  {
    "id": "verb-024",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nDROUGHT : RAIN ::",
    "options": [
      "Famine : Food",
      "Flood : Water",
      "Blizzard : Snow",
      "Stagnation : Motion"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Drought is defined by a severe lack of rain, just as famine is defined by a severe lack of food."
  },
  {
    "id": "verb-025",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-026",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-027",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-028",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-029",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-030",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-031",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-032",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-033",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-034",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-035",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-036",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-037",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-038",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-039",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-040",
    "category": "Analogies & Word Relationships",
    "difficulty": "medium",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-041",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-042",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-043",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-044",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-045",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-046",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-047",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-048",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-049",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-050",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-051",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nBEACON : LIGHT ::",
    "options": [
      "Anchor : Stability",
      "Compass : Speed",
      "Sail : Weight",
      "Oar : Fuel"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A beacon provides guiding light, just as an anchor provides physical stability."
  },
  {
    "id": "verb-052",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nHARBINGER : ARRIVAL ::",
    "options": [
      "Symptom : Disease",
      "Cause : Regret",
      "Memory : Future",
      "Echo : Silence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A harbinger is a sign forecasting an arrival, just as a symptom indicates a disease."
  },
  {
    "id": "verb-053",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nSURGEON : INCISION ::",
    "options": [
      "Carpenter : Joint",
      "Painter : Erasure",
      "Driver : Puncture",
      "Pilot : Turbulence"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A surgeon makes precise incisions, just as a carpenter constructs wood joints."
  },
  {
    "id": "verb-054",
    "category": "Analogies & Word Relationships",
    "difficulty": "hard",
    "question": "Choose the pair that best expresses a relationship similar to that of the capitalized pair:\nGULLIBLE : DECEIVED ::",
    "options": [
      "Pliable : Bent",
      "Rigid : Flexible",
      "Stubborn : Persuaded",
      "Fragile : Indestructible"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A gullible person is easily deceived, just as a pliable material is easily bent."
  },
  {
    "id": "verb-055",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which of the following words does not belong with the others?",
    "options": [
      "Triangle",
      "Square",
      "Circle",
      "Cube"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Triangle, square, and circle are two-dimensional flat geometric shapes, whereas a cube is a three-dimensional solid."
  },
  {
    "id": "verb-056",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word is the odd one out?",
    "options": [
      "Whisper",
      "Mumble",
      "Shout",
      "Glisten"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Whisper, mumble, and shout are vocal manners of speaking/auditory terms, whereas glisten is a visual term referring to shine or reflection."
  },
  {
    "id": "verb-057",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT share the same conceptual meaning as the others?",
    "options": [
      "Cautious",
      "Prudent",
      "Reckless",
      "Vigilant"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Cautious, prudent, and vigilant are synonyms related to being careful and attentive. Reckless is an antonym meaning careless or irresponsible."
  },
  {
    "id": "verb-058",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Consider the governing relationship between the words in each pair:\nPair A: Catalyst : Acceleration\nPair B: Deterrent : Prevention\nPair C: Obstacle : Facilitation\nPair D: Anesthetic : Numbing\nWhich pair is the odd one out based on the functional relationship?",
    "options": [
      "Pair A",
      "Pair B",
      "Pair C",
      "Pair D"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In Pairs A, B, and D, the first item produces or promotes the second. In Pair C, an obstacle impedes or prevents facilitation rather than producing it."
  },
  {
    "id": "verb-059",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Triangle",
      "Pentagon",
      "Circle",
      "Hexagon"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Circle is curved, while triangle, pentagon, and hexagon are rectilinear polygons formed by straight line segments."
  },
  {
    "id": "verb-060",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Sapphire",
      "Ruby",
      "Emerald",
      "Granite"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Sapphire, ruby, and emerald are precious gemstones, while granite is an igneous composite rock."
  },
  {
    "id": "verb-061",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Violin",
      "Cello",
      "Flute",
      "Viola"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Flute is a woodwind instrument, whereas violin, cello, and viola are bowed string instruments."
  },
  {
    "id": "verb-062",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Madrid",
      "Lisbon",
      "Berlin",
      "Geneva"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Madrid, Lisbon, and Berlin are national capitals (Spain, Portugal, Germany), whereas Geneva is not the capital of Switzerland (Bern is)."
  },
  {
    "id": "verb-063",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Plausible",
      "Credible",
      "Believable",
      "Incredulous"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Plausible, credible, and believable describe things that can be believed, whereas incredulous describes a person unwilling to believe."
  },
  {
    "id": "verb-064",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Copper",
      "Silver",
      "Gold",
      "Bronze"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Copper, silver, and gold are pure elemental metals, whereas bronze is an alloy of copper and tin."
  },
  {
    "id": "verb-065",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Obtuse",
      "Acute",
      "Right",
      "Parallel"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Obtuse, acute, and right describe types of angles, whereas parallel describes a geometric orientation between lines."
  },
  {
    "id": "verb-066",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Cacophony",
      "Harmony",
      "Euphony",
      "Melody"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Cacophony refers to harsh, discordant sounds, while harmony, euphony, and melody denote pleasant, harmonious sounds."
  },
  {
    "id": "verb-067",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Ephemeral",
      "Transient",
      "Perpetual",
      "Fleeting"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Ephemeral, transient, and fleeting mean short-lived, while perpetual means everlasting."
  },
  {
    "id": "verb-068",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Sonnet",
      "Haiku",
      "Limerick",
      "Novella"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Sonnet, haiku, and limerick are poetic forms, whereas a novella is a work of narrative prose fiction."
  },
  {
    "id": "verb-069",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "easy",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-070",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-071",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-072",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-073",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-074",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-075",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-076",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-077",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-078",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-079",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-080",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-081",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-082",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-083",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-084",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-085",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-086",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-087",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "medium",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-088",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-089",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-090",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-091",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-092",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-093",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-094",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-095",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-096",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Hypothesis",
      "Conjecture",
      "Fact",
      "Supposition"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Hypothesis, conjecture, and supposition involve provisional theories, whereas fact denotes verified truth."
  },
  {
    "id": "verb-097",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Zealous",
      "Fervent",
      "Passionate",
      "Apathetic"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Zealous, fervent, and passionate denote intense enthusiasm, while apathetic means lacking interest or care."
  },
  {
    "id": "verb-098",
    "category": "Verbal Classification & Odd One Out",
    "difficulty": "hard",
    "question": "Which word does NOT belong with the others?",
    "options": [
      "Novel",
      "Biography",
      "Memoir",
      "Autobiography"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A novel is a work of fiction, whereas biography, memoir, and autobiography are non-fiction personal narratives."
  },
  {
    "id": "verb-099",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The scientist gave a concise summary of the complex theory,' what does the word 'concise' most nearly mean?",
    "options": [
      "Brief and clear",
      "Lengthy and detailed",
      "Confusing",
      "Incomplete"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Concise' means expressing much in few words clearly and without unnecessary detail."
  },
  {
    "id": "verb-100",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The witness provided plausible testimony that aligned with physical evidence,' what does 'plausible' mean?",
    "options": [
      "Deceptive and unproven",
      "Reasonable and believable",
      "Exaggerated",
      "Contradictory"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Plausible' describes an explanation or statement that is credible, reasonable, and likely to be true."
  },
  {
    "id": "verb-101",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The treaty was designed to mitigate conflicts between neighboring regions,' what does 'mitigate' mean?",
    "options": [
      "Make less severe or harmful",
      "Escalate rapidly",
      "Eliminate all future borders",
      "Document officially"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Mitigate' means to make something less severe, harmful, or intense."
  },
  {
    "id": "verb-102",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the passage 'The archivist took meticulous care to preserve the ephemeral pamphlets, recognizing that materials made for short-term daily use often provide the richest historical insights,' what is the meaning of 'ephemeral'?",
    "options": [
      "Lasting for only a short time",
      "Ancient and venerable",
      "Indestructible",
      "Fictional and decorative"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The surrounding context ('materials made for short-term daily use') indicates that 'ephemeral' means lasting for a very short time or transitory."
  },
  {
    "id": "verb-103",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The scientist proposed a plausible hypothesis,' what does 'plausible' mean?",
    "options": [
      "Unlikely to occur",
      "Reasonable and probable",
      "Proven beyond doubt",
      "Completely flawed"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Plausible' means having an appearance of truth or reason; seemingly worthy of acceptance."
  },
  {
    "id": "verb-104",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The mountain pass was perilous during winter storms,' what does 'perilous' mean?",
    "options": [
      "Scenic",
      "Hazardous and risky",
      "Gentle and easy",
      "Uninhabited"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Perilous' means full of danger or risk."
  },
  {
    "id": "verb-105",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'Her argument was bolstered by recent empirical data,' what does 'bolstered' mean?",
    "options": [
      "Weakened",
      "Strengthened and supported",
      "Contradicted",
      "Overlooked"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Bolstered' means supported, reinforced, or strengthened."
  },
  {
    "id": "verb-106",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The CEO gave a succinct summary of the quarterly report,' what does 'succinct' mean?",
    "options": [
      "Lengthy and detailed",
      "Brief and clearly expressed",
      "Ambiguous",
      "Emotional"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Succinct' means concisely stated without unnecessary words."
  },
  {
    "id": "verb-107",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'His remarks were superfluous to the ongoing discussion,' what does 'superfluous' mean?",
    "options": [
      "Crucial and urgent",
      "Unnecessary and exceeding what is required",
      "Offensive",
      "Insightful"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Superfluous' means unnecessary or more than enough."
  },
  {
    "id": "verb-108",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The treaty proved ephemeral, breaking down within three weeks,' what does 'ephemeral' mean?",
    "options": [
      "Lasting a very short time",
      "Legally binding",
      "Widely celebrated",
      "Permanent"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Ephemeral' means lasting for only a brief period."
  },
  {
    "id": "verb-109",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The judge remained impartial throughout the high-profile trial,' what does 'impartial' mean?",
    "options": [
      "Biased toward the defense",
      "Treating all rivals or disputants equally",
      "Disinterested in the verdict",
      "Aggressive"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Impartial' means fair, unbiased, and neutral."
  },
  {
    "id": "verb-110",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The author used an enigmatic tone in the final chapter,' what does 'enigmatic' mean?",
    "options": [
      "Predictable",
      "Mysterious and difficult to interpret",
      "Humorous",
      "Repetitive"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Enigmatic' means puzzling or mysterious."
  },
  {
    "id": "verb-111",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'She showed great tenacity in overcoming numerous obstacles,' what does 'tenacity' mean?",
    "options": [
      "Hesitation",
      "Persistence and firm determination",
      "Carelessness",
      "Frustration"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Tenacity' is the quality of holding fast and being persistently determined."
  },
  {
    "id": "verb-112",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The committee reached a consensus after hours of debate,' what does 'consensus' mean?",
    "options": [
      "General agreement among all members",
      "Deadlock",
      "Formal disagreement",
      "Individual decision"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Consensus' means a general agreement reached by a group."
  },
  {
    "id": "verb-113",
    "category": "Vocabulary in Context",
    "difficulty": "easy",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-114",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-115",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-116",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-117",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-118",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-119",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-120",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-121",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-122",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-123",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-124",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-125",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-126",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-127",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-128",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-129",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-130",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-131",
    "category": "Vocabulary in Context",
    "difficulty": "medium",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-132",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-133",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-134",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-135",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-136",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-137",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-138",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-139",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-140",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The team faced formidable challenges during the expedition.', what does 'formidable' mean?",
    "options": [
      "Inspiring respect through difficulty or strength",
      "Insignificant and trivial",
      "Comical",
      "Easily resolved"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Formidable' means inspiring fear or respect through being impressively large, powerful, or intense."
  },
  {
    "id": "verb-141",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'Her pragmatic approach focused on achievable real-world outcomes.', what does 'pragmatic' mean?",
    "options": [
      "Dealing with things sensibly and realistically",
      "Theoretical and impractical",
      "Emotional and erratic",
      "Careless"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Pragmatic' means dealing with problems in a sensible, practical way rather than following abstract theories."
  },
  {
    "id": "verb-142",
    "category": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In the sentence 'The speaker's eloquence captivated the entire audience.', what does 'eloquence' mean?",
    "options": [
      "Fluent and persuasive speech",
      "Harsh volume",
      "Frequent hesitation",
      "Complex jargon"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Eloquence' refers to fluent, forceful, and persuasive discourse."
  },
  {
    "id": "verb-143",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Although the storm was severe, the sturdy old lighthouse remained _______ and suffered no damage.",
    "options": [
      "unharmed",
      "fragile",
      "submerged",
      "abandoned"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The word 'Although' contrasts the severity of the storm with the lighthouse surviving with 'no damage', making 'unharmed' the only logical choice."
  },
  {
    "id": "verb-144",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Because the instructions were so _______, the team completed the assembly quickly and without making any errors.",
    "options": [
      "ambiguous",
      "straightforward",
      "lengthy",
      "complex"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Completing the task quickly and without error indicates the instructions were clear and easy to follow ('straightforward')."
  },
  {
    "id": "verb-145",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Rather than offering a superficial critique, the reviewer provided an _______ evaluation that explored every nuanced detail of the novel.",
    "options": [
      "exhaustive",
      "unfavorable",
      "hasty",
      "indifferent"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'Rather than... superficial' sets up a contrast with surface-level analysis; 'exhaustive' (comprehensive and thorough) matches examining every nuanced detail."
  },
  {
    "id": "verb-146",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "While the committee initially feared the new proposal would cause division, it surprisingly proved to be a _______ force that brought all departments into consensus.",
    "options": [
      "unifying",
      "disruptive",
      "temporary",
      "costly"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "'While... feared... division' sets up a contrast; 'unifying' directly opposes division and matches bringing departments into consensus."
  },
  {
    "id": "verb-147",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Although the initial findings appeared _______, subsequent replication studies confirmed their validity.",
    "options": [
      "unquestionable",
      "dubious",
      "definitive",
      "promising"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The word 'Although' sets up a contrast with 'confirmed their validity'. 'Dubious' (doubtful) provides the correct logical contrast."
  },
  {
    "id": "verb-148",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Because the speaker was known for his _______ style, the audience was surprised by his brief and punchy address.",
    "options": [
      "verbose",
      "concise",
      "hesitant",
      "eloquent"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The contrast between the expectation and the 'brief and punchy address' requires a word meaning wordy or long-winded ('verbose')."
  },
  {
    "id": "verb-149",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "The museum's new wing was designed to _______ natural sunlight, creating a bright and airy atmosphere.",
    "options": [
      "restrict",
      "maximize",
      "filter out",
      "distort"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "To create a bright and airy atmosphere, the architecture would aim to maximize natural sunlight."
  },
  {
    "id": "verb-150",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Despite facing _______ criticism from opponents, the mayor remained steadfast in her policy decisions.",
    "options": [
      "scant",
      "relentless",
      "favorable",
      "fleeting"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Steadfast' (resolute) contrasts with severe, continuous opposition ('relentless criticism')."
  },
  {
    "id": "verb-151",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "The editor praised the journalist for writing an account that was both _______ and comprehensive.",
    "options": [
      "biased",
      "meticulous",
      "hurried",
      "vague"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Meticulous' (showing great attention to detail) pairs logically with 'comprehensive'."
  },
  {
    "id": "verb-152",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "Unlike her predecessor, who was notoriously _______, the new manager encouraged open dialogue and transparency.",
    "options": [
      "collaborative",
      "secretive",
      "approachable",
      "efficient"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Unlike' establishes a contrast with 'encouraged open dialogue'. 'Secretive' fits the contrast."
  },
  {
    "id": "verb-153",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "The discovery of the ancient manuscript was completely _______, occurring while archaeologists were excavating an unrelated site.",
    "options": [
      "deliberate",
      "serendipitous",
      "predictable",
      "routine"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Serendipitous' means occurring by happy chance or coincidence."
  },
  {
    "id": "verb-154",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "The medication provided _______ relief, but symptoms returned once the dosage wore off.",
    "options": [
      "permanent",
      "transitory",
      "inconsequential",
      "harmful"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Transitory' (temporary) aligns with the fact that symptoms returned when dosage wore off."
  },
  {
    "id": "verb-155",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-156",
    "category": "Sentence Completion",
    "difficulty": "easy",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-157",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-158",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-159",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-160",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-161",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-162",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-163",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-164",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-165",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-166",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-167",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-168",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-169",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-170",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-171",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-172",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-173",
    "category": "Sentence Completion",
    "difficulty": "medium",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-174",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-175",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-176",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-177",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-178",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-179",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-180",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-181",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-182",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-183",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "To ensure fairness, the panel conducted a _______ review of all submitted proposals.",
    "options": [
      "cursory",
      "rigorous",
      "superficial",
      "hasty"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Rigorous' (extremely thorough and careful) aligns with ensuring fairness."
  },
  {
    "id": "verb-184",
    "category": "Sentence Completion",
    "difficulty": "hard",
    "question": "The scientist noted that the specimen was extraordinarily _______, exhibiting characteristics never before observed.",
    "options": [
      "conventional",
      "anomalous",
      "mundane",
      "predictable"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'Anomalous' (deviating from standard or normal) fits having never-before-seen characteristics."
  },
  {
    "id": "verb-185",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Premise 1: All mammals breathe air.\nPremise 2: Whales are mammals.\nConclusion: Whales breathe air.\nIs this argument logically valid?",
    "options": [
      "Yes, the conclusion follows necessarily from the premises.",
      "No, because whales live underwater.",
      "No, because some mammals do not breathe air.",
      "It cannot be determined without more scientific data."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "This is a valid deductive syllogism (All A are B; C is an A; therefore C is B). The conclusion follows with strict necessity from the premises."
  },
  {
    "id": "verb-186",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statements:\n- No reptiles have feathers.\n- All birds have feathers.\n- Animal X has feathers.\nWhich statement MUST be true?",
    "options": [
      "Animal X is a reptile.",
      "Animal X is definitely a bird.",
      "Animal X is not a reptile.",
      "Animal X can fly."
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Since no reptiles have feathers, any creature with feathers cannot be a reptile. Therefore, Animal X is definitely not a reptile."
  },
  {
    "id": "verb-187",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statements:\n- All participants in the workshop are teachers.\n- Some teachers are published authors.\nWhich conclusion is definitely true?",
    "options": [
      "All workshop participants are published authors.",
      "Some workshop participants might be published authors.",
      "No workshop participants are published authors.",
      "All published authors are teachers."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Because participants are teachers and some teachers are published authors, it is possible (might be true) that some participants are authors, but neither 100% nor 0% is strictly guaranteed."
  },
  {
    "id": "verb-188",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Premises:\n1. All successful candidates attended the preparatory seminar.\n2. No candidate who attended the preparatory seminar arrived late to the interview.\n3. Jordan was a successful candidate.\nWhich conclusion CANNOT be false?",
    "options": [
      "Jordan scored the highest marks in the interview.",
      "Jordan did not arrive late to the interview.",
      "Jordan had prior experience in the field.",
      "Jordan will be promoted within one year."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Jordan was successful (Premise 3) -> Jordan attended the seminar (Premise 1) -> Jordan did not arrive late (Premise 2). Therefore, Jordan not arriving late cannot be false."
  },
  {
    "id": "verb-189",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statements:\n- Whenever the temperature drops below zero, the lake freezes.\n- The lake is currently frozen.\nWhich of the following deductions is logically sound?",
    "options": [
      "The temperature must currently be below zero.",
      "The temperature might be below zero, but the lake could also still be frozen from earlier cold weather.",
      "The temperature is definitely above zero.",
      "The lake will thaw tomorrow."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "'If P then Q' does not mean 'If Q then P' (affirming the consequent). While subzero temps cause freezing, an already-frozen lake could remain frozen even if current temps have temporarily risen above zero."
  },
  {
    "id": "verb-190",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: All mammals are warm-blooded. All whales are mammals.\nConclusion: Which of the following must be true?",
    "options": [
      "All warm-blooded animals are whales.",
      "All whales are warm-blooded.",
      "Some whales are not mammals.",
      "No cold-blooded animals exist."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Standard categorical syllogism: If all A are B and all C are A, then all C must be B."
  },
  {
    "id": "verb-191",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: No carnivores eat grass. Some birds eat grass.\nConclusion: Which of the following logically follows?",
    "options": [
      "Some birds are not carnivores.",
      "All birds are carnivores.",
      "No birds are carnivores.",
      "All carnivores eat birds."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Since some birds eat grass, and no carnivores eat grass, those grass-eating birds cannot be carnivores."
  },
  {
    "id": "verb-192",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: If it rains, the grass gets wet. The grass is dry.\nConclusion: What can be logically deduced?",
    "options": [
      "It did not rain.",
      "It rained lightly.",
      "The sun is shining.",
      "The wind dried the grass."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore, Not P (It did not rain)."
  },
  {
    "id": "verb-193",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: All doctors have studied biology. Sarah has not studied biology.\nConclusion: What can be logically deduced?",
    "options": [
      "Sarah is a doctor.",
      "Sarah cannot be a doctor.",
      "Sarah might become a doctor.",
      "Sarah is a nurse."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Contrapositive: If one is a doctor, one must have studied biology. Since Sarah has not, she cannot be a doctor."
  },
  {
    "id": "verb-194",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: Some poets are novelists. All novelists are writers.\nConclusion: Which of the following is necessarily true?",
    "options": [
      "Some poets are writers.",
      "All poets are writers.",
      "All writers are poets.",
      "No poets are writers."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The poets who are novelists belong to the set of novelists, all of whom are writers. Thus, some poets are writers."
  },
  {
    "id": "verb-195",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: Every student in the competition submitted an essay. Liam did not submit an essay.\nConclusion: What can be deduced?",
    "options": [
      "Liam won the competition.",
      "Liam is not a student in the competition.",
      "Liam submitted a poem instead.",
      "Liam submitted an essay late."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Since every competitor submitted an essay, anyone who did not submit an essay is not in the competition."
  },
  {
    "id": "verb-196",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: If a polygon has four sides, it is a quadrilateral. Shape X is a rectangle.\nConclusion: Which must be true?",
    "options": [
      "Shape X is a quadrilateral.",
      "Shape X has five sides.",
      "Shape X is a triangle.",
      "Shape X is not a polygon."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A rectangle by definition has 4 sides, and therefore is a quadrilateral."
  },
  {
    "id": "verb-197",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: Either the key is in the drawer or it is on the hook. The key is not on the hook.\nConclusion: What follows?",
    "options": [
      "The key is lost.",
      "The key is in the drawer.",
      "The key is in the car.",
      "The key is duplicated."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Disjunctive syllogism: P or Q. Not Q. Therefore, P (The key is in the drawer)."
  },
  {
    "id": "verb-198",
    "category": "Logical Statements & Conclusions",
    "difficulty": "easy",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-199",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-200",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-201",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-202",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-203",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-204",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-205",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-206",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-207",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-208",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-209",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-210",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-211",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-212",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-213",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-214",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-215",
    "category": "Logical Statements & Conclusions",
    "difficulty": "medium",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-216",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-217",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-218",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-219",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-220",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-221",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-222",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-223",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-224",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-225",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-226",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: All prime numbers greater than 2 are odd. The number N is an even prime.\nConclusion: What is N?",
    "options": [
      "N must be 2.",
      "N must be 4.",
      "N is greater than 10.",
      "No such number exists."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "2 is the only even prime number."
  },
  {
    "id": "verb-227",
    "category": "Logical Statements & Conclusions",
    "difficulty": "hard",
    "question": "Statement: If an employee exceeds quarterly targets, they receive a bonus. Alex received a bonus.\nConclusion: Can we conclude with certainty that Alex exceeded targets?",
    "options": [
      "Yes, absolutely.",
      "No, bonuses might also be awarded for other reasons.",
      "Alex did not exceed targets.",
      "Alex is a manager."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Affirming the consequent is a logical fallacy; bonuses could exist for other reasons unless stated as 'if and only if'."
  },
  {
    "id": "verb-228",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'The cafeteria stopped serving sugary drinks to promote healthier student lifestyles.'\nWhat is the primary assumption underlying this policy?",
    "options": [
      "Reducing sugary drink availability helps encourage healthier dietary choices.",
      "Students never drink sugary beverages outside of school.",
      "Water is the only beverage students should ever consume.",
      "All students dislike sugary drinks."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The policy directly assumes that restricting access to sugary drinks at school contributes to promoting healthier student habits."
  },
  {
    "id": "verb-229",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'If a student prepares for the exam by solving practice problems daily, their problem-solving speed increases.'\nWhich of the following logically follows from this statement?",
    "options": [
      "If a student's problem-solving speed increased, they definitely solved practice problems daily.",
      "A student who solves practice problems daily will experience increased problem-solving speed.",
      "Solving practice problems is the only way to improve exam performance.",
      "Students who do not solve practice problems will fail the exam."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The statement establishes a direct conditional (If P then Q). If a student meets condition P (solving practice problems daily), outcome Q (increased speed) is guaranteed."
  },
  {
    "id": "verb-230",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: An urban transit authority noted that introducing express bus lanes decreased average commute times by 25%. Consequently, the city council decided to allocate budget to convert additional road lanes across three other districts into dedicated bus lanes, expecting identical reductions in traffic congestion citywide.\nWhat is a necessary underlying assumption made by the city council?",
    "options": [
      "The other three districts share comparable road layouts, traffic patterns, and transit demand with the initial area.",
      "Express buses are cheaper to purchase than light rail trains.",
      "Every commuter in the new districts will switch from private vehicles to public buses.",
      "Converting lanes requires no construction time or budget."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "To assume that the identical 25% reduction will occur in other districts, the council must assume that the underlying transit and traffic conditions are sufficiently similar."
  },
  {
    "id": "verb-231",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Fact 1: In a robotics competition, Team Alpha finished ahead of Team Beta.\nFact 2: Team Gamma finished behind Team Delta but ahead of Team Alpha.\nFact 3: Team Epsilon finished behind Team Beta.\nIf all three facts are true, which team finished in third place?",
    "options": [
      "Team Delta",
      "Team Gamma",
      "Team Alpha",
      "Team Beta"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "From Fact 2: Delta > Gamma > Alpha. From Fact 1: Alpha > Beta. From Fact 3: Beta > Epsilon. The complete ranking from 1st to 5th is Delta (1st), Gamma (2nd), Alpha (3rd), Beta (4th), Epsilon (5th)."
  },
  {
    "id": "verb-232",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'Electric vehicles have seen a 40% rise in sales over the last year, primarily driven by expanding charging infrastructure and federal tax incentives.'\nWhat can be reasonably inferred?",
    "options": [
      "Charging availability and financial incentives influence EV adoption.",
      "All drivers will own an EV within five years.",
      "Gasoline cars are no longer being sold.",
      "EV prices have tripled over the past year."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The passage explicitly states that charging infrastructure and tax incentives drove the sales increase."
  },
  {
    "id": "verb-233",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'Although the new software reduced processing time by half, employee error rates rose by 15% during the first month of implementation.'\nWhat assumption is supported?",
    "options": [
      "Employees may require additional training to adapt to the new workflow.",
      "The software is completely defective and should be removed.",
      "Processing time is the only metric that matters.",
      "Employees deliberately made errors."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "A rise in error rates following a new software rollout strongly implies an adjustment/training period."
  },
  {
    "id": "verb-234",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'City council voted to build a new public library in the east district after demographic data showed a 60% increase in school-aged children in that area over five years.'\nWhat was the primary rationale?",
    "options": [
      "The west district has too many libraries.",
      "The growing child population creates greater demand for educational resources in the east district.",
      "School-aged children do not use libraries.",
      "The council had excess funds to spend."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The decision directly cited demographic growth of school-aged children as the rationale."
  },
  {
    "id": "verb-235",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'Crops in the southern valley yielded 30% more grain than usual following an unseasonably wet spring.'\nWhat is the underlying assumption?",
    "options": [
      "Rainfall was a major contributing factor to the increased crop yield.",
      "Wet springs always ruin crop harvests.",
      "Grain is the only crop grown in the valley.",
      "Fertilizers had no effect on the harvest."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The correlation between the wet spring and higher yield assumes moisture positively influenced growth."
  },
  {
    "id": "verb-236",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-237",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-238",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-239",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-240",
    "category": "Inference & Assumptions",
    "difficulty": "easy",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-241",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-242",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-243",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-244",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-245",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-246",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-247",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-248",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-249",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-250",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-251",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-252",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-253",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-254",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-255",
    "category": "Inference & Assumptions",
    "difficulty": "medium",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-256",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-257",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-258",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-259",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-260",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-261",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-262",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-263",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-264",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'The city expanded bike lanes by 20 miles, and cycling commuter rates doubled within two years.'\nWhat is a reasonable inference?",
    "options": [
      "Dedicated infrastructure encourages higher bicycle ridership.",
      "Bicycles are now the only transport in the city.",
      "Cars have been banned from city streets.",
      "Bike lanes caused traffic congestion."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The expansion of lanes preceding the ridership increase suggests infrastructure supports adoption."
  },
  {
    "id": "verb-265",
    "category": "Inference & Assumptions",
    "difficulty": "hard",
    "question": "Passage: 'A survey found that 85% of remote workers reported higher productivity, citing fewer office distractions.'\nWhat is the main finding?",
    "options": [
      "Fewer distractions at home correlate with perceived productivity gains.",
      "All in-office workers are unproductive.",
      "Remote work eliminates all workplace issues.",
      "Companies should close all physical offices."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The data indicates an association between reduced distractions and reported productivity."
  },
  {
    "id": "verb-266",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: Modern solar panels convert sunlight into electricity with increasing efficiency. However, grid operators must still maintain backup power sources because solar generation drops substantially during heavy cloud cover and nighttime hours.\nWhich of the following is most strongly supported by the passage?",
    "options": [
      "Solar energy will soon replace all other power sources entirely.",
      "Weather and time of day currently limit continuous reliance on solar power alone.",
      "Cloud cover permanently damages solar panel efficiency.",
      "Backup power generators are cleaner than solar panels."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage notes that drops during cloud cover and nighttime require backup sources, supporting that weather and diurnal cycles limit continuous exclusive reliance on solar."
  },
  {
    "id": "verb-267",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: Research demonstrates that regular aerobic exercise improves cardiovascular health and boosts cognitive function by enhancing cerebral blood flow. Subjects who walked briskly for 30 minutes five days a week exhibited noticeable improvements in memory recall tasks compared to sedentary peers.\nWhat is the primary conclusion of the passage?",
    "options": [
      "Walking is the only form of exercise that benefits the human brain.",
      "Moderate regular aerobic exercise provides both physical and cognitive benefits.",
      "Sedentary individuals cannot perform memory recall tasks.",
      "Cardiovascular health is more important than memory recall."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage directly links regular aerobic exercise (brisk walking) to dual benefits: cardiovascular fitness (physical) and memory recall (cognitive)."
  },
  {
    "id": "verb-268",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: Historians long believed that the ancient settlement of Kalos declined solely due to prolonged drought. However, recent sediment analysis reveals that the drought occurred nearly two centuries before the town was actually abandoned. Furthermore, newly excavated trade ledgers from the final decades show that Kalos was suddenly bypassed by major maritime merchant routes after a nearby harbor was developed.\nWhich conclusion is most strongly supported by the new findings?",
    "options": [
      "Drought was the direct and immediate cause of the abandonment of Kalos.",
      "Economic shifts resulting from altered trade routes played a more direct role in the settlement's abandonment than the earlier drought.",
      "Kalos was destroyed by an invading navy from the new harbor.",
      "Sediment analysis is unreliable for dating ancient environmental events."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage disproves drought as the immediate cause (it happened 200 years prior) and provides direct evidence that trade bypassed the town right before abandonment."
  },
  {
    "id": "verb-269",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Renewable energy sources like solar and wind produce zero operational emissions. However, their intermittent nature requires grid operators to maintain energy storage solutions or flexible backup generation to ensure reliability.'\nWhat is the main point of the passage?",
    "options": [
      "Renewable energy is too expensive for practical use.",
      "Reliable renewable integration depends on energy storage or backup solutions due to intermittency.",
      "Solar energy produces more emissions than wind energy.",
      "Grid operators plan to phase out all battery storage."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage highlights that while renewables produce no emissions, their intermittency necessitates storage and backup."
  },
  {
    "id": "verb-270",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Regular physical exercise promotes cardiovascular health and stimulates the release of neurotrophic factors that enhance memory and cognitive flexibility. Sedentary lifestyles, by contrast, correlate with higher risks of chronic disease.'\nWhich statement is best supported?",
    "options": [
      "Exercise confers both physical cardiovascular and cognitive benefits.",
      "Cardiovascular health has no link to exercise.",
      "Cognitive flexibility is entirely determined by genetics.",
      "Diet is more important than physical activity."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The passage discusses both cardiovascular and cognitive benefits resulting from exercise."
  },
  {
    "id": "verb-271",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-272",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-273",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-274",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-275",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-276",
    "category": "Short Passage Reasoning",
    "difficulty": "easy",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-277",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-278",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-279",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-280",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-281",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-282",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-283",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-284",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-285",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-286",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-287",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-288",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-289",
    "category": "Short Passage Reasoning",
    "difficulty": "medium",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-290",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-291",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-292",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-293",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-294",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-295",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-296",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-297",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-298",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-299",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  },
  {
    "id": "verb-300",
    "category": "Short Passage Reasoning",
    "difficulty": "hard",
    "question": "Passage: 'Deep ocean trenches remain among the least explored habitats on Earth. Organisms living there adapt to extreme hydrostatic pressure and total darkness through specialized biochemical pathways.'\nWhat characterizes these organisms?",
    "options": [
      "They rely on photosynthesis from sunlight.",
      "They possess specialized adaptations for extreme pressure and darkness.",
      "They cannot survive in deep water.",
      "They migrate to the surface daily."
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The passage explicitly notes specialized biochemical adaptations to extreme pressure and darkness."
  }
];
