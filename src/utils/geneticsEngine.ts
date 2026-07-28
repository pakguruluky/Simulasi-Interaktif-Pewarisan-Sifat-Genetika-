import { 
  Gamete, 
  PunnettCell, 
  GenotypeSummary, 
  PhenotypeSummary, 
  InheritanceMode,
  CodonTranslation
} from '../types';

// Codon Table Dictionary
export const CODON_TABLE: Record<string, { short: string; name: string }> = {
  AUG: { short: 'Met', name: 'Metionin (Start Codon)' },
  UUU: { short: 'Phe', name: 'Fenilalanin' }, UUC: { short: 'Phe', name: 'Fenilalanin' },
  UUA: { short: 'Leu', name: 'Leusin' }, UUG: { short: 'Leu', name: 'Leusin' },
  CUU: { short: 'Leu', name: 'Leusin' }, CUC: { short: 'Leu', name: 'Leusin' },
  CUA: { short: 'Leu', name: 'Leusin' }, CUG: { short: 'Leu', name: 'Leusin' },
  AUU: { short: 'Ile', name: 'Isoleusin' }, AUC: { short: 'Ile', name: 'Isoleusin' }, AUA: { short: 'Ile', name: 'Isoleusin' },
  GUU: { short: 'Val', name: 'Valin' }, GUC: { short: 'Val', name: 'Valin' },
  GUA: { short: 'Val', name: 'Valin' }, GUG: { short: 'Val', name: 'Valin' },
  UCU: { short: 'Ser', name: 'Serin' }, UCC: { short: 'Ser', name: 'Serin' },
  UCA: { short: 'Ser', name: 'Serin' }, UCG: { short: 'Ser', name: 'Serin' },
  CCU: { short: 'Pro', name: 'Proline' }, CCC: { short: 'Pro', name: 'Proline' },
  CCA: { short: 'Pro', name: 'Proline' }, CCG: { short: 'Pro', name: 'Proline' },
  ACU: { short: 'Thr', name: 'Treonin' }, ACC: { short: 'Thr', name: 'Treonin' },
  ACA: { short: 'Thr', name: 'Treonin' }, ACG: { short: 'Thr', name: 'Treonin' },
  GCU: { short: 'Ala', name: 'Alanin' }, GCC: { short: 'Ala', name: 'Alanin' },
  GCA: { short: 'Ala', name: 'Alanin' }, GCG: { short: 'Ala', name: 'Alanin' },
  UAU: { short: 'Tyr', name: 'Tirosin' }, UAC: { short: 'Tyr', name: 'Tirosin' },
  UAA: { short: 'Stop', name: 'Stop Codon' }, UAG: { short: 'Stop', name: 'Stop Codon' },
  UGA: { short: 'Stop', name: 'Stop Codon' },
  CAU: { short: 'His', name: 'Histidin' }, CAC: { short: 'His', name: 'Histidin' },
  CAA: { short: 'Gln', name: 'Glutamin' }, CAG: { short: 'Gln', name: 'Glutamin' },
  AAU: { short: 'Asn', name: 'Asparagin' }, AAC: { short: 'Asn', name: 'Asparagin' },
  AAA: { short: 'Lys', name: 'Lisin' }, AAG: { short: 'Lys', name: 'Lisin' },
  GAU: { short: 'Asp', name: 'Asam Aspartat' }, GAC: { short: 'Asp', name: 'Asam Aspartat' },
  GAA: { short: 'Glu', name: 'Asam Glutamat' }, GAG: { short: 'Glu', name: 'Asam Glutamat' },
  UGU: { short: 'Cys', name: 'Sistein' }, UGC: { short: 'Cys', name: 'Sistein' },
  UGG: { short: 'Trp', name: 'Triptofan' },
  CGU: { short: 'Arg', name: 'Arginin' }, CGC: { short: 'Arg', name: 'Arginin' },
  CGA: { short: 'Arg', name: 'Arginin' }, CGG: { short: 'Arg', name: 'Arginin' },
  AGU: { short: 'Ser', name: 'Serin' }, AGC: { short: 'Ser', name: 'Serin' },
  AGA: { short: 'Arg', name: 'Arginin' }, AGG: { short: 'Arg', name: 'Arginin' },
  GGU: { short: 'Gly', name: 'Glisin' }, GGC: { short: 'Gly', name: 'Glisin' },
  GGA: { short: 'Gly', name: 'Glisin' }, GGG: { short: 'Gly', name: 'Glisin' }
};

