import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { LKPD_TASKS } from '../data/lkpdData';
import { 
  FileText, 
  Printer, 
  CheckCircle2, 
  UserCheck, 
  Award, 
  HelpCircle,
  Clock,
  Building,
  GraduationCap
} from 'lucide-react';

interface LkpdProps {
  student: StudentProfile;
  setStudent: React.Dispatch<React.SetStateAction<StudentProfile>>;
}

export const LkpdDigital: React.FC<LkpdProps> = ({ student, setStudent }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAnswerChange = (taskId: string, val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [taskId]: val
    }));
  };

  // Calculate automated score
  let totalScore = 0;
  let maxScore = 0;

  LKPD_TASKS.forEach((task) => {
    maxScore += task.points;
    if (submitted) {
      if (task.questionType === 'multiple_choice') {
        if (answers[task.id] === task.correctAnswer) {
          totalScore += task.points;
        }
      } else if (task.questionType === 'short_essay') {
        // Award full points if answered
        if (answers[task.id] && answers[task.id].trim().length > 5) {
          totalScore += task.points;
        }
      }
    }
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Printable Sheet Wrapper (Visible on Print) */}
      <div className="printable-lkpd hidden print:block space-y-6 text-black font-sans">
        <div className="text-center border-b-2 border-slate-900 pb-4">
          <h1 className="text-xl font-bold uppercase tracking-wide">
            LEMBAR KERJA PESERTA DIDIK (LKPD) DIGITAL
          </h1>
          <h2 className="text-base font-semibold">
            Praktikum Virtual & Simulasi Interaktif Pewarisan Sifat (Genetika)
          </h2>
          <p className="text-xs text-slate-600 mt-1">Mata Pelajaran Biologi SMA Kelas XII</p>
        </div>

        {/* Student Profile Info Table */}
        <div className="border border-slate-800 p-4 rounded-md space-y-2 text-sm bg-slate-50">
          <div className="grid grid-cols-2 gap-2">
            <div><strong>Nama Lengkap:</strong> {student.nama || '...................................................'}</div>
            <div><strong>Kelas:</strong> {student.kelas || '...................................................'}</div>
            <div><strong>Nomor Absen:</strong> {student.noAbsen || '...................................................'}</div>
            <div><strong>Sekolah:</strong> {student.sekolah || '...................................................'}</div>
            <div><strong>Tanggal Pengerjaan:</strong> {student.tanggal || new Date().toLocaleDateString('id-ID')}</div>
            <div><strong>Nilai LKPD:</strong> {submitted ? `${totalScore} / ${maxScore}` : 'Belum Disubmit'}</div>
          </div>
        </div>

        {/* LKPD Answers Log */}
        <div className="space-y-4">
          <h3 className="font-bold text-base border-b border-slate-800 pb-1">
            RINGKASAN HASIL EKSPERIMEN & JAWABAN PESERTA DIDIK
          </h3>

          {LKPD_TASKS.map((task, i) => (
            <div key={task.id} className="border border-slate-300 p-3 rounded space-y-1 text-xs">
              <p className="font-bold text-slate-900">{i + 1}. {task.title}</p>
              <p className="text-slate-700 italic">Instruksi: {task.instructions}</p>
              <div className="mt-2 p-2 bg-slate-100 rounded border border-slate-200">
                <strong>Jawaban Siswa:</strong> {answers[task.id] || '(Belum dijawab)'}
              </div>
            </div>
          ))}
        </div>

        {/* Signatures Block */}
        <div className="pt-12 grid grid-cols-2 text-center text-xs">
          <div>
            <p>Mengetahui,</p>
            <p className="font-bold">Guru Mata Pelajaran Biologi</p>
            <div className="h-16" />
            <p className="font-bold underline">( ................................................... )</p>
          </div>
          <div>
            <p>Siswa / Peserta Didik,</p>
            <p className="font-bold">{student.nama || '...................................................'}</p>
            <div className="h-16" />
            <p className="font-bold underline">( {student.nama || '...................................................'} )</p>
          </div>
        </div>
      </div>

      {/* Screen Interactive UI (Hidden on Print) */}
      <div className="no-print space-y-6">
        {/* Header Banner */}
        <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Modul Evaluasi Pembelajaran Digital</span>
            </div>
            <h2 className="text-2xl font-bold text-white">LKPD Interaktif & Ekspor Laporan CETAK</h2>
            <p className="text-xs text-slate-400 mt-1">
              Isi identitas Anda, selesaikan tugas eksperimen virtual, dan cetak LKPD untuk penilaian guru.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/50 transition-all text-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Unduh LKPD (PDF)</span>
          </button>
        </div>

        {/* Student Identity Form */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2 border-b border-slate-700 pb-2">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            Identitas Peserta Didik
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Nama Lengkap:</label>
              <input
                type="text"
                value={student.nama}
                onChange={(e) => setStudent({ ...student, nama: e.target.value })}
                placeholder="Contoh: Ahmad Rizky"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Kelas:</label>
              <input
                type="text"
                value={student.kelas}
                onChange={(e) => setStudent({ ...student, kelas: e.target.value })}
                placeholder="Contoh: XII MIPA 1"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Nomor Absen:</label>
              <input
                type="text"
                value={student.noAbsen}
                onChange={(e) => setStudent({ ...student, noAbsen: e.target.value })}
                placeholder="Contoh: 04"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Nama Sekolah:</label>
              <input
                type="text"
                value={student.sekolah}
                onChange={(e) => setStudent({ ...student, sekolah: e.target.value })}
                placeholder="Contoh: SMAN 1 Jakarta"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* LKPD Tasks List */}
        <div className="space-y-4">
          {LKPD_TASKS.map((task, idx) => (
            <div
              key={task.id}
              className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950 border border-cyan-800 px-2.5 py-0.5 rounded-full">
                    Tugas {idx + 1} • {task.points} Poin
                  </span>
                  <h4 className="text-base font-bold text-white mt-2">{task.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <strong>Instruksi Praktikum:</strong> {task.instructions}
                  </p>
                </div>
              </div>

              {/* Input Choice or Essay */}
              <div className="pt-2">
                {task.questionType === 'multiple_choice' ? (
                  <div className="space-y-2">
                    {task.options?.map((opt, optIdx) => (
                      <label
                        key={optIdx}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          answers[task.id] === opt
                            ? 'bg-cyan-950 border-cyan-500 text-white font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <input
                          type="radio"
                          name={task.id}
                          value={opt}
                          checked={answers[task.id] === opt}
                          onChange={(e) => handleAnswerChange(task.id, e.target.value)}
                          className="accent-cyan-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <textarea
                    rows={3}
                    value={answers[task.id] || ''}
                    onChange={(e) => handleAnswerChange(task.id, e.target.value)}
                    placeholder="Ketikkan analisis ilmiah dan alasan Anda di sini..."
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:border-cyan-500"
                  />
                )}
              </div>

              {/* Evaluation Feedback */}
              {submitted && (
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong className="text-cyan-400">Pembahasan & Penjelasan Ilmiah:</strong>
                  <p className="text-slate-300 leading-relaxed">{task.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit & Score Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Status Evaluasi LKPD Digital</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {submitted
                ? `Total Skor Anda: ${totalScore} dari ${maxScore} poin.`
                : 'Klik "Kirim Jawaban" untuk melihat penilaian otomatis dan pembahasan.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSubmitted(true)}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-950/60 transition-all text-xs"
            >
              Kirim & Evaluasi Jawaban
            </button>
            <button
              onClick={handlePrint}
              className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-4 py-2.5 rounded-xl transition-all text-xs flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Cetak Hasil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
