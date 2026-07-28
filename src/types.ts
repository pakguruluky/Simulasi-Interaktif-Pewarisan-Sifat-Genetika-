export type TabType = 
  | 'tujuan'
  | 'materi'
  | 'simulasi'
  | 'lkpd'
  | 'quiz'
  | 'tutor'
  | 'referensi';

export type SimulationSubTab = 
  | 'punnett'
  | 'dna_rna'
  | 'pautan_pindah_silang'
  | 'pedigree'
  | 'mutasi_kromosom';

export interface StudentProfile {
  nama: string;
  kelas: string;
  noAbsen: string;
  sekolah: string;
  tanggal: string;
}

// Punnett Square Types
export type InheritanceMode = 
  | 'monohibrid_dominan'
  | 'monohibrid_intermediet'
  | 'dihibrid'
  | 'atavisme'
  | 'kriptomeri'
  | 'epistasis_dominan'
  | 'polimeri'
  | 'komplementer';

export interface Gamete {
  code: string;
}

export interface PunnettCell {
  rowGamete: string;
  colGamete: string;
  genotype: string;
  phenotype: string;
  colorBg: string;
}

export interface PhenotypeSummary {
  phenotype: string;
  count: number;
  ratio: string;
  percentage: number;
  colorBg: string;
}

export interface GenotypeSummary {
  genotype: string;
  count: number;
  ratio: string;
  percentage: number;
}

// DNA / RNA / Mutation Types
export type MutationType = 'none' | 'silent' | 'missense' | 'nonsense' | 'frameshift_insertion' | 'frameshift_deletion';

export interface CodonTranslation {
  codon: string;
  aminoAcid: string;
  fullName: string;
  isStart?: boolean;
  isStop?: boolean;
}

// Gene Linkage & Recombination Types
export interface LinkageState {
  geneDistance: number; // cM (0 - 50)
  parentalCount: number;
  recombinantCount: number;
  totalOffspring: number;
  recombinationFreq: number; // %
}

// Pedigree Types
export type TraitType = 'hemofilia' | 'buta_warna' | 'golongan_darah' | 'albino';

export interface PedigreeMember {
  id: string;
  name: string;
  generation: number;
  gender: 'male' | 'female';
  phenotype: string;
  genotype: string;
  isCarrier: boolean;
  isAffected: boolean;
  fatherId?: string;
  motherId?: string;
}

// Chromosomal Mutation Karyotype Types
export interface ChromosomeAnomaly {
  id: string;
  name: string;
  type: 'Aneuploidi (Jumlah)' | 'Struktural';
  formula: string; // e.g. 47, XX/XY +21
  cause: string;
  characteristics: string[];
  incidence: string;
  diagramColor: string;
}

// LKPD Types
export interface LkpdAnswer {
  questionId: string;
  answer: string;
  isCorrect?: boolean;
  score?: number;
}

export interface LkpdTask {
  id: string;
  title: string;
  instructions: string;
  questionType: 'multiple_choice' | 'short_essay' | 'simulation_task';
  options?: string[];
  correctAnswer?: string;
  explanation: string;
  points: number;
}

// Quiz Types
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  explanation: string;
  topic: string;
}

// Material Topic
export interface MaterialSection {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  content: {
    subtitle: string;
    description: string;
    keyPoints: string[];
    diagramExplanation?: string;
    formula?: string;
  }[];
}