// Colors for phenotypes in Punnett Grid
const COLOR_PALETTE = [
  'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
  'bg-blue-950/80 text-blue-300 border-blue-700/50',
  'bg-purple-950/80 text-purple-300 border-purple-700/50',
  'bg-amber-950/80 text-amber-300 border-amber-700/50',
  'bg-rose-950/80 text-rose-300 border-rose-700/50',
  'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
  'bg-indigo-950/80 text-indigo-300 border-indigo-700/50',
  'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-700/50'
];

/**
 * Generate gametes for a given genotype (e.g., "Bb" -> ["B", "b"], "AaBb" -> ["AB", "Ab", "aB", "ab"])
 */
export function generateGametes(genotype: string): Gamete[] {
  const clean = genotype.trim();
  if (clean.length === 2) {
    // Single locus (Monohybrid)
    const g1 = clean[0];
    const g2 = clean[1];
    return [{ code: g1 }, { code: g2 }];
  } else if (clean.length === 4) {
    // Dihybrid
    const a1 = clean[0];
    const a2 = clean[1];
    const b1 = clean[2];
    const b2 = clean[3];

    const gametes = [
      `${a1}${b1}`,
      `${a1}${b2}`,
      `${a2}${b1}`,
      `${a2}${b2}`
    ];
    return gametes.map(code => ({ code }));
  }
  return [{ code: clean }];
}

/**
 * Combine gametes into offspring genotype sorted by loci
 */
export function combineGametes(g1: string, g2: string): string {
  if (g1.length === 1 && g2.length === 1) {
    const arr = [g1, g2].sort((a, b) => {
      if (a.toUpperCase() === b.toUpperCase()) {
        return a === a.toUpperCase() ? -1 : 1;
      }
      return a.localeCompare(b);
    });
    return arr.join('');
  } else if (g1.length === 2 && g2.length === 2) {
    const locusA = [g1[0], g2[0]].sort((a, b) => {
      if (a.toUpperCase() === b.toUpperCase()) return a === a.toUpperCase() ? -1 : 1;
      return a.localeCompare(b);
    }).join('');

    const locusB = [g1[1], g2[1]].sort((a, b) => {
      if (a.toUpperCase() === b.toUpperCase()) return a === a.toUpperCase() ? -1 : 1;
      return a.localeCompare(b);
    }).join('');

    return `${locusA}${locusB}`;
  }
  return `${g1}${g2}`;
}

/**
 * Determine Phenotype based on mode and genotype
 */
