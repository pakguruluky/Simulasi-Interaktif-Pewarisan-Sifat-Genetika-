/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType, SimulationSubTab, StudentProfile } from './types';
import { Header } from './components/Header';
import { TujuanPembelajaran } from './components/TujuanPembelajaran';
import { MateriPembelajaran } from './components/MateriPembelajaran';
import { PunnettSquareSim } from './components/simulations/PunnettSquareSim';
import { DnaMutationSim } from './components/simulations/DnaMutationSim';
import { LinkageMappingSim } from './components/simulations/LinkageMappingSim';
import { PedigreeSim } from './components/simulations/PedigreeSim';
import { MutationKaryotypeSim } from './components/simulations/MutationKaryotypeSim';
import { LkpdDigital } from './components/LkpdDigital';
import { QuizSection } from './components/QuizSection';
import { GeminiTutor } from './components/GeminiTutor';
import { ReferensiSection } from './components/ReferensiSection';
import { Footer } from './components/Footer';
import { 
  GitMerge, 
  Dna, 
  Unlink, 
  Users, 
  Zap, 
  X, 
  UserCheck, 
  GraduationCap 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('tujuan');
  const [activeSimSubTab, setActiveSimSubTab] = useState<SimulationSubTab>('punnett');

  const [student, setStudent] = useState<StudentProfile>({
    nama: '',
    kelas: '',
    noAbsen: '',
    sekolah: '',
    tanggal: new Date().toLocaleDateString('id-ID')
  });

  const [showIdentityModal, setShowIdentityModal] = useState<boolean>(false);

  const simSubTabs = [
    { id: 'punnett' as SimulationSubTab, label: 'Persilangan Mendel & Punnett', icon: GitMerge },
    { id: 'dna_rna' as SimulationSubTab, label: 'DNA, Transkripsi & Mutasi Gen', icon: Dna },
    { id: 'pautan_pindah_silang' as SimulationSubTab, label: 'Pautan & Pindah Silang', icon: Unlink },
    { id: 'pedigree' as SimulationSubTab, label: 'Hereditas Manusia & Pedigree', icon: Users },
    { id: 'mutasi_kromosom' as SimulationSubTab, label: 'Mutasi Kromosom & Kariotip', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        student={student}
        setShowIdentityModal={setShowIdentityModal}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {activeTab === 'tujuan' && <TujuanPembelajaran setActiveTab={setActiveTab} />}

        {activeTab === 'materi' && <MateriPembelajaran />}

        {activeTab === 'simulasi' && (
          <div className="space-y-4">
            {/* Simulation Sub-Navigation Bar */}
            <div className="no-print glass border border-slate-700/80 p-1.5 rounded-xl flex space-x-1.5 overflow-x-auto scrollbar-none shadow-lg">
              {simSubTabs.map((sub) => {
                const Icon = sub.icon;
                const isSelected = activeSimSubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSimSubTab(sub.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950/80 ring-1 ring-indigo-400/50'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Simulation Lab View */}
            {activeSimSubTab === 'punnett' && <PunnettSquareSim />}
            {activeSimSubTab === 'dna_rna' && <DnaMutationSim />}
            {activeSimSubTab === 'pautan_pindah_silang' && <LinkageMappingSim />}
            {activeSimSubTab === 'pedigree' && <PedigreeSim />}
            {activeSimSubTab === 'mutasi_kromosom' && <MutationKaryotypeSim />}
          </div>
        )}

        {activeTab === 'lkpd' && <LkpdDigital student={student} setStudent={setStudent} />}

        {activeTab === 'quiz' && <QuizSection />}

        {activeTab === 'tutor' && <GeminiTutor />}

        {activeTab === 'referensi' && <ReferensiSection />}
      </main>

      {/* Identity Form Modal */}
      {showIdentityModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowIdentityModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Identitas Peserta Didik</h3>
                <p className="text-xs text-slate-400">Data ini akan dicantumkan pada LKPD Digital Anda.</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Nama Lengkap:</label>
                <input
                  type="text"
                  value={student.nama}
                  onChange={(e) => setStudent({ ...student, nama: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Kelas:</label>
                <input
                  type="text"
                  value={student.kelas}
                  onChange={(e) => setStudent({ ...student, kelas: e.target.value })}
                  placeholder="Contoh: XII MIPA 2"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">No. Absen:</label>
                  <input
                    type="text"
                    value={student.noAbsen}
                    onChange={(e) => setStudent({ ...student, noAbsen: e.target.value })}
                    placeholder="Contoh: 08"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Sekolah:</label>
                  <input
                    type="text"
                    value={student.sekolah}
                    onChange={(e) => setStudent({ ...student, sekolah: e.target.value })}
                    placeholder="Contoh: SMAN 1"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIdentityModal(false)}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 rounded-xl transition-all text-xs shadow-lg shadow-cyan-950/50 mt-2"
            >
              Simpan Identitas
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
