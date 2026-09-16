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

export const ELEMENT_MASSES: Record<string, number> = {
  H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007, O: 15.999,
  F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974, S: 32.06,
  Cl: 35.45, Ar: 39.948, K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996,
  Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38, Ga: 69.723, Ge: 72.630,
  As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798, Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224,
  Nb: 92.906, Mo: 95.95, Tc: 98, Ru: 101.07, Rh: 102.91, Pd: 106.42, Ag: 107.87, Cd: 112.41,
  In: 114.82, Sn: 118.71, Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29, Cs: 132.91, Ba: 137.33,
  La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24, Pm: 145, Sm: 150.36, Eu: 151.96, Gd: 157.25,
  Tb: 158.93, Dy: 162.50, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.05, Lu: 174.97, Hf: 178.49,
  Ta: 180.95, W: 183.84, Re: 186.21, Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59,
  Tl: 204.38, Pb: 207.2, Bi: 208.98, Po: 209, At: 210, Rn: 222, Fr: 223, Ra: 226,
  Ac: 227, Th: 232.04, Pa: 231.04, U: 238.03, Np: 237, Pu: 244, Am: 243, Cm: 247,
  Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259, Lr: 266, Rf: 267,
  Db: 268, Sg: 269, Bh: 270, Hs: 277, Mt: 278, Ds: 281, Rg: 282, Cn: 285,
  Nh: 286, Fl: 289, Mc: 290, Lv: 293, Ts: 294, Og: 294
};
