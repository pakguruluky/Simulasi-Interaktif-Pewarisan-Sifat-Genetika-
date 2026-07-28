import { MaterialSection } from '../types';

export const MATERIAL_SECTIONS: MaterialSection[] = [
  {
    id: 'materi_genetik',
    title: '1. Materi Genetik (DNA, RNA, Gen, Kromosom)',
    iconName: 'Dna',
    summary: 'Materi genetik membawa informasi pewarisan sifat dari induk kepada keturunan melalui molekul asam nukleat.',
    content: [
      {
        subtitle: 'Kromosom dan Gen',
        description: 'Kromosom adalah struktur padat yang terdiri dari DNA terikat protein histon di dalam inti sel. Gen merupakan unit terkecil penentu sifat yang terletak pada lokus tertentu di dalam kromosom.',
        keyPoints: [
          'Kromosom Autosom (Kromosom Tubuh): Mengatur sifat-sifat fisik non-kelamin (22 pasang/44 buah pada manusia).',
          'Kromosom Gonosom (Kromosom Kelamin): Penentu jenis kelamin (X dan Y, 1 pasang/2 buah).',
          'Alel: Pasangan gen yang terletak pada lokus bersesuaian pada kromosom homolog.'
        ]
      },
      {
        subtitle: 'Struktur DNA vs RNA',
        description: 'DNA (Deoxyribonucleic Acid) berbentuk pita ganda terpilin (double helix) menurut Watson-Crick. RNA (Ribonucleic Acid) berbentuk pita tunggal lurus atau terlipat.',
        keyPoints: [
          'DNA: Gula Deoksiribosa | Basa Nitrogen: Purin (Adenin-A, Guanin-G) & Pirimidin (Timin-T, Sitosin-C).',
          'RNA: Gula Ribosa | Basa Nitrogen: Purin (Adenin-A, Guanin-G) & Pirimidin (Urasil-U, Sitosin-C).',
          'Pasangan Basa Konplementer DNA: A berpasangan dengan T (2 ikatan H), C berpasangan dengan G (3 ikatan H).'
        ]
      },
      {
        subtitle: 'Sintesis Protein: Transkripsi & Translasi',
        description: 'Sintesis protein terjadi di ribosom melalui 2 tahapan utama:',
        keyPoints: [
          'Transkripsi: Pencetakan dRNA (mRNA) oleh rantai DNA antisense di dalam inti sel.',
          'Translasi: Penerjemahan kodon dRNA oleh tRNA di ribosom menjadi rantai asam amino (polipeptida).',
          'Kodon Start: AUG (Metionin) | Kodon Stop: UAA, UAG, UGA.'
        ]
      }
    ]
  },
  {
    id: 'hukum_mendel',
    title: '2. Hukum Mendel & Penyimpangan Semu',
    iconName: 'GitMerge',
    summary: 'Gregor Johann Mendel merumuskan prinsip dasar pewarisan sifat melalui eksperimen tanaman kacang ercis (Pisum sativum).',
    content: [
      {
        subtitle: 'Hukum I Mendel (Segregasi Bebas)',
        description: 'Pada pembentukan gamet, alel-alel dari pasangan gen memisah/bersegregasi secara bebas sehingga setiap gamet hanya menerima satu alel.',
        keyPoints: [
          'Berlaku pada persilangan Monohibrid (satu sifat beda).',
          'Persilangan Monohibrid Dominan Penuh F2: Rasio Genotipe 1:2:1 (BB : Bb : bb) | Rasio Fenotipe 3:1 (Dominan : Resesif).',
          'Persilangan Monohibrid Intermediet F2: Rasio Fenotipe 1:2:1 (Merah : Merah Muda : Putih).'
        ]
      },
      {
        subtitle: 'Hukum II Mendel (Asortasi Bebas)',
        description: 'Setiap alel dari pasangan gen dapat mengelompok secara bebas dengan alel dari pasangan gen lain yang tidak se-alel pada pembentukan gamet.',
        keyPoints: [
          'Berlaku pada persilangan Dihibrid (dua sifat beda).',
          'Rasio Fenotipe F2 Dihibrid (BbKt x BbKt): 9 : 3 : 3 : 1 (Bulat-Kuning : Bulat-Hijau : Keriput-Kuning : Keriput-Hijau).'
        ]
      },
      {
        subtitle: 'Penyimpangan Semu Hukum Mendel',
        description: 'Modifikasi rasio 9:3:3:1 akibat interaksi antar gen:',
        keyPoints: [
          'Atavisme (Pial Ayam): Interaksi 2 pasang gen menghasilkan fenotipe baru Walnut (R_P_) dan Single (rrpp) -> Rasio 9:3:3:1.',
          'Kriptomeri (Linaria maroccana): Gen dominan yang tersembunyi jika berdiri sendiri -> Rasio F2 = 9:3:4 (Ungu : Merah : Putih).',
          'Epistasis-Hipostasis: Epistasis Dominan menutupi gen lain -> Rasio F2 = 12:3:1 (Putih : Kuning : Hijau).',
          'Polimeri: Banyak gen kumulatif menambah pigmen -> Rasio F2 = 15:1 (Merah : Putih).',
          'Komplementer: Gen saling melengkapi -> Rasio F2 = 9:7 (Ungu : Putih).'
        ]
      }
    ]
  },
  {
    id: 'pautan_pindah_silang',
    title: '3. Pautan Gen, Pindah Silang & Peta Kromosom',
    iconName: 'Unlink',
    summary: 'Gen-gen yang terletak pada kromosom yang sama cenderung diturunkan bersama-sama (pautan gen) kecuali terjadi perpindahan segmen kromosom (pindah silang).',
    content: [
      {
        subtitle: 'Pautan Gen (Gene Linkage)',
        description: 'Pautan gen terjadi jika dua atau lebih gen terletak pada kromosom homolog yang sama dan tidak bersegregasi secara bebas saat meiosis.',
        keyPoints: [
          'Jumlah kombinasi gamet menjadi lebih sedikit dari persilangan bebas.',
          'Gamet tipe parental diproduksi dalam jumlah jauh lebih dominan dibanding tipe rekombinan.'
        ]
      },
      {
        subtitle: 'Pindah Silang (Crossing Over)',
        description: 'Peristiwa pertukaran segmen kromatid bukan saudara (non-sister chromatids) dari pasangan kromosom homolog pada fase Profase I Meiosis (Diploten).',
        keyPoints: [
          'Nilai Pindah Silang (NPS / Recombination Frequency) = (Jumlah Rekombinan / Total Keturunan) x 100%.',
          'Jarak Gen (Map Unit / cM): 1% NPS = 1 centiMorgan (cM) pada peta kromosom.'
        ]
      },
      {
        subtitle: 'Determinasi Seks',
        description: 'Penentuan jenis kelamin pada organisme:',
        keyPoints: [
          'Tipe XX/XY: Manusia dan Mamalia (XX = Betina/Wanita, XY = Jantan/Pria).',
          'Tipe ZW/ZZ: Burung dan Unggas (ZW = Betina, ZZ = Jantan).',
          'Tipe XO/XX: Serangga Serangga/Belalang (XO = Jantan, XX = Betina).'
        ]
      }
    ]
  },
  {
    id: 'hereditas_manusia',
    title: '4. Pola Hereditas Manusia & Pedigree',
    iconName: 'Users',
    summary: 'Pewarisan sifat fisik, golongan darah, dan penyakit/cacat menurun pada manusia serta analisis pohon silsilah keluarga (pedigree).',
    content: [
      {
        subtitle: 'Golongan Darah Manusia',
        description: 'Sistem ABO dikendalikan oleh alel ganda (Iᴬ, Iᴮ, Iᵒ). Sistem Rhesus dikendalikan oleh gen Rh⁺ (dominan) dan Rh⁻ (resesif). Sistem MN dikendalikan oleh alel Lᴹ dan Lᴺ (kodominan).',
        keyPoints: [
          'Golongan A: IᴬIᴬ atau IᴬIᵒ | Golongan B: IᴮIᴮ atau IᴮIᵒ.',
          'Golongan AB: IᴬIᴮ (Kodominan) | Golongan O: IᵒIᵒ (Resesif Homozigot).'
        ]
      },
      {
        subtitle: 'Cacat dan Penyakit Menurun (Autosom & Gonosom)',
        description: 'Penyakit menurun umumnya tidak dapat disembuhkan tetapi dapat diprediksi rasio kemunculannya:',
        keyPoints: [
          'Terpaut Autosom Resesif: Albino (aa), Thalassemia, Anemia Sel Sabit (Sickle Cell), Fenilketonuria (PKU).',
          'Terpaut Autosom Dominan: Polidaktili (P_), Brakidaktili (Bb), Huntington.',
          'Terpaut Gonosom X Resesif: Hemofilia (Xʰ), Buta Warna Red-Green (Xᶜ). Hanya wanita yang dapat menjadi carrier (XᴴXʰ / XᶜXᶜ).'
        ]
      },
      {
        subtitle: 'Analisis Peta Silsilah (Pedigree Chart)',
        description: 'Diagram sejarah keluarga yang menggambarkan munculnya fenotipe atau genotipe sifat tertentu dari generasi ke generasi.',
        keyPoints: [
          'Simbol Lingkaran: Wanita | Simbol Persegi: Pria.',
          'Simbol Berwarna/Gelap: Penderita (Affected) | Setengah Gelap: Pembawa Sifat (Carrier).'
        ]
      }
    ]
  },
  {
    id: 'mutasi',
    title: '5. Mutasi Gen dan Kromosom',
    iconName: 'Zap',
    summary: 'Mutasi adalah perubahan materi genetik (DNA/RNA) yang dapat diturunkan jika terjadi pada sel gamet (mutasi germinal).',
    content: [
      {
        subtitle: 'Mutasi Gen (Point Mutation)',
        description: 'Perubahan pada urutan basa nitrogen dalam rantai DNA:',
        keyPoints: [
          'Substitusi Silent (Diam): Basa berubah tetapi menghasilkan asam amino yang sama.',
          'Substitusi Missense (Salah Arti): Basa berubah menyebabkan asam amino berubah.',
          'Substitusi Nonsense (Tanpa Arti): Basa berubah membentuk Kodon Stop prematur.',
          'Frameshift (Pergeseran Rangka): Insersi atau delesi basa yang mengubah seluruh urutan pembacaan kodon ke bawah.'
        ]
      },
      {
        subtitle: 'Mutasi Kromosom Struktural & Numerik',
        description: 'Perubahan struktur kromatid atau jumlah keseluruhan kromosom (aneuploidi / euploidi):',
        keyPoints: [
          'Mutasi Struktur: Delesi (kehilangan segmen), Duplikasi (penambahan), Inversi (pembalikan 180°), Translokasi (pindah segmen ke kromosom non-homolog).',
          'Aneuploidi akibat Nondisjunction (Gagal Berpisah):',
          '1. Sindrom Down: Trisomi 21 (47, XX/XY +21).',
          '2. Sindrom Klinefelter: Trisomi Gonosom Pria (47, XXY).',
          '3. Sindrom Turner: Monosomi Gonosom Wanita (45, X0).'
        ]
      }
    ]
  }
];
