import React, { useState } from 'react';
import { MATERIAL_SECTIONS } from '../data/materialData';
import { 
  Search, 
  Dna, 
  GitMerge, 
  Unlink, 
  Users, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  BookOpen,
  Info
} from 'lucide-react';

export const MateriPembelajaran: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>('materi_genetik');
  const [expandedSubtitles, setExpandedSubtitles] = useState<Record<string, boolean>>({
    'Kromosom dan Gen': true,
    'Hukum I Mendel (Segregasi Bebas)': true
  });

  const iconMap: Record<string, React.ElementType> = {
    Dna,
    GitMerge,
    Unlink,
    Users,
    Zap
  };

  const toggleSubtitle = (subtitle: string) => {
    setExpandedSubtitles((prev) => ({
      ...prev,
      [subtitle]: !prev[subtitle]
    }));
  };

  const filteredSections = MATERIAL_SECTIONS.filter((section) => {
    const term = searchTerm.toLowerCase();
    if (section.title.toLowerCase().includes(term) || section.summary.toLowerCase().includes(term)) {
      return true;
    }
    return section.content.some(
      (c) =>
        c.subtitle.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term) ||
        c.keyPoints.some((kp) => kp.toLowerCase().includes(term))
    );
  });

  const activeSection = MATERIAL_SECTIONS.find((s) => s.id === activeSectionId) || MATERIAL_SECTIONS[0];

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Modul Konseptual Genetika SMA</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Ringkasan Materi Lengkap & Mendalam</h2>
          <p className="text-xs text-slate-400 mt-1">
            Pelajari landasan teori molekuler, persilangan Mendel, hereditas manusia, hingga mutasi.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari konsep (misal: DNA, Dihibrid, Hemofilia)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Main Grid: Topic Selector Sidebar + Content Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Topic Selector List */}
        <div className="lg:col-span-1 space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
            Pilih Topik Materi
          </h3>
          {filteredSections.map((section) => {
            const Icon = iconMap[section.iconName] || Dna;
            const isSelected = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-snug">{section.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{section.summary}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Material Content Reader */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-6">
            <div className="border-b border-slate-700 pb-4">
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
                Modul Pembelajaran Biologi SMA
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">{activeSection.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                {activeSection.summary}
              </p>
            </div>

            {/* Sub-sections */}
            <div className="space-y-4">
              {activeSection.content.map((item, idx) => {
                const isExpanded = expandedSubtitles[item.subtitle] !== false; // default true
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/80 border border-slate-700/80 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleSubtitle(item.subtitle)}
                      className="w-full flex items-center justify-between p-4 bg-slate-800/60 hover:bg-slate-800 text-left transition-colors"
                    >
                      <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        {item.subtitle}
                      </h4>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 space-y-4 text-xs text-slate-300 border-t border-slate-800">
                        <p className="leading-relaxed text-slate-200">{item.description}</p>

                        <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                          <h5 className="font-bold text-slate-200 text-xs flex items-center gap-2">
                            <Info className="w-3.5 h-3.5 text-cyan-400" />
                            Poin Kunci & Penjelasan Penting:
                          </h5>
                          <ul className="space-y-1.5 pl-2">
                            {item.keyPoints.map((kp, kpIdx) => (
                              <li key={kpIdx} className="flex items-start gap-2 text-slate-300">
                                <span className="text-cyan-400 font-bold">•</span>
                                <span>{kp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
