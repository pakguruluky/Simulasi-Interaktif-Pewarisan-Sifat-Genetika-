import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { Award, CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 10;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Latihan Soal HOTS Genetika SMA</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Uji Pemahaman & Evaluasi Mandiri</h2>
          <p className="text-xs text-slate-400 mt-1">
            10 Soal Standar Ujian Sekolah & UTBK Biologi beserta pembahasan konseptual.
          </p>
        </div>

        {showResults && (
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-4 py-2 rounded-xl text-xs transition-all"
          >
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span>Ulangi Kuis</span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const isUserAnswered = selectedAnswers[q.id] !== undefined;
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950 border border-cyan-800 px-2.5 py-0.5 rounded-full">
                    Soal {idx + 1} • Topik: {q.topic}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-2 leading-relaxed">
                    {q.question}
                  </h3>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  const isAnswerCorrect = q.correctAnswer === optIdx;

                  let styleClass = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800';

                  if (showResults) {
                    if (isAnswerCorrect) {
                      styleClass = 'bg-emerald-950/80 border-emerald-600 text-emerald-300 font-bold';
                    } else if (isSelected && !isAnswerCorrect) {
                      styleClass = 'bg-rose-950/80 border-rose-600 text-rose-300 font-bold';
                    }
                  } else if (isSelected) {
                    styleClass = 'bg-cyan-950 border-cyan-500 text-white font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${styleClass}`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-[10px]">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </span>

                      {showResults && isAnswerCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      )}
                      {showResults && isSelected && !isAnswerCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation on Submit */}
              {showResults && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong className="text-cyan-400 block font-bold">Pembahasan Soal:</strong>
                  <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Submit Card */}
      <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Evaluasi Nilai Kuis</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {showResults
              ? `Skor Anda: ${score} dari 100 poin.`
              : 'Jawab seluruh pertanyaan lalu klik tombol di sebelah kanan.'}
          </p>
        </div>

        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-cyan-950/60 transition-all text-xs"
          >
            Selesaikan & Lihat Nilai
          </button>
        ) : (
          <div className="text-2xl font-extrabold text-cyan-400 font-mono bg-cyan-950 border border-cyan-800 px-4 py-2 rounded-xl">
            {score} / 100
          </div>
        )}
      </div>
    </div>
  );
};
