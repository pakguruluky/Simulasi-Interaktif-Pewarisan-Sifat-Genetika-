import { LkpdTask } from '../types';

export const LKPD_TASKS: LkpdTask[] = [
  {
    id: 'lkpd_1',
    title: 'Tugas Eksperimen 1: Simulasi Persilangan Dihibrid Mendelian',
    instructions: 'Atur Simulasi Punnett Square ke mode "Dihibrid (BbKt x BbKt)". Amati perbandingan rasio fenotipe yang dihasilkan pada tabel ringkasan.',
    questionType: 'multiple_choice',
    options: [
      '9 Bulat Kuning : 3 Bulat Hijau : 3 Keriput Kuning : 1 Keriput Hijau',
      '12 Putih : 3 Kuning : 1 Hijau',
      '9 Ungu : 3 Merah : 4 Putih',
      '15 Merah : 1 Putih'
    ],
    correctAnswer: '9 Bulat Kuning : 3 Bulat Hijau : 3 Keriput Kuning : 1 Keriput Hijau',
    explanation: 'Persilangan Dihibrid heterozigot ganda (BbKt x BbKt) sesuai Hukum II Mendel menghasilkan rasio fenotipe F2 = 9:3:3:1.',
    points: 20
  },
  {
    id: 'lkpd_2',
    title: 'Tugas Eksperimen 2: Penyimpangan Semu Hukum Mendel (Atavisme)',
    instructions: 'Atur Simulasi ke mode "Atavisme (Pial Ayam) RrPp x RrPp". Berapakah jumlah kombinasi genotipe yang menghasilkan fenotipe Pial Walnut?',
    questionType: 'multiple_choice',
    options: [
      '9 dari 16 kombinasi (Genotipe R_P_)',
      '3 dari 16 kombinasi',
      '1 dari 16 kombinasi',
      '12 dari 16 kombinasi'
    ],
    correctAnswer: '9 dari 16 kombinasi (Genotipe R_P_)',
    explanation: 'Pada Atavisme, gen R dan P saling berinteraksi. Setiap genotipe yang mengandung setidaknya satu alel R dominan dan satu alel P dominan (R_P_) akan mengekspresikan pial Walnut (9/16).',
    points: 20
  },
  {
    id: 'lkpd_3',
    title: 'Tugas Eksperimen 3: Transkripsi & Mutasi Gen Pembawa Asam Amino',
    instructions: 'Pada Simulasi DNA & Mutasi, jika untai DNA sense 3\'- TAC - CGT - ATT - 5\' mengalami mutasi substitusi basa menjadi 3\'- TAC - ACT - ATT - 5\', apakah akibat yang terjadi pada rantai asam amino?',
    questionType: 'multiple_choice',
    options: [
      'Terjadi Missense Mutation (Asam amino berubah karena kodon mRNA berubah dari GCA menjadi UGA - Stop prematur)',
      'Terjadi Frameshift Mutation yang menambah panjang protein',
      'Tidak ada perubahan asam amino sama sekali',
      'Kodon AUG berubah menjadi kodon Valin'
    ],
    correctAnswer: 'Terjadi Missense Mutation (Asam amino berubah karena kodon mRNA berubah dari GCA menjadi UGA - Stop prematur)',
    explanation: 'Perubahan basa DNA mengakibatkan perubahan kodon mRNA, yang mengubah jenis asam amino atau membentuk Kodon Stop prematur.',
    points: 20
  },
  {
    id: 'lkpd_4',
    title: 'Tugas Eksperimen 4: Analisis Pautan Gen & Nilai Pindah Silang (NPS)',
    instructions: 'Gunakan Simulasi Pautan Gen. Jika jarak antara Lokus Gen A dan Gen B pada kromosom adalah 15 cM, berapakah persentase keturunan tipe Rekombinan yang terbentuk?',
    questionType: 'multiple_choice',
    options: ['15%', '30%', '50%', '85%'],
    correctAnswer: '15%',
    explanation: '1 centiMorgan (cM) setara dengan 1% Nilai Pindah Silang (NPS / Frekuensi Rekombinasi). Maka jarak 15 cM menghasilkan 15% keturunan rekombinan.',
    points: 20
  },
  {
    id: 'lkpd_5',
    title: 'Tugas Analisis Silsilah: Pedigree Golongan Darah & Hemofilia',
    instructions: 'Jelaskan mengapa seorang pria penderita hemofilia (XʰY) TIDAK MUNGKIN mewariskan gen hemofilia kepada anak laki-lakinya!',
    questionType: 'short_essay',
    explanation: 'Seorang ayah selalu memberikan kromosom Y kepada anak laki-lakinya, sedangkan gen hemofilia terletak pada kromosom X. Anak laki-laki menerima kromosom X dari ibunya.',
    points: 20
  }
];