export function getPhenotype(genotype: string, mode: InheritanceMode): string {
  const g = genotype;

  switch (mode) {
    case 'monohibrid_dominan':
      if (g.includes('B')) return 'Tinggi (Dominan)';
      return 'Kerdil/Pendek (Resesif)';

    case 'monohibrid_intermediet':
      if (g === 'BB') return 'Bunga Merah (Homozigot Dominan)';
      if (g === 'Bb' || g === 'bB') return 'Bunga Merah Muda (Intermediet)';
      return 'Bunga Putih (Homozigot Resesif)';

    case 'dihibrid': {
      const isA = g[0] === 'B' || g[1] === 'B';
      const isB = g[2] === 'K' || g[3] === 'K';
      if (isA && isB) return 'Biji Bulat - Kuning';
      if (isA && !isB) return 'Biji Bulat - Hijau';
      if (!isA && isB) return 'Biji Keriput - Kuning';
      return 'Biji Keriput - Hijau';
    }

    case 'atavisme': {
      // Pial Ayam: R_P_ Walnut, R_pp Rose, rrP_ Pea, rrpp Single
      const hasR = g[0] === 'R' || g[1] === 'R';
      const hasP = g[2] === 'P' || g[3] === 'P';
      if (hasR && hasP) return 'Pial Walnut (Sumpel)';
      if (hasR && !hasP) return 'Pial Rose (Mawar)';
      if (!hasR && hasP) return 'Pial Pea (Biji)';
      return 'Pial Single (Bilah)';
    }

    case 'kriptomeri': {
      // Linaria maroccana: A_B_ Ungu, A_bb Merah, aaB_ Putih, aabb Putih
      const hasA = g[0] === 'A' || g[1] === 'A';
      const hasB = g[2] === 'B' || g[3] === 'B';
      if (hasA && hasB) return 'Bunga Ungu (Pigmen + Basa)';
      if (hasA && !hasB) return 'Bunga Merah (Pigmen + Asam)';
      return 'Bunga Putih (Tanpa Pigmen)';
    }

    case 'epistasis_dominan': {
      // Epistasis Dominan: P_ (Putih menutupi K/k), ppK_ Kuning, ppkk Hijau
      const hasP = g[0] === 'P' || g[1] === 'P';
      const hasK = g[2] === 'K' || g[3] === 'K';
      if (hasP) return 'Buah Putih (Epistasis Dominan P)';
      if (hasK) return 'Buah Kuning (Hipostasis K)';
      return 'Buah Hijau (Resesif ppkk)';
    }

    case 'polimeri': {
      // Polimeri: M1 dan M2 gen akumulatif warna merah
      let mCount = 0;
      if (g[0] === 'M') mCount++;
      if (g[1] === 'M') mCount++;
      if (g[2] === 'M') mCount++;
      if (g[3] === 'M') mCount++;

      if (mCount === 4) return 'Biji Merah Tua Sekali (4 M)';
      if (mCount === 3) return 'Biji Merah Tua (3 M)';
      if (mCount === 2) return 'Biji Merah Sedang (2 M)';
      if (mCount === 1) return 'Biji Merah Muda (1 M)';
      return 'Biji Putih (0 M / Resesif)';
    }

    case 'komplementer': {
      // Komplementer Lathyrus odoratus: C_P_ Bunga Ungu, selebihnya Putih
      const hasC = g[0] === 'C' || g[1] === 'C';
      const hasP = g[2] === 'P' || g[3] === 'P';
      if (hasC && hasP) return 'Bunga Ungu (Gen Saling Melengkapi)';
      return 'Bunga Putih (Substrat Tidak Sempurna)';
    }

    default:
      return 'Fenotipe Standar';
  }
}

/**
 * Solve Punnett Square matrix and return structured results
 */
export function solvePunnettSquare(
  parent1G: string,
  parent2G: string,
  mode: InheritanceMode
) {
  const gametesP1 = generateGametes(parent1G);
  const gametesP2 = generateGametes(parent2G);

  const grid: PunnettCell[][] = [];
  const genotypeCounts: Record<string, number> = {};
  const phenotypeCounts: Record<string, number> = {};
  const phenotypeColors: Record<string, string> = {};

  let colorIdx = 0;

  for (let r = 0; r < gametesP1.length; r++) {
    const row: PunnettCell[] = [];
    for (let c = 0; c < gametesP2.length; c++) {
      const g1 = gametesP1[r].code;
      const g2 = gametesP2[c].code;
      const combined = combineGametes(g1, g2);
      const pheno = getPhenotype(combined, mode);

      if (!phenotypeColors[pheno]) {
        phenotypeColors[pheno] = COLOR_PALETTE[colorIdx % COLOR_PALETTE.length];
        colorIdx++;
      }

      genotypeCounts[combined] = (genotypeCounts[combined] || 0) + 1;
      phenotypeCounts[pheno] = (phenotypeCounts[pheno] || 0) + 1;

      row.push({
        rowGamete: g1,
        colGamete: g2,
        genotype: combined,
        phenotype: pheno,
        colorBg: phenotypeColors[pheno]
      });
    }
    grid.push(row);
  }

  const total = gametesP1.length * gametesP2.length;

  const genotypeSummary: GenotypeSummary[] = Object.entries(genotypeCounts).map(
    ([genotype, count]) => ({
      genotype,
      count,
      ratio: `${count}/${total}`,
      percentage: Math.round((count / total) * 100 * 10) / 10
    })
  );

  const phenotypeSummary: PhenotypeSummary[] = Object.entries(phenotypeCounts).map(
    ([phenotype, count]) => ({
      phenotype,
      count,
      ratio: `${count}/${total}`,
      percentage: Math.round((count / total) * 100 * 10) / 10,
      colorBg: phenotypeColors[phenotype]
    })
  );

  return {
    gametesP1,
    gametesP2,
    grid,
    genotypeSummary,
    phenotypeSummary,
    total
  };
}

