import React, { useState } from 'react';
import { Unlink, Sliders, MapPin, Sparkles, Calculator } from 'lucide-react';

export const LinkageMappingSim: React.FC = () => {
  // Recombination Frequency / Map Distance (0 - 50 cM)
  const [geneDistance, setGeneDistance] = useState<number>(18);
  const [totalOffspring, setTotalOffspring] = useState<number>(1000);

  // Calculate parental vs recombinant count
  const npsPercentage = geneDistance; // 1 cM = 1% Recombination Frequency
  const recombinantCount = Math.round((npsPercentage / 100) * totalOffspring);
  const parentalCount = totalOffspring - recombinantCount;

  const parentalPercentage = 100 - npsPercentage;

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Unlink className="w-4 h-4" />
              <span>Simulasi 3: Pautan Gen, Pindah Silang & Peta Kromosom</span>
            </div>
            <h3 className="text-xl font-bold text-white">Kalkulator Nilai Pindah Silang (NPS / Recombination)</h3>
          </div>

          <span className="text-xs font-semibold bg-cyan-950 border border-cyan-800 text-cyan-400 px-3 py-1 rounded-full">
            1 cM (centiMorgan) = 1% Nilai Pindah Silang
          </span>
        </div>

        {/* Sliders and Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Gene Distance Slider */}
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Jarak Antara Lokus Gen A dan Gen B:
              </label>
              <span className="text-sm font-extrabold font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-lg border border-cyan-800">
                {geneDistance} cM ({geneDistance}%)
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              value={geneDistance}
              onChange={(e) => setGeneDistance(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-400">
              <span>0 cM (Pautan Sempurna)</span>
              <span>25 cM</span>
              <span>50 cM (Pindah Silang Maksimum)</span>
            </div>
          </div>

          {/* Total Offspring Count Input */}
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/80 space-y-3">
            <label className="text-xs font-bold text-slate-200 block">
              Total Populasi Keturunan F2 (Eksperimen):
            </label>
            <input
              type="number"
              min="100"
              max="10000"
              step="100"
              value={totalOffspring}
              onChange={(e) => setTotalOffspring(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-500"
            />
            <p className="text-[11px] text-slate-400">
              Simulasi populasi eksperimen lalat buah (Drosophila melanogaster).
            </p>
          </div>
        </div>
      </div>

      {/* Visual Chromosome Map & Recombination Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chromosome Map Canvas */}
        <div className="lg:col-span-2 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-6">
          <h4 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Visualisasi Peta Kromosom (Lokus Gen A - B)
          </h4>

          {/* Interactive Chromosome Graphic */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-8 relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-mono font-bold text-slate-400">Kromosom Homolog 5'</span>
              <span className="text-xs font-mono font-bold text-slate-400">3'</span>
            </div>

            {/* Chromosome Body */}
            <div className="relative h-12 bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 rounded-full border-2 border-slate-700 flex items-center px-8 shadow-inner">
              {/* Centromere */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-14 bg-slate-800 border-2 border-cyan-500 rounded-full shadow-lg flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Locus A */}
              <div className="absolute left-12 flex flex-col items-center">
                <div className="w-4 h-14 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                <span className="text-xs font-extrabold text-cyan-300 font-mono mt-2">Lokus A</span>
              </div>

              {/* Dynamic Locus B based on cM slider distance */}
              <div
                className="absolute flex flex-col items-center transition-all duration-300"
                style={{ left: `calc(3rem + ${geneDistance * 1.3}%)` }}
              >
                <div className="w-4 h-14 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                <span className="text-xs font-extrabold text-amber-300 font-mono mt-2">Lokus B</span>
              </div>

              {/* Distance Line */}
              <div
                className="absolute top-1/2 h-0.5 bg-dashed bg-cyan-400/80 transition-all duration-300"
                style={{
                  left: '4rem',
                  width: `calc(${geneDistance * 1.3}%)`
                }}
              />
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-slate-300 font-medium">
                Jarak Peta: <span className="font-extrabold text-cyan-400">{geneDistance} centiMorgan (cM)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Numerical Output Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-base font-bold text-slate-100 border-b border-slate-700 pb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-400" />
            Hasil Analisis Keturunan F2
          </h4>

          <div className="space-y-4">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>Tipe Parental (Induk asli):</span>
                <span className="text-emerald-400 font-mono">{parentalPercentage}%</span>
              </div>
              <div className="text-lg font-extrabold text-white font-mono">
                {parentalCount} Keturunan
              </div>
              <p className="text-[11px] text-slate-400">
                Keturunan dengan kombinasi alel persis sama dengan induknya.
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>Tipe Rekombinan (Hasil Pindah Silang):</span>
                <span className="text-cyan-400 font-mono">{npsPercentage}%</span>
              </div>
              <div className="text-lg font-extrabold text-cyan-300 font-mono">
                {recombinantCount} Keturunan
              </div>
              <p className="text-[11px] text-slate-400">
                Keturunan dengan sifat kombinasi baru akibat crossing over.
              </p>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <strong className="text-cyan-400">Rumus NPS:</strong>
              <div className="font-mono text-[11px] text-slate-300 bg-slate-900 p-2 rounded border border-slate-800">
                NPS = (Rekombinan / Total) x 100%<br />
                NPS = ({recombinantCount} / {totalOffspring}) x 100% = {npsPercentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
