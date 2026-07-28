import React from 'react';
import { Bookmark, ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';

export const ReferensiSection: React.FC = () => {
  const references = [
    {
      authors: 'Campbell, N. A., Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B.',
      year: '2020',
      title: 'Campbell Biology (12th Edition)',
      publisher: 'Pearson Education, Inc., New York.',
      description: 'Buku teks standar internasional biologi molekuler, hukum pewarisan sifat, dan ekskresi molekuler.'
    },
    {
      authors: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemdikbudristek RI)',
      year: '2022',
      title: 'Buku Teks Utama Biologi SMA/MA Kelas XII Kurikulum Merdeka',
      publisher: 'Pusat Kurikulum dan Perbukuan, Jakarta.',
      description: 'Panduan standar alur tujuan pembelajaran biologi SMA tingkat nasional.'
    },
    {
      authors: 'Irnaningtyas & Istiadi, Y.',
      year: '2021',
      title: 'Biologi untuk SMA/MA Kelas XII',
      publisher: 'Penerbit Erlangga, Jakarta.',
      description: 'Buku rujukan utama pembelajaran konsep genetika, persilangan Hukum Mendel, dan mutasi.'
    },
    {
      authors: 'National Center for Biotechnology Information (NCBI)',
      year: '2024',
      title: 'Genetics Home Reference & OMIM Database (Online Mendelian Inheritance in Man)',
      publisher: 'U.S. National Library of Medicine.',
      description: 'Basis data rujukan internasional mengenai penyakit genetik terpaut kromosom manusia.'
    },
    {
      authors: 'Snustad, D. P., & Simmons, M. J.',
      year: '2015',
      title: 'Principles of Genetics (7th Edition)',
      publisher: 'John Wiley & Sons, Inc., Hoboken.',
      description: 'Buku referensi mendalam mengenai peta kromosom, rekombinasi pautan gen, dan mutasi struktur DNA.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-2">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-4 h-4" />
          <span>Sumber Belajar & Pustaka Kredibel</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Daftar Referensi Akademik Biologi</h2>
        <p className="text-xs text-slate-400">
          Seluruh materi, simulasi persilangan, dan rumus genetika di dalam aplikasi ini dikembangkan berdasarkan literatur sains standar nasional dan internasional.
        </p>
      </div>

      {/* References Grid */}
      <div className="space-y-4">
        {references.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl p-5 space-y-2 transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950 border border-cyan-800 px-2.5 py-0.5 rounded-full">
                  Referensi {idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-100 mt-2">
                  {item.authors} ({item.year}). <span className="italic text-cyan-300">{item.title}</span>. {item.publisher}
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
