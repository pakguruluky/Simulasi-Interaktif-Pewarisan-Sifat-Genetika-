import React, { useState } from 'react';
import { TraitType } from '../../types';
import { calculateBloodGroupChildren } from '../../utils/geneticsEngine';
import { Users, ShieldAlert, HeartPulse, Sparkles, User, Info } from 'lucide-react';

export const PedigreeSim: React.FC = () => {
  const [trait, setTrait] = useState<TraitType>('hemofilia');

  // Blood group state selectors
  const [fatherBlood, setFatherBlood] = useState<string>('IᴬIᵒ'); // Gol A heterozigot
  const [motherBlood, setMotherBlood] = useState<string>('IᴮIᵒ'); // Gol B heterozigot

  // Sex-linked X-recessive state selectors (Hemophilia/Colorblindness)
  const [fatherTraitStatus, setFatherTraitStatus] = useState<'normal' | 'affected'>('normal');
  const [motherTraitStatus, setMotherTraitStatus] = useState<'normal' | 'carrier' | 'affected'>('carrier');

  // Calculate Blood Group Offspring Probabilities
  const bloodOutcomes = calculateBloodGroupChildren(fatherBlood, motherBlood);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Simulasi 4: Hereditas Manusia & Pohon Silsilah (Pedigree)</span>
            </div>
            <h3 className="text-xl font-bold text-white">Laboratorium Penyakit Menurun & Golongan Darah</h3>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={trait}
              onChange={(e) => setTrait(e.target.value as TraitType)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 font-bold focus:outline-none focus:border-cyan-500"
            >
              <option value="hemofilia">Hemofilia (Terpaut X Resesif)</option>
              <option value="buta_warna">Buta Warna Red-Green (Terpaut X Resesif)</option>
              <option value="golongan_darah">Golongan Darah Sistem ABO</option>
              <option value="albino">Albino (Autosom Resesif)</option>
            </select>
          </div>
        </div>

        {/* Trait Control Selector Panels */}
        {trait === 'golongan_darah' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <label className="text-xs font-bold text-slate-200 block">
                Genotipe Ayah (Golongan Darah ♂):
              </label>
              <select
                value={fatherBlood}
                onChange={(e) => setFatherBlood(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-cyan-300 font-mono font-bold text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="IᴬIᴬ">Golongan A Homozigot (IᴬIᴬ)</option>
                <option value="IᴬIᵒ">Golongan A Heterozigot (IᴬIᵒ)</option>
                <option value="IᴮIᴮ">Golongan B Homozigot (IᴮIᴮ)</option>
                <option value="IᴮIᵒ">Golongan B Heterozigot (IᴮIᵒ)</option>
                <option value="IᴬIᴮ">Golongan AB Kodominan (IᴬIᴮ)</option>
                <option value="IᵒIᵒ">Golongan O Resesif (IᵒIᵒ)</option>
              </select>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <label className="text-xs font-bold text-slate-200 block">
                Genotipe Ibu (Golongan Darah ♀):
              </label>
              <select
                value={motherBlood}
                onChange={(e) => setMotherBlood(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-cyan-300 font-mono font-bold text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="IᴬIᴬ">Golongan A Homozigot (IᴬIᴬ)</option>
                <option value="IᴬIᵒ">Golongan A Heterozigot (IᴬIᵒ)</option>
                <option value="IᴮIᴮ">Golongan B Homozigot (IᴮIᴮ)</option>
                <option value="IᴮIᵒ">Golongan B Heterozigot (IᴮIᵒ)</option>
                <option value="IᴬIᴮ">Golongan AB Kodominan (IᴬIᴮ)</option>
                <option value="IᵒIᵒ">Golongan O Resesif (IᵒIᵒ)</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <label className="text-xs font-bold text-slate-200 block">
                Fenotipe Ayah (♂):
              </label>
              <select
                value={fatherTraitStatus}
                onChange={(e) => setFatherTraitStatus(e.target.value as 'normal' | 'affected')}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="normal">Pria Normal</option>
                <option value="affected">Pria Penderita / Affected</option>
              </select>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <label className="text-xs font-bold text-slate-200 block">
                Fenotipe Ibu (♀):
              </label>
              <select
                value={motherTraitStatus}
                onChange={(e) => setMotherTraitStatus(e.target.value as 'normal' | 'carrier' | 'affected')}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="normal">Wanita Normal Homozigot</option>
                <option value="carrier">Wanita Carrier (Pembawa Sifat Heterozigot)</option>
                <option value="affected">Wanita Penderita / Affected</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Main Display Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Pedigree Family Tree Graphic */}
        <div className="lg:col-span-2 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-6">
          <h4 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
            Diagram Peta Silsilah Keluarga (Pedigree Tree)
          </h4>

          {trait === 'golongan_darah' ? (
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-8 text-center">
              <div className="flex items-center justify-center gap-12">
                {/* Father */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-blue-950 border-2 border-blue-500 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-extrabold text-blue-300 font-mono">{fatherBlood}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Ayah (P1 ♂)</span>
                </div>

                <span className="text-xl font-bold text-slate-500">✕</span>

                {/* Mother */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-purple-950 border-2 border-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-extrabold text-purple-300 font-mono">{motherBlood}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Ibu (P1 ♀)</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-slate-700 mx-auto" />

              {/* Children Probabilities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {bloodOutcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1 text-center"
                  >
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Anak Gol. {item.bloodType}</span>
                    <span className="text-sm font-extrabold text-cyan-400 font-mono">{item.genotype}</span>
                    <span className="text-xs font-bold text-emerald-400 block">{item.probability}%</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-8 text-center">
              {/* Parents Level */}
              <div className="flex items-center justify-center gap-12">
                {/* Father */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center shadow-lg ${
                      fatherTraitStatus === 'affected'
                        ? 'bg-rose-950 border-rose-500 text-rose-300'
                        : 'bg-blue-950 border-blue-500 text-blue-300'
                    }`}
                  >
                    <User className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">
                    Ayah ({fatherTraitStatus === 'affected' ? 'Penderita' : 'Normal'})
                  </span>
                </div>

                <span className="text-xl font-bold text-slate-500">✕</span>

                {/* Mother */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-lg ${
                      motherTraitStatus === 'affected'
                        ? 'bg-rose-950 border-rose-500 text-rose-300'
                        : motherTraitStatus === 'carrier'
                        ? 'bg-amber-950 border-amber-500 text-amber-300'
                        : 'bg-purple-950 border-purple-500 text-purple-300'
                    }`}
                  >
                    <User className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">
                    Ibu ({motherTraitStatus === 'affected' ? 'Penderita' : motherTraitStatus === 'carrier' ? 'Carrier' : 'Normal'})
                  </span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-slate-700 mx-auto" />

              {/* Children Generation Preview */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 text-left">
                <h5 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  Analisis Peluang Keturunan F1 ({trait.toUpperCase()}):
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
                  {trait === 'hemofilia' || trait === 'buta_warna' ? (
                    <>
                      <li>• Anak Perempuan: 50% Carrier (XᴴXʰ) & 50% Normal Homozigot (XᴴXᴴ) jika ibu carrier dan ayah normal.</li>
                      <li>• Anak Laki-Laki: 50% Penderita (XʰY) & 50% Normal (XᴴY).</li>
                      <li>• Anak laki-laki TIDAK MUNGKIN mewarisi gen dari ayah penderita, karena ayah hanya memberikan kromosom Y!</li>
                    </>
                  ) : (
                    <>
                      <li>• Albino ditentukan oleh gen resesif autosom (aa).</li>
                      <li>• Jika kedua orang tua carrier (Aa x Aa), maka peluang anak albino (aa) adalah 25%.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Clinical Summary & Pedigree Symbols Legend */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 border-b border-slate-700 pb-2">
            Legenda Simbol Pedigree Silsilah
          </h4>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="w-6 h-6 rounded-md bg-blue-950 border-2 border-blue-500" />
              <span>Persegi: Laki-laki Normal</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-purple-950 border-2 border-purple-500" />
              <span>Lingkaran: Wanita Normal</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-amber-950 border-2 border-amber-500" />
              <span>Setengah Gelap: Wanita Carrier (Pembawa Sifat)</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="w-6 h-6 rounded-md bg-rose-950 border-2 border-rose-500" />
              <span>Gelap Penuh: Penderita (Affected Individual)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
