import { ChromosomeAnomaly } from '../types';

export const CHROMOSOME_ANOMALIES: ChromosomeAnomaly[] = [
  {
    id: 'down',
    name: 'Sindrom Down (Trisomi 21)',
    type: 'Aneuploidi (Jumlah)',
    formula: '47, XX/XY +21',
    cause: 'Gagal berpisah (non-disjunction) autosom nomor 21 saat oogenesis atau spermatogenesis.',
    characteristics: [
      'Wajah mongoloid dengan lipatan epikantus mata',
      'Lidah tebal dan menjulur (macroglossia)',
      'Garis telapak tangan tunggal (Simian crease)',
      'Hambatan intelektual ringan hingga sedang',
      'Kelainan jantung bawaan pada sebagian penderita'
    ],
    incidence: '1 dari 700 kelahiran (risiko meningkat pada usia ibu >35 tahun)',
    diagramColor: 'emerald'
  },
  {
    id: 'klinefelter',
    name: 'Sindrom Klinefelter',
    type: 'Aneuploidi (Jumlah)',
    formula: '47, XXY',
    cause: 'Gagal berpisah kromosom sex X pada saat pembentukan gamet ayah atau ibu.',
    characteristics: [
      'Pria berpostur tubuh tinggi dengan kaki panjang',
      'Perkembangan payudara (Ginekomastia)',
      'Testis mengecil (hipogonadisme) dan steril (tidak menghasilkan sperma)',
      'Pertumbuhan bulu tubuh minimal',
      'Suara cenderung melengking seperti wanita'
    ],
    incidence: '1 dari 500 - 1.000 kelahiran bayi laki-laki',
    diagramColor: 'blue'
  },
  {
    id: 'turner',
    name: 'Sindrom Turner',
    type: 'Aneuploidi (Jumlah)',
    formula: '45, X0',
    cause: 'Kehilangan satu kromosom sex X saat pembentukan gamet atau pembelahan mitosis awal.',
    characteristics: [
      'Wanita berbadan pendek (stature pendek)',
      'Leher berselaput (webbed neck)',
      'Dada lebar dengan jarak puting jauh',
      'Ovarium tidak berkembang (steril/tidak mengalami menstruasi)',
      'IQ umumnya normal'
    ],
    incidence: '1 dari 2.500 kelahiran bayi perempuan',
    diagramColor: 'purple'
  },
  {
    id: 'edwards',
    name: 'Sindrom Edwards (Trisomi 18)',
    type: 'Aneuploidi (Jumlah)',
    formula: '47, XX/XY +18',
    cause: 'Trisomi autosom nomor 18 akibat non-disjunction meiosis.',
    characteristics: [
      'Bentuk kepala lonjong dan telinga terletak rendah',
      'Tangan mengepal kencang dengan jari saling tumpang tindih',
      'Kelainan organ dalam parah (jantung, ginjal)',
      'Harapan hidup sangat singkat (umumnya <1 tahun)'
    ],
    incidence: '1 dari 5.000 kelahiran',
    diagramColor: 'rose'
  },
  {
    id: 'patau',
    name: 'Sindrom Patau (Trisomi 13)',
    type: 'Aneuploidi (Jumlah)',
    formula: '47, XX/XY +13',
    cause: 'Trisomi autosom nomor 13.',
    characteristics: [
      'Bibir sumbing (cleft lip) dan langit-langit terbelah',
      'Mata kecil (mikroftalmia) atau bermata satu (siklopik)',
      'Polidaktili (kelebihan jari tangan/kaki)',
      'Kerusakan sistem saraf pusat berat'
    ],
    incidence: '1 dari 10.000 kelahiran',
    diagramColor: 'amber'
  },
  {
    id: 'cri_du_chat',
    name: 'Sindrom Cri-du-Chat (Tangisan Kucing)',
    type: 'Struktural',
    formula: '46, XX/XY, 5p-',
    cause: 'Delesi (kehilangan) lengan pendek (p) kromosom nomor 5.',
    characteristics: [
      'Tangisan bayi melengking menyerupai suara kucing akibat kelainan laring',
      'Ukuran kepala kecil (mikrosefali)',
      'Jarak kedua mata lebar (hipertelorisme)',
      'Keterlambatan perkembangan motorik'
    ],
    incidence: '1 dari 20.000 - 50.000 kelahiran',
    diagramColor: 'cyan'
  }
];