/**
 * DNA Transcription (DNA -> mRNA)
 */
export function transcribeDnaToMrna(dnaStrand: string): string {
  const clean = dnaStrand.toUpperCase().replace(/[^ATCG]/g, '');
  let mrna = '';
  for (const char of clean) {
    if (char === 'T') mrna += 'A';
    else if (char === 'A') mrna += 'U';
    else if (char === 'C') mrna += 'G';
    else if (char === 'G') mrna += 'C';
  }
  return mrna;
}

/**
 * mRNA Translation to Amino Acids
 */
export function translateMrnaToProtein(mrnaSequence: string): CodonTranslation[] {
  const result: CodonTranslation[] = [];
  const clean = mrnaSequence.toUpperCase().replace(/[^AUCG]/g, '');

  for (let i = 0; i < clean.length - 2; i += 3) {
    const codon = clean.substring(i, i + 3);
    const info = CODON_TABLE[codon] || { short: '???', name: 'Unknown Codon' };
    result.push({
      codon,
      aminoAcid: info.short,
      fullName: info.name,
      isStart: codon === 'AUG',
      isStop: info.short === 'Stop'
    });
    if (info.short === 'Stop') break; // Stop translation at stop codon
  }

  return result;
}

/**
 * Blood Group Child Probability Calculator
 */
export function calculateBloodGroupChildren(fatherGenotype: string, motherGenotype: string) {
  const parseGenotype = (g: string) => {
    if (g === 'IᴬIᴬ') return ['Iᴬ', 'Iᴬ'];
    if (g === 'IᴬIᵒ') return ['Iᴬ', 'Iᵒ'];
    if (g === 'IᴮIᴮ') return ['Iᴮ', 'Iᴮ'];
    if (g === 'IᴮIᵒ') return ['Iᴮ', 'Iᵒ'];
    if (g === 'IᴬIᴮ') return ['Iᴬ', 'Iᴮ'];
    return ['Iᵒ', 'Iᵒ'];
  };

  const fAlleles = parseGenotype(fatherGenotype);
  const mAlleles = parseGenotype(motherGenotype);

  const outcomes: Record<string, { count: number; bloodType: string }> = {};
  let total = 0;

  for (const f of fAlleles) {
    for (const m of mAlleles) {
      const combined = [f, m].sort().join('');
      let type = 'O';
      if (combined.includes('Iᴬ') && combined.includes('Iᴮ')) type = 'AB';
      else if (combined.includes('Iᴬ')) type = 'A';
      else if (combined.includes('Iᴮ')) type = 'B';
      else type = 'O';

      if (!outcomes[combined]) {
        outcomes[combined] = { count: 0, bloodType: type };
      }
      outcomes[combined].count += 1;
      total += 1;
    }
  }

  return Object.entries(outcomes).map(([genotype, data]) => ({
    genotype,
    bloodType: data.bloodType,
    probability: (data.count / total) * 100
  }));
}
