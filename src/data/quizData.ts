import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bila tanaman kacang ercis berbiji bulat kuning (BbKt) disilangkan dengan sesamanya (BbKt), berapakah persentase keturunan F2 yang memiliki fenotipe berbiji keriput kuning?',
    options: ['56.25% (9/16)', '18.75% (3/16)', '12.5% (2/16)', '6.25% (1/16)'],
    correctAnswer: 1,
    explanation: 'Rasio F2 Dihibrid Mendelian BbKt x BbKt adalah 9 (Bulat Kuning) : 3 (Bulat Hijau) : 3 (Keriput Kuning) : 1 (Keriput Hijau). Maka fenotipe Keriput Kuning adalah 3/16 = 18.75%.',
    topic: 'Hukum II Mendel'
  },
  {
    id: 2,
    question: 'Peristiwa di mana gen dominan seolah-olah tersembunyi apabila berdiri sendiri dan baru akan mengekspresikan sifatnya jika bersama-sama dengan gen dominan lain disebut...',
    options: ['Epistasis Dominan', 'Atavisme', 'Kriptomeri', 'Polimeri'],
    correctAnswer: 2,
    explanation: 'Kriptomeri adalah peristiwa gen dominan yang seolah-olah tersembunyi jika berdiri sendiri (misalnya pada bunga Linaria maroccana A_bb berwarna merah, aaB_ berwarna putih, tetapi jika A dan B bersama-sama A_B_ menjadi bunga ungu). Rasio F2 = 9 : 3 : 4.',
    topic: 'Penyimpangan Semu Mendel'
  },
  {
    id: 3,
    question: 'Suatu rantai DNA sense memiliki urutan basa: 3\'- TAC - CGT - GCA - ATT - 5\'. Bagaimanakah urutan kodon pada dRNA (mRNA) hasil transkripsinya?',
    options: ['5\'- AUG - GCA - CGU - UAA - 3\'', '5\'- UAC - CGU - GCA - AUU - 3\'', '5\'- ATG - GCA - CGT - TAA - 3\'', '5\'- AUG - CGU - GCA - UAA - 3\''],
    correctAnswer: 0,
    explanation: 'Transkripsi merubah T -> A, A -> U, C -> G, G -> C. Maka TAC -> AUG, CGT -> GCA, GCA -> CGU, ATT -> UAA.',
    topic: 'Sintesis Protein'
  },
  {
    id: 4,
    question: 'Seorang wanita pembawa sifat hemofilia (XᴴXʰ) menikah dengan seorang pria normal (XᴴY). Berapakah peluang mereka memiliki anak laki-laki yang menderita hemofilia?',
    options: ['0% dari seluruh anak', '25% dari seluruh anak (50% dari anak laki-laki)', '50% dari seluruh anak', '100% dari anak laki-laki'],
    correctAnswer: 1,
    explanation: 'Kombinasi keturunan: XᴴXᴴ (Wanita Normal), XᴴXʰ (Wanita Carrier), XᴴY (Pria Normal), XʰY (Pria Hemofilia). Pria hemofilia adalah 1 dari 4 kemungkinan anak (25%) atau 50% dari anak laki-laki.',
    topic: 'Hereditas Manusia (X-Linked)'
  },
  {
    id: 5,
    question: 'Pasangan suami istri bergolongan darah A heterozigot (IᴬIᵒ) dan B heterozigot (IᴮIᵒ). Fenotipe golongan darah yang MUNGKIN dimiliki oleh anak-anak mereka adalah...',
    options: ['Hanya Golongan A dan B', 'Hanya Golongan AB dan O', 'Semua jenis: A, B, AB, dan O', 'Hanya Golongan AB'],
    correctAnswer: 2,
    explanation: 'Kombinasi gamet: (Iᴬ, Iᵒ) x (Iᴮ, Iᵒ) -> IᴬIᴮ (AB), IᴬIᵒ (A), IᴮIᵒ (B), IᵒIᵒ (O). Keempat jenis golongan darah ABO mungkin muncul masing-masing dengan peluang 25%.',
    topic: 'Golongan Darah ABO'
  },
  {
    id: 6,
    question: 'Jika terjadi mutasi substitusi basa nitrogen yang meruah satu kodon asam amino menjadi Kodon Stop (UAA, UAG, UGA) prematur, jenis mutasi ini dinamakan...',
    options: ['Silent Mutation', 'Missense Mutation', 'Nonsense Mutation', 'Frameshift Mutation'],
    correctAnswer: 2,
    explanation: 'Nonsense Mutation (Mutasi Tanpa Arti) terjadi ketika perubahan basa mengganti kodon pembawa asam amino menjadi Kodon Stop, sehingga sintesis polipeptida terhenti lebih awal.',
    topic: 'Mutasi Gen'
  },
  {
    id: 7,
    question: 'Kariotipe individu penderita Sindrom Down ditandai dengan perubahan jumlah kromosom yaitu...',
    options: ['45, X0 (Monosomi Gonosom)', '47, XXY (Trisomi Gonosom)', '47, XX/XY +21 (Trisomi Autosom nomor 21)', '47, XX/XY +18 (Trisomi Autosom nomor 18)'],
    correctAnswer: 2,
    explanation: 'Sindrom Down disebabkan oleh trisomi (kelebihan satu kromosom) pada autosom nomor 21 akibat non-disjunction pada saat pembentukan gamet.',
    topic: 'Mutasi Kromosom'
  },
  {
    id: 8,
    question: 'Hasil persilangan lalat buah pautan gen menghasilkan 410 tipe parental dan 90 tipe rekombinan. Berapakah Nilai Pindah Silang (NPS) dari persilangan tersebut?',
    options: ['18%', '22%', '82%', '90%'],
    correctAnswer: 0,
    explanation: 'Total Keturunan = 410 + 90 = 500. NPS = (Jumlah Rekombinan / Total Keturunan) x 100% = (90 / 500) x 100% = 18%. Jarak gen = 18 cM.',
    topic: 'Pautan & Pindah Silang'
  },
  {
    id: 9,
    question: 'Manakah di bawah ini yang merupakan ciri khas persilangan dengan sifat Intermediet (Kodominan/Incomplete Dominance) pada F2 monohibrid?',
    options: ['Rasio fenotipe F2 sama dengan rasio genotipenya (1 : 2 : 1)', 'Fenotipe resesif tertutup total oleh dominan', 'Rasio fenotipenya selalu 3 : 1', 'Menghasilkan fenotipe baru 9 : 3 : 3 : 1'],
    correctAnswer: 0,
    explanation: 'Pada sifat Intermediet (misal Bunga Mirabilis jalapa), genotipe MM = Merah, Mm = Merah Muda, mm = Putih. Rasio genotipe F2 (1 MM : 2 Mm : 1 mm) persis sama dengan rasio fenotipenya (1 Merah : 2 Merah Muda : 1 Putih).',
    topic: 'Hukum I Mendel'
  },
  {
    id: 10,
    question: 'Penyakit Albino ditentukan oleh gen resesif autosom (a). Pasangan suami istri yang keduanya berfenotipe normal tetapi masing-masing membawa sifat albino (Aa) memiliki peluang melahirkan anak albino sebesar...',
    options: ['100%', '75%', '50%', '25%'],
    correctAnswer: 3,
    explanation: 'Persilangan Aa x Aa -> AA (Normal 25%), Aa (Normal Carrier 50%), aa (Albino 25%). Peluang anak albino adalah 25%.',
    topic: 'Hereditas Manusia (Autosom)'
  }
];
