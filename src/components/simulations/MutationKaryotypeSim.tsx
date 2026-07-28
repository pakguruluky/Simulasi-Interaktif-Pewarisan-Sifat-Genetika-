import React, { useState } from 'react';
import { CHROMOSOME_ANOMALIES } from '../../data/mutationData';
import { Zap, AlertCircle, Info, Stethoscope, Dna } from 'lucide-react';

export const MutationKaryotypeSim: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('down');

  const selectedAnomaly = CHROMOSOME_ANOMALIES.find((a) => a.id === selectedId) || CHROMOSOME_ANOMALIES[0];

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>Simulasi 5: Mutasi Kromosom & Anomalies Kariotip</span>
            </div>
            <h3 className="text-xl font-bold text-white">Laboratorium Mutasi & Kelainan Jumlah Kromosom</h3>
          </div>

          <span className="text-xs font-semibold bg-cyan-950 border border-cyan-800 text-cyan-400 px-3 py-1 rounded-full">
            Kariotip Manusia Normal: 46, XX / 46, XY
          </span>
        </div>

        {/* Anomaly Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {CHROMOSOME_ANOMALIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                selectedId === item.id
                  ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/60'
              }`}
            >
              {item.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Karyogram Graphic View */}
        <div className="lg:col-span-2 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div>
              <h4 className="text-lg font-bold text-white">{selectedAnomaly.name}</h4>
              <span className="text-xs font-mono font-bold text-cyan-400">
                Formula Kariotip: {selectedAnomaly.formula}
              </span>
            </div>

            <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
              {selectedAnomaly.type}
            </span>
          </div>

          {/* Interactive Karyotype Map (23 Pairs) */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Simulasi Peta Kromosom (23 Pasang):
            </h5>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {Array.from({ length: 23 }).map((_, idx) => {
                const pairNum = idx + 1;
                let isAberrant = false;
                let numChr = 2; // normal pair

                if (selectedAnomaly.id === 'down' && pairNum === 21) {
                  isAberrant = true;
                  numChr = 3; // Trisomi 21
                } else if (selectedAnomaly.id === 'edwards' && pairNum === 18) {
                  isAberrant = true;
                  numChr = 3; // Trisomi 18
                } else if (selectedAnomaly.id === 'patau' && pairNum === 13) {
                  isAberrant = true;
                  numChr = 3; // Trisomi 13
                } else if (selectedAnomaly.id === 'cri_du_chat' && pairNum === 5) {
                  isAberrant = true;
                  numChr = 2; // Structural deletion
                } else if (pairNum === 23) {
                  // Gonosom
                  if (selectedAnomaly.id === 'klinefelter') {
                    isAberrant = true;
                    numChr = 3; // XXY
                  } else if (selectedAnomaly.id === 'turner') {
                    isAberrant = true;
                    numChr = 1; // X0
                  }
                }

                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isAberrant
                        ? 'bg-rose-950/80 border-rose-500 shadow-lg shadow-rose-950/50 scale-105'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-slate-400 mb-1">
                      {pairNum === 23 ? 'XY' : pairNum}
                    </span>

                    {/* Chromosome visual bars */}
                    <div className="flex items-center gap-1 h-8">
                      {Array.from({ length: numChr }).map((_, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-1.5 h-7 rounded-full ${
                            isAberrant ? 'bg-rose-400 animate-pulse' : 'bg-cyan-500/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Etiology & Causes */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
            <h5 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Penyebab & Mekanisme Biologis:
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedAnomaly.cause}
            </p>
          </div>
        </div>

        {/* Clinical Symptoms & Population Data */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-base font-bold text-slate-100 border-b border-slate-700 pb-3 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-rose-400" />
            Ciri-Ciri Klinis & Gejala
          </h4>

          <ul className="space-y-2.5">
            {selectedAnomaly.characteristics.map((char, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                <span>{char}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-slate-700/80">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Frekuensi Angka Kejadian:</span>
            <span className="text-xs font-bold text-cyan-300 font-mono mt-0.5 block">
              {selectedAnomaly.incidence}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
