export const CHEMISTRY_CONSTANTS = {
  // Fundamental Constants
  NA: { value: 6.02214076e23, symbol: 'N_A', unit: 'mol⁻¹', label: 'Avogadro Constant' },
  R: { value: 8.314462618, symbol: 'R', unit: 'J/(mol·K)', label: 'Ideal Gas Constant' },
  R_atm: { value: 0.08205736608096, symbol: 'R', unit: 'L·atm/(mol·K)', label: 'Ideal Gas Constant (atm)' },
  kB: { value: 1.380649e-23, symbol: 'k_B', unit: 'J/K', label: 'Boltzmann Constant' },
  F: { value: 96485.33212, symbol: 'F', unit: 'C/mol', label: 'Faraday Constant' },
  e: { value: 1.602176634e-19, symbol: 'e', unit: 'C', label: 'Elementary Charge' },
  h: { value: 6.62607015e-34, symbol: 'h', unit: 'J·s', label: 'Planck Constant' },
  c: { value: 299792458, symbol: 'c', unit: 'm/s', label: 'Speed of Light' },
  
  // Masses
  me: { value: 9.1093837015e-31, symbol: 'm_e', unit: 'kg', label: 'Electron Mass' },
  mp: { value: 1.67262192369e-27, symbol: 'm_p', unit: 'kg', label: 'Proton Mass' },
  mn: { value: 1.67492749804e-27, symbol: 'm_n', unit: 'kg', label: 'Neutron Mass' },
  
  // Standard conditions
  P0: { value: 101325, symbol: 'P°', unit: 'Pa', label: 'Standard Atmospheric Pressure' },
  T0: { value: 273.15, symbol: 'T°', unit: 'K', label: 'Standard Temperature' },
  Vm: { value: 22.414, symbol: 'V_m', unit: 'L/mol', label: 'Molar Volume of Ideal Gas at STP' },
  Kw: { value: 1.0e-14, symbol: 'K_w', unit: '', label: 'Ion Product of Water (25°C)' }
};
