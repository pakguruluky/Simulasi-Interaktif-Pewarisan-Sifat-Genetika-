import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';

export const GeminiTutor: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: 'Halo! Saya Pak GuruAI, Asisten Guru Biologi dan Pakar Genetika SMA Anda. Silakan tanyakan konsep persilangan Mendel, penyimpangan semu, sintesis protein, mutasi, atau soal genetika yang membingungkan Anda!'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputQuestion.trim() || loading) return;

    const userText = inputQuestion.trim();
    setInputQuestion('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch('/api/gemini-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userText,
          context: 'Biologi SMA Kelas XII - Genetika & Pewarisan Sifat'
        })
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: data.reply || 'Maaf, terjadi masalah koneksi data.' }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Maaf, Pak GuruAI sedang sibuk. Silakan pastikan jaringan internet stabil atau coba lagi.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    'Jelaskan perbedaan Hukum I dan Hukum II Mendel!',
    'Mengapa wanita bisa menjadi carrier hemofilia sedangkan pria tidak?',
    'Bagaimana cara menghitung Nilai Pindah Silang (NPS)?',
    'Apa penyebab terjadinya Sindrom Down pada bayi?'
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Bot className="w-4 h-4" />
            <span>Asisten AI Pembelajaran Biologi</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Konsultasi Genetika bersama Pak GuruAI</h2>
          <p className="text-xs text-slate-400 mt-1">
            Tanyakan rumus persilangan, soal ujian, atau penjelasan konsep materi genetika secara cepat.
          </p>
        </div>

        <span className="text-xs font-semibold bg-cyan-950 border border-cyan-800 text-cyan-400 px-3 py-1 rounded-full">
          Powered by Gemini AI Engine
        </span>
      </div>

      {/* Main Chat Interface */}
      <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-6 flex flex-col h-[500px]">
        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/50'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-2xl p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-cyan-950 border border-cyan-700 text-cyan-100 rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium italic animate-pulse">
              <Bot className="w-4 h-4" />
              <span>Pak GuruAI sedang memproses jawaban genetika...</span>
            </div>
          )}
        </div>

        {/* Quick Sample Questions */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700">
          <span className="text-[11px] text-slate-400 font-bold">Rekomendasi Pertanyaan:</span>
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setInputQuestion(q)}
              className="text-[10px] bg-slate-900 hover:bg-slate-700 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-lg transition-all"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ketikkan pertanyaan biologi genetika Anda di sini..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !inputQuestion.trim()}
            className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl transition-all flex items-center gap-2 text-xs"
          >
            <Send className="w-4 h-4" />
            <span>Kirim</span>
          </button>
        </div>
      </div>
    </div>
  );
};
