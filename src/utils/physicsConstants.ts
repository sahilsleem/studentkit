export interface PhysicsConstant {
  symbol: string;
  value: number;
  unit: string;
  name: string;
  description: string;
  category: string;
}

export const PHYSICS_CONSTANTS: Record<string, PhysicsConstant> = {
  c: { value: 299792458, symbol: 'c', unit: 'm/s', name: 'Speed of Light', description: 'Speed of light in a vacuum.', category: 'Universal' },
  G: { value: 6.67430e-11, symbol: 'G', unit: 'N·m²/kg²', name: 'Gravitational Constant', description: 'Empirical physical constant involved in the calculation of gravitational effects.', category: 'Gravity' },
  g: { value: 9.80665, symbol: 'g', unit: 'm/s²', name: 'Standard Gravity', description: 'Standard acceleration due to gravity on Earth.', category: 'Gravity' },
  h: { value: 6.62607015e-34, symbol: 'h', unit: 'J·s', name: 'Planck Constant', description: 'Quantum of electromagnetic action.', category: 'Quantum' },
  hbar: { value: 1.054571817e-34, symbol: 'ℏ', unit: 'J·s', name: 'Reduced Planck Constant', description: 'Planck constant divided by 2π.', category: 'Quantum' },
  e: { value: 1.602176634e-19, symbol: 'e', unit: 'C', name: 'Elementary Charge', description: 'Electric charge carried by a single proton or electron.', category: 'Electromagnetism' },
  me: { value: 9.1093837015e-31, symbol: 'm_e', unit: 'kg', name: 'Electron Mass', description: 'Mass of a stationary electron.', category: 'Atomic' },
  mp: { value: 1.67262192369e-27, symbol: 'm_p', unit: 'kg', name: 'Proton Mass', description: 'Mass of a stationary proton.', category: 'Atomic' },
  mn: { value: 1.67492749804e-27, symbol: 'm_n', unit: 'kg', name: 'Neutron Mass', description: 'Mass of a stationary neutron.', category: 'Atomic' },
  kB: { value: 1.380649e-23, symbol: 'k_B', unit: 'J/K', name: 'Boltzmann Constant', description: 'Relates average relative kinetic energy to thermodynamic temperature.', category: 'Thermodynamics' },
  NA: { value: 6.02214076e23, symbol: 'N_A', unit: 'mol⁻¹', name: 'Avogadro Constant', description: 'Number of constituent particles in one mole of a substance.', category: 'Thermodynamics' },
  R: { value: 8.314462618, symbol: 'R', unit: 'J/(mol·K)', name: 'Ideal Gas Constant', description: 'Molar equivalent to the Boltzmann constant.', category: 'Thermodynamics' },
  eps0: { value: 8.8541878128e-12, symbol: 'ε₀', unit: 'F/m', name: 'Vacuum Permittivity', description: 'Resistance encountered when forming an electric field in a vacuum.', category: 'Electromagnetism' },
  mu0: { value: 1.25663706212e-6, symbol: 'μ₀', unit: 'N/A²', name: 'Vacuum Permeability', description: 'Magnetic permeability in a classical vacuum.', category: 'Electromagnetism' },
  k: { value: 8.9875517923e9, symbol: 'k', unit: 'N·m²/C²', name: 'Coulomb Constant', description: 'Proportionality constant in Coulomb\'s law.', category: 'Electromagnetism' },
  atm: { value: 101325, symbol: 'atm', unit: 'Pa', name: 'Standard Atmosphere', description: 'Standard atmospheric pressure.', category: 'Thermodynamics' },
};
