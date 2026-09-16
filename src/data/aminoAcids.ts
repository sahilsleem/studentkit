export interface AminoAcid {
  name: string;
  threeLetter: string;
  oneLetter: string;
  mass: number;
  polarity: string;
  charge: string;
  type: string;
  essential: boolean;
}

export const AMINO_ACIDS: AminoAcid[] = [
  { name: "Alanine", threeLetter: "Ala", oneLetter: "A", mass: 89.094, polarity: "Nonpolar", charge: "Neutral", type: "Aliphatic", essential: false },
  { name: "Arginine", threeLetter: "Arg", oneLetter: "R", mass: 174.203, polarity: "Polar", charge: "Positive (Basic)", type: "Basic", essential: false },
  { name: "Asparagine", threeLetter: "Asn", oneLetter: "N", mass: 132.119, polarity: "Polar", charge: "Neutral", type: "Amide", essential: false },
  { name: "Aspartic Acid", threeLetter: "Asp", oneLetter: "D", mass: 133.104, polarity: "Polar", charge: "Negative (Acidic)", type: "Acidic", essential: false },
  { name: "Cysteine", threeLetter: "Cys", oneLetter: "C", mass: 121.154, polarity: "Polar", charge: "Neutral", type: "Sulfur-containing", essential: false },
  { name: "Glutamic Acid", threeLetter: "Glu", oneLetter: "E", mass: 147.131, polarity: "Polar", charge: "Negative (Acidic)", type: "Acidic", essential: false },
  { name: "Glutamine", threeLetter: "Gln", oneLetter: "Q", mass: 146.146, polarity: "Polar", charge: "Neutral", type: "Amide", essential: false },
  { name: "Glycine", threeLetter: "Gly", oneLetter: "G", mass: 75.067, polarity: "Nonpolar", charge: "Neutral", type: "Aliphatic", essential: false },
  { name: "Histidine", threeLetter: "His", oneLetter: "H", mass: 155.156, polarity: "Polar", charge: "Positive (Basic)", type: "Basic", essential: true },
  { name: "Isoleucine", threeLetter: "Ile", oneLetter: "I", mass: 131.175, polarity: "Nonpolar", charge: "Neutral", type: "Aliphatic", essential: true },
  { name: "Leucine", threeLetter: "Leu", oneLetter: "L", mass: 131.175, polarity: "Nonpolar", charge: "Neutral", type: "Aliphatic", essential: true },
  { name: "Lysine", threeLetter: "Lys", oneLetter: "K", mass: 146.189, polarity: "Polar", charge: "Positive (Basic)", type: "Basic", essential: true },
  { name: "Methionine", threeLetter: "Met", oneLetter: "M", mass: 149.208, polarity: "Nonpolar", charge: "Neutral", type: "Sulfur-containing", essential: true },
  { name: "Phenylalanine", threeLetter: "Phe", oneLetter: "F", mass: 165.192, polarity: "Nonpolar", charge: "Neutral", type: "Aromatic", essential: true },
  { name: "Proline", threeLetter: "Pro", oneLetter: "P", mass: 115.132, polarity: "Nonpolar", charge: "Neutral", type: "Cyclic", essential: false },
  { name: "Serine", threeLetter: "Ser", oneLetter: "S", mass: 105.093, polarity: "Polar", charge: "Neutral", type: "Hydroxyl-containing", essential: false },
  { name: "Threonine", threeLetter: "Thr", oneLetter: "T", mass: 119.119, polarity: "Polar", charge: "Neutral", type: "Hydroxyl-containing", essential: true },
  { name: "Tryptophan", threeLetter: "Trp", oneLetter: "W", mass: 204.228, polarity: "Nonpolar", charge: "Neutral", type: "Aromatic", essential: true },
  { name: "Tyrosine", threeLetter: "Tyr", oneLetter: "Y", mass: 181.191, polarity: "Polar", charge: "Neutral", type: "Aromatic", essential: false },
  { name: "Valine", threeLetter: "Val", oneLetter: "V", mass: 117.148, polarity: "Nonpolar", charge: "Neutral", type: "Aliphatic", essential: true }
];
