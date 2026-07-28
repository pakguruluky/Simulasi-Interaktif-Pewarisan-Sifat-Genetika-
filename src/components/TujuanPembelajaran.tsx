import React from 'react';
import { Target, CheckCircle2, Award, Sparkles, BookCheck, Lightbulb } from 'lucide-react';
import { TabType } from '../types';

interface ObjectivesProps {
  setActiveTab: (tab: TabType) => void;
}

export const TujuanPembelajaran: React.FC<ObjectivesProps> = ({ setActiveTab }) => {
  const capianKompetensi = [
    {
      title: 'Materi Genetik (DNA, RNA, Gen & Kromosom)',
      description: 'Menganalisis hubungan antara struktur DNA, gen, dan kromosom dalam penentuan sifat organisme serta mekanisme transkripsi-translasi sintesis protein.'
    },
    {
      title: 'Hukum Pewarisan Sifat Mendel & Penyimpangan Semu',
      description: 'Menerapkan Hukum I dan II Mendel dalam perhitungan persilangan monohibrid, dihibrid, serta memprediksi pola penyimpangan semu (Atavisme, Kriptomeri, Epistasis, Polimeri, Komplementer).'
    },
    {
      title: 'Pautan Gen, Pindah Silang & Determinasi Seks',
      description: 'Menganalisis pola pautan gen, persentase nilai pindah silang (NPS), penetapan jarak lokus gen pada peta kromosom, dan sistem penentuan jenis kelamin.'
    },
    {
      title: 'Pola Hereditas Manusia & Pedigree',
      description: 'Menganalisis pola pewarisan sifat golongan darah (ABO, Rh, MN), cacat/penyakit menurun autosom dan gonosom, serta membaca peta silsilah keluarga (pedigree).'
    },
    {
      title: 'Mutasi Gen & Mutasi Kromosom',
      description: 'Menganalisis jenis-jenis mutasi titik (substitusi & frameshift) dan mutasi kromosom (aneuploidi & struktural) serta dampaknya terhadap fenotipe dan kesehatan manusia.'
    }
  ];

  const indikatorPencapaian = [
    'Siswa mampu mensimulasikan persilangan monohibrid dan dihibrid secara interaktif menggunakan Diagram Punnett.',
    'Siswa mampu menganalisis mekanisme sintesis protein (transkripsi DNA ke mRNA dan translasi menjadi rantai polipeptida).',
    'Siswa mampu menghitung Nilai Pindah Silang (NPS) dan memetakan jarak gen pada kromosom.',
    'Siswa mampu mengidentifikasi pola pewarisan penyakit terpaut kromosom X (Hemofilia & Buta Warna) dan autosom (Albino) pada peta silsilah.',
    'Siswa mampu menyusun dan mengunduh LKPD Digital beserta Laporan Latihan Soal Genetika secara lengkap.'
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner Utama */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 border border-slate-800 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kurikulum Biologi SMA / MA Kelas XII</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Laboratorium & Simulasi Interaktif Pewarisan Sifat (Genetika)
          </h2>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Selamat datang di media pembelajaran interaktif Genetika SMA. Aplikasi ini dirancang secara khusus untuk mempermudah pemahaman konsep molekuler, persilangan Hukum Mendel, hereditas manusia, hingga mutasi kromosom melalui visualisasi real-time dan LKPD Digital.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('simulasi')}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-950/60 transition-all hover:scale-105 text-sm"
            >
              <Target className="w-4 h-4" />
              <span>Mulai Lab Simulasi Interaktif</span>
            </button>
            <button
              onClick={() => setActiveTab('materi')}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
            >
              <BookCheck className="w-4 h-4 text-cyan-400" />
              <span>Pelajari Ringkasan Materi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Capaian Pembelajaran (CP) & Tujuan Pembelajaran (TP) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Capaian & Tujuan Pembelajaran Utama</h3>
          </div>
          
          <div className="space-y-3">
            {capianKompetensi.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl p-4 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indikator Pencapaian Kompetensi */}
        <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-slate-100">Indikator Keberhasilan Belajar</h3>
            </div>
            <ul className="space-y-3">
              {indikatorPencapaian.map((ind, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-700/60 bg-slate-900/40 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Petunjuk Penggunaan Aplikasi:</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              1. Buka tab <strong className="text-slate-200">Materi Lengkap</strong> untuk mereview teori dasar.<br />
              2. Jalankan pengujian di <strong className="text-slate-200">Lab Simulasi</strong>.<br />
              3. Kerjakan <strong className="text-slate-200">LKPD Digital</strong> & cetak hasilnya untuk diserahkan ke guru!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
