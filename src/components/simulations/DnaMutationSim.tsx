import React, { useState } from 'react';
import { transcribeDnaToMrna, translateMrnaToProtein } from '../../utils/geneticsEngine';
import { Dna, Zap, RefreshCw, ArrowRight, Activity, AlertTriangle } from 'lucide-react';
import { MutationType } from '../../types';

export const DnaMutationSim: React.FC = () => {
  // Default DNA sense strand sequence (e.g., 3'- TAC CGT GCA ATT - 5')
  const [dnaSense, setDnaSense] = useState<string>('TACCGTGCAATT');
  const [mutationType, setMutationType] = useState<MutationType>('none');
  const [customInput, setCustomInput] = useState<string>('TACCGTGCAATT');

  // Mutation application logic
  const getMutatedDna = () => {
    const raw = customInput.toUpperCase().replace(/[^ATCG]/g, '');
    if (mutationType === 'none') return raw;

    if (mutationType === 'silent') {
      // TAC -> TAC, CGT -> CGC (both translate to Arg)
      if (raw.length >= 6) {
        return raw.substring(0, 5) + 'C' + raw.substring(6);
      }
    }

    if (mutationType === 'missense') {
      // TAC CGT -> TAC CTT (Arg becomes Leu)
      if (raw.length >= 6) {
        return raw.substring(0, 4) + 'T' + raw.substring(5);
      }
    }

    if (mutationType === 'nonsense') {
      // TAC CGT GCA ATT -> TAC ACT (mRNA: UAC UGA -> Stop prematur)
      if (raw.length >= 6) {
        return raw.substring(0, 3) + 'ACT' + raw.substring(6);
      }
    }

    if (mutationType === 'frameshift_insertion') {
      // Insert A
      if (raw.length >= 3) {
        return raw.substring(0, 3) + 'A' + raw.substring(3);
      }
    }

    if (mutationType === 'frameshift_deletion') {
      // Delete 1 char
      if (raw.length >= 4) {
        return raw.substring(0, 3) + raw.substring(4);
      }
    }

    return raw;
  };

  const currentDna = getMutatedDna();

  // Complementary DNA (Antisense / Template strand)
  const getComplementaryDna = (dna: string) => {
    let comp = '';
    for (const char of dna) {
      if (char === 'A') comp += 'T';
      else if (char === 'T') comp += 'A';
      else if (char === 'C') comp += 'G';
      else if (char === 'G') comp += 'C';
    }
    return comp;
  };

  const dnaTemplate = getComplementaryDna(currentDna);
  const mrna = transcribeDnaToMrna(currentDna);
  const proteinChain = translateMrnaToProtein(mrna);

  const resetDna = () => {
    setCustomInput('TACCGTGCAATT');
    setMutationType('none');
  };

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Dna className="w-4 h-4" />
              <span>Simulasi 2: Transkripsi, Translasi & Mutasi Gen</span>
            </div>
            <h3 className="text-xl font-bold text-white">Laboratorium Molekuler & Sintesis Protein</h3>
          </div>

          <button
            onClick={resetDna}
            className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Reset DNA Awal</span>
          </button>
        </div>

        {/* Input DNA & Mutation Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="md:col-span-2 bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              Sekuens Untai DNA Sense (3' → 5'):
            </label>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value.toUpperCase().replace(/[^ATCG]/g, ''))}
              placeholder="Masukkan urutan basa N (misal: TACCGTGCAATT)"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-500 tracking-wider"
            />
            <p className="text-[11px] text-slate-400">
              *Masukkan urutan basa nitrogen A, T, C, G secara kontinu.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
            <label className="text-xs font-bold text-slate-300 block flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Uji Jenis Mutasi Gen:</span>
            </label>
            <select
              value={mutationType}
              onChange={(e) => setMutationType(e.target.value as MutationType)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            >
              <option value="none">Normal (Tanpa Mutasi)</option>
              <option value="silent">Substitusi Silent (Diam)</option>
              <option value="missense">Substitusi Missense (Salah Arti)</option>
              <option value="nonsense">Substitusi Nonsense (Kodon Stop Prematur)</option>
              <option value="frameshift_insertion">Frameshift Insertion (+1 Basa A)</option>
              <option value="frameshift_deletion">Frameshift Deletion (-1 Basa)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Visual Sequence Pipeline */}
      <div className="space-y-4">
        {/* Step 1: Double Helix DNA */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2 border-b border-slate-700 pb-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            1. Struktur Rantai Ganda DNA (Replikasi & Template Transkripsi)
          </h4>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-sm tracking-widest overflow-x-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs text-amber-400 font-sans w-24">Untai Sense (3'):</span>
              <div className="flex gap-1">
                {currentDna.split('').map((base, idx) => (
                  <span
                    key={idx}
                    className={`w-7 h-8 rounded flex items-center justify-center font-extrabold border ${
                      base === 'A' ? 'bg-emerald-950 text-emerald-400 border-emerald-700' :
                      base === 'T' ? 'bg-blue-950 text-blue-400 border-blue-700' :
                      base === 'C' ? 'bg-purple-950 text-purple-400 border-purple-700' :
                      'bg-amber-950 text-amber-400 border-amber-700'
                    }`}
                  >
                    {base}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-60">
              <span className="text-xs text-slate-400 font-sans w-24">Ikatan Hidrogen:</span>
              <div className="flex gap-1 pl-1">
                {currentDna.split('').map((_, i) => (
                  <span key={i} className="w-7 text-center text-slate-500 font-bold">│</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-cyan-400 font-sans w-24">Untai Antisense (5'):</span>
              <div className="flex gap-1">
                {dnaTemplate.split('').map((base, idx) => (
                  <span
                    key={idx}
                    className="w-7 h-8 rounded bg-slate-900 text-slate-300 border border-slate-700 flex items-center justify-center font-extrabold"
                  >
                    {base}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: mRNA Transcription & Codon Breakdown */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2 border-b border-slate-700 pb-2">
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            2. Transkripsi Inti Sel → Duta RNA (mRNA)
          </h4>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 font-mono">
            <div className="flex items-center gap-3">
              <span className="text-xs text-cyan-400 font-sans w-24">Sekuens dRNA (5'):</span>
              <div className="flex gap-2">
                {mrna.match(/.{1,3}/g)?.map((triplet, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md font-bold text-sm tracking-wider"
                  >
                    {triplet}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Protein Translation */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2 border-b border-slate-700 pb-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            3. Translasi Ribosom → Rantai Polipeptida (Asam Amino)
          </h4>

          <div className="flex flex-wrap items-center gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
            {proteinChain.length === 0 ? (
              <span className="text-xs text-slate-500 italic">Belum ada kodon pembuka (Start Codon).</span>
            ) : (
              proteinChain.map((aa, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center min-w-24 ${
                      aa.isStart
                        ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300'
                        : aa.isStop
                        ? 'bg-rose-950/80 border-rose-600 text-rose-300'
                        : 'bg-slate-900 border-slate-700 text-slate-200'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold">{aa.codon}</span>
                    <span className="text-sm font-extrabold mt-0.5">{aa.aminoAcid}</span>
                    <span className="text-[10px] opacity-75 mt-0.5">{aa.fullName}</span>
                  </div>
                  {idx < proteinChain.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))
            )}
          </div>

          {/* Mutation Warning Alert */}
          {mutationType !== 'none' && (
            <div className="bg-amber-950/60 border border-amber-800/80 p-4 rounded-xl text-xs text-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-amber-300">
                  Analisis Efek Mutasi Gen ({mutationType}):
                </strong>
                <p className="mt-1 leading-relaxed">
                  {mutationType === 'silent' && 'Basa nitrogen berubah tetapi tidak mengubah urutan asam amino (Mutasi Diam).'}
                  {mutationType === 'missense' && 'Perubahan basa menyebabkan timbulnya jenis asam amino yang berbeda pada struktur rantai protein.'}
                  {mutationType === 'nonsense' && 'Perubahan basa menghasilkan Kodon Stop prematur sehingga sintesis protein terhenti lebih awal!'}
                  {mutationType === 'frameshift_insertion' && 'Penambahan 1 basa menggeser seluruh pembacaan kerangka kodon ke bawah (Frameshift Insertion).'}
                  {mutationType === 'frameshift_deletion' && 'Pengurangan 1 basa menggeser seluruh pembacaan kerangka kodon ke bawah (Frameshift Deletion).'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
