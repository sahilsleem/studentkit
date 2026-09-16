export const CHEMISTRY_UNITS = {
  mass: [
    { label: "g", factor: 1 },
    { label: "kg", factor: 1000 },
    { label: "mg", factor: 0.001 }
  ],
  moles: [
    { label: "mol", factor: 1 },
    { label: "mmol", factor: 0.001 },
    { label: "kmol", factor: 1000 }
  ],
  pressure: [
    { label: "atm", factor: 101325 },
    { label: "Pa", factor: 1 },
    { label: "kPa", factor: 1000 },
    { label: "bar", factor: 100000 },
    { label: "mmHg (Torr)", factor: 133.322 }
  ],
  volume: [
    { label: "L", factor: 1 },
    { label: "mL", factor: 0.001 },
    { label: "m³", factor: 1000 },
    { label: "cm³", factor: 0.001 }
  ],
  temperature: [
    { label: "K", factor: 1 },
    { label: "°C", factor: 1, offset: 273.15 }
  ],
  concentration: [
    { label: "M (mol/L)", factor: 1 },
    { label: "mM", factor: 0.001 }
  ],
  energy: [
    { label: "J", factor: 1 },
    { label: "kJ", factor: 1000 },
    { label: "cal", factor: 4.184 },
    { label: "kcal", factor: 4184 }
  ]
};
