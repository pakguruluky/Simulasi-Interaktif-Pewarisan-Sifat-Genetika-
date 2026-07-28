import React from 'react';
import { Dna, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="no-print mt-12 bg-slate-900 border-t border-slate-800/80 py-4 px-4 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
            <Dna className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 block tracking-tight">GenoSim v2.0 • Laboratorium Genetika Digital SMA</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Platform Pendidikan Digital Terpadu Biologi Kelas XII</span>
          </div>
        </div>

        {/* Required Copyright Text exact match */}
        <p className="text-[10px] font-medium text-slate-400 italic">
          @Copyright by. Pak GuruAI
        </p>
      </div>
    </footer>
  );
};
