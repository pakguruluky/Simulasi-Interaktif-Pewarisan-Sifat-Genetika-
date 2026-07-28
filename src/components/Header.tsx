import React from 'react';
import { TabType, StudentProfile } from '../types';
import { 
  Dna, 
  BookOpen, 
  FlaskConical, 
  FileText, 
  Award, 
  Bot, 
  Bookmark,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  student: StudentProfile;
  setShowIdentityModal: (show: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  student,
  setShowIdentityModal
}) => {
  const tabs = [
    { id: 'tujuan' as TabType, label: 'Tujuan Pembelajaran', icon: BookOpen },
    { id: 'materi' as TabType, label: 'Materi Teori', icon: Bookmark },
    { id: 'simulasi' as TabType, label: 'Lab Simulasi', icon: FlaskConical },
    { id: 'lkpd' as TabType, label: 'LKPD Digital', icon: FileText },
    { id: 'quiz' as TabType, label: 'Latihan Soal', icon: Award },
    { id: 'tutor' as TabType, label: 'Tanya Pak GuruAI', icon: Bot },
    { id: 'referensi' as TabType, label: 'Referensi', icon: Dna }
  ];

  return (
    <header className="no-print sticky top-0 z-40 glass border-b border-slate-700/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 py-2">
          {/* Logo & App Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('tujuan')}>
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-400/40">
              <Dna className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2 leading-none">
                GenoSim <span className="text-indigo-400 font-medium text-xs">v2.0</span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
                  Biologi SMA XII
                </span>
              </h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                Laboratorium Genetika Digital SMA
              </p>
            </div>
          </div>

          {/* Student Status Badge */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setShowIdentityModal(true)}
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded text-xs font-semibold transition-all shadow-sm"
              title="Edit Identitas Siswa"
            >
              <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[11px]">
                {student.nama ? `${student.nama} (${student.kelas || 'Siswa'})` : 'Isi Identitas LKPD'}
              </span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-1.5 overflow-x-auto py-1.5 scrollbar-none border-t border-slate-700/60">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950/80 ring-1 ring-indigo-400/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
