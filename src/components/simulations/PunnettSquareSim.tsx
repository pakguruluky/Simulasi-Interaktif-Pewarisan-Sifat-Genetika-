import React, { useState } from 'react';
import { InheritanceMode } from '../../types';
import { solvePunnettSquare } from '../../utils/geneticsEngine';
import { GitMerge, Sparkles, RefreshCw, HelpCircle, Calculator } from 'lucide-react';

export const PunnettSquareSim: React.FC = () => {
  const [mode, setMode] = useState<InheritanceMode>('monohibrid_dominan');
  const [parent1, setParent1] = useState<string>('Bb');
  const [parent2, setParent2] = useState<string>('Bb');

  // Quick preset presets per mode
  const modePresets: Record<InheritanceMode, { p1: string; p2: string; desc: string }> = {
    monohibrid_dominan: { p1: 'Bb', p2: 'Bb', desc: 'Monohibrid Dominan Penuh (Misal: Batang Tinggi Bb x Bb -> Rasio 3:1)' },
    monohibrid_intermediet: { p1: 'Bb', p2: 'Bb', desc: 'Monohibrid Intermediet (Misal: Bunga Merah Muda Bb x Bb -> Rasio 1:2:1)' },
    dihibrid: { p1: 'BbKt', p2: 'BbKt', desc: 'Dihibrid Mendel (Biji Bulat-Kuning BbKt x BbKt -> Rasio 9:3:3:1)' },
    atavisme: { p1: 'RrPp', p2: 'RrPp', desc: 'Atavisme Pial Ayam (Walnut RrPp x Walnut RrPp -> Walnut:Rose:Pea:Single 9:3:3:1)' },
    kriptomeri: { p1: 'AaBb', p2: 'AaBb', desc: 'Kriptomeri Bunga Linaria (Ungu AaBb x Ungu AaBb -> Ungu:Merah:Putih 9:3:4)' },
    epistasis_dominan: { p1: 'PpKk', p2: 'PpKk', desc: 'Epistasis Dominan Labu (PpKk x PpKk -> Putih:Kuning:Hijau 12:3:1)' },
    polimeri: { p1: 'M1m1M2m2', p2: 'M1m1M2m2', desc: 'Polimeri Pigmen Biji Wheat (M1m1M2m2 x M1m1M2m2 -> Merah:Putih 15:1)' },
    komplementer: { p1: 'CcPp', p2: 'CcPp', desc: 'Komplementer Lathyrus (CcPp x CcPp -> Ungu:Putih 9:7)' }
  };

  const handleModeChange = (newMode: InheritanceMode) => {
    setMode(newMode);
    const preset = modePresets[newMode];
    if (newMode === 'polimeri') {
      setParent1('MMMM');
      setParent2('mmmm');
    } else {
      setParent1(preset.p1);
      setParent2(preset.p2);
    }
  };

  // Solve Punnett Square
  const p1Clean = parent1.replace(/[^A-Za-z0-9]/g, '');
  const p2Clean = parent2.replace(/[^A-Za-z0-9]/g, '');
  
  // Format Polimeri string if needed
  const p1Eval = mode === 'polimeri' ? 'MMMM' : p1Clean;
  const p2Eval = mode === 'polimeri' ? 'mmmm' : p2Clean;

  const result = solvePunnettSquare(p1Eval, p2Eval, mode);

  return (
    <div className="space-y-6">
      {/* Control Panel Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <GitMerge className="w-4 h-4" />
              <span>Simulasi 1: Hukum Mendel & Penyimpangan Semu</span>
            </div>
            <h3 className="text-xl font-bold text-white">Generator Persilangan Punnett Square</h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Pilih Mode Persilangan:</span>
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {[
            { id: 'monohibrid_dominan', label: 'Monohibrid Dominan' },
            { id: 'monohibrid_intermediet', label: 'Monohibrid Intermediet' },
            { id: 'dihibrid', label: 'Dihibrid Mendel' },
            { id: 'atavisme', label: 'Atavisme' },
            { id: 'kriptomeri', label: 'Kriptomeri' },
            { id: 'epistasis_dominan', label: 'Epistasis Dominan' },
            { id: 'polimeri', label: 'Polimeri' },
            { id: 'komplementer', label: 'Komplementer' }
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => handleModeChange(m.id as InheritanceMode)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                mode === m.id
                  ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/60'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Description Banner */}
        <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span>{modePresets[mode].desc}</span>
        </div>

        {/* Parent Input Forms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              Genotipe Induk 1 / Parent 1 (P1 ♀):
            </label>
            <input
              type="text"
              value={parent1}
              onChange={(e) => setParent1(e.target.value)}
              placeholder="Contoh: Bb atau BbKt"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-500"
            />
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span>Gamet P1:</span>
              <div className="flex gap-1">
                {result.gametesP1.map((g, i) => (
                  <span key={i} className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded font-mono text-cyan-400 font-bold">
                    {g.code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              Genotipe Induk 2 / Parent 2 (P2 ♂):
            </label>
            <input
              type="text"
              value={parent2}
              onChange={(e) => setParent2(e.target.value)}
              placeholder="Contoh: Bb atau BbKt"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-500"
            />
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span>Gamet P2:</span>
              <div className="flex gap-1">
                {result.gametesP2.map((g, i) => (
                  <span key={i} className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded font-mono text-cyan-400 font-bold">
                    {g.code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Simulation Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Punnett Matrix Grid (2 Columns on Large Screens) */}
        <div className="lg:col-span-2 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              Papan Catur Punnett Square (Matriks F2)
            </h4>
            <span className="text-xs text-slate-400 font-medium">
              Total Kombinasi: {result.total} Anakan
            </span>
          </div>

          <div className="overflow-x-auto p-2">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr>
                  <th className="p-2 border border-slate-700/80 bg-slate-900 text-slate-400 text-xs font-bold">
                    ♀ \ ♂
                  </th>
                  {result.gametesP2.map((g2, colIdx) => (
                    <th
                      key={colIdx}
                      className="p-3 border border-slate-700/80 bg-slate-900 text-cyan-400 text-sm font-mono font-bold"
                    >
                      {g2.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.grid.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="p-3 border border-slate-700/80 bg-slate-900 text-cyan-400 text-sm font-mono font-bold">
                      {result.gametesP1[rowIdx].code}
                    </td>
                    {row.map((cell, colIdx) => (
                      <td
                        key={colIdx}
                        className={`p-3 border border-slate-700/60 ${cell.colorBg} transition-all hover:scale-[1.02] cursor-pointer`}
                      >
                        <div className="font-mono font-extrabold text-sm text-slate-100">
                          {cell.genotype}
                        </div>
                        <div className="text-[10px] opacity-90 font-medium mt-0.5 line-clamp-1">
                          {cell.phenotype}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Ratios & Analytics */}
        <div className="space-y-6">
          {/* Phenotype Ratio Summary */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="text-sm font-bold text-slate-100 border-b border-slate-700 pb-2 flex items-center justify-between">
              <span>Rasio Fenotipe Keturunan</span>
              <span className="text-xs text-cyan-400 font-mono">
                {result.phenotypeSummary.map((p) => p.count).join(' : ')}
              </span>
            </h4>

            <div className="space-y-2.5">
              {result.phenotypeSummary.map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                    <span>{item.phenotype}</span>
                    <span className="text-cyan-400 font-mono">{item.percentage}% ({item.ratio})</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Genotype Breakdown */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-3">
            <h4 className="text-sm font-bold text-slate-100 border-b border-slate-700 pb-2">
              Rasio Genotipe Keturunan
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {result.genotypeSummary.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-300">{item.genotype}</span>
                  <span className="text-xs text-slate-400 font-mono">{item.ratio} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
