import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint for Gemini AI Genetics Tutor
  app.post("/api/gemini-tutor", async (req, res) => {
    try {
      const { question, context } = req.body;

      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "Pertanyaan wajib diisi." });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        const ai = new GoogleGenAI({ apiKey });
        const systemPrompt = `Anda adalah "Pak GuruAI", Asisten Guru Biologi SMA dan Pakar Genetika Indonesia.
Jawab pertanyaan siswa SMA secara ramah, edukatif, akurat secara ilmiah, dan mudah dipahami.
Sertakan contoh persilangan, rumus genetika, atau analogi jika relevan.
Konteks Pembelajaran Siswa: ${context || "Genetika SMA"}`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [
            { role: "user", parts: [{ text: `${systemPrompt}\n\nPertanyaan Siswa: ${question}` }] }
          ]
        });

        const reply = response.text || "Maaf, Pak GuruAI sedang memproses data genetika. Silakan coba lagi.";
        return res.json({ reply, source: "gemini" });
      } else {
        // Fallback intelligent responder if API Key is not set
        const reply = getFallbackGeneticsAnswer(question);
        return res.json({ reply, source: "knowledge-base" });
      }
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      const fallbackReply = getFallbackGeneticsAnswer(req.body.question || "");
      return res.json({ reply: fallbackReply, source: "fallback" });
    }
  });

  // Vite middleware for development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", port: PORT },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Pak GuruAI Genetics Server] Running on http://localhost:${PORT}`);
  });
}

// Knowledge base fallback for common genetics questions
function getFallbackGeneticsAnswer(query: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("mendel") || q.includes("hukum mendel")) {
    return "💡 **Hukum Mendel**: \n1. **Hukum I Mendel (Segregasi Bebas)**: Pada pembentukan gamet, pasangan alel berpisah secara bebas. Terjadi pada persilangan Monohibrid (rasio fenotipe F2 = 3:1).\n2. **Hukum II Mendel (Asortasi Bebas)**: Alel dari gen yang berbeda mengelompok secara bebas. Terjadi pada persilangan Dihibrid (rasio fenotipe F2 = 9:3:3:1).";
  }
  if (q.includes("dna") || q.includes("rna")) {
    return "🧬 **Perbedaan DNA & RNA**: \n- **DNA**: Untai ganda (double helix), gula deoksiribosa, basa nitrogen A-T dan C-G, terletak di dalam inti sel/mitokondria.\n- **RNA**: Untai tunggal, gula ribosa, basa nitrogen A-U dan C-G, terlibat aktif dalam sintesis protein di ribosom.";
  }
  if (q.includes("golongan darah") || q.includes("darah")) {
    return "🩸 **Pola Golongan Darah ABO**: \n- Golongan A: Genotipe IᴬIᴬ atau IᴬIᵒ\n- Golongan B: Genotipe IᴮIᴮ atau IᴮIᵒ\n- Golongan AB: Genotipe IᴬIᴮ (Kodominan)\n- Golongan O: Genotipe IᵒIᵒ (Resesif)\nAyah A hibrid (IᴬIᵒ) x Ibu B hibrid (IᴮIᵒ) dapat melahirkan anak dengan SEMUA 4 jenis golongan darah (A, B, AB, O)!";
  }
  if (q.includes("hemofilia") || q.includes("buta warna")) {
    return "👁️ **Penyakit Terpaut Kromosom X (Sex-linked)**: \nContohnya Buta Warna (c) dan Hemofilia (h). Bersifat resesif terpaut kromosom X.\n- Wanita Carrier: XᴴXʰ (Normal pembawa sifat)\n- Wanita Penderita: XʰXʰ\n- Pria Penderita: XʰY (Pria tidak bisa jadi carrier karena hanya memiliki 1 kromosom X).";
  }
  if (q.includes("mutasi") || q.includes("down") || q.includes("klinefelter")) {
    return "🔬 **Mutasi Kromosom (Aneuploidi)**: \n- **Sindrom Down**: Trisomi kromosom nomor 21 (47, XX/XY +21).\n- **Sindrom Klinefelter**: Trisomi gonosom pria (47, XXY).\n- **Sindrom Turner**: Monosomi gonosom wanita (45, X0).\nMutasi ini umumnya terjadi akibat kegagalan berpisah (*non-disjunction*) saat meiosis.";
  }
  if (q.includes("atavisme") || q.includes("epistasis") || q.includes("kriptomeri")) {
    return "🪶 **Penyimpangan Semu Hukum Mendel**: \nInteraksi antar gen yang memodifikasi rasio Mendel 9:3:3:1:\n- **Atavisme (Pial Ayam)**: R_P_ (Walnut), R_pp (Rose), rrP_ (Pea), rrpp (Single) -> 9:3:3:1.\n- **Kriptomeri**: Tersembunyinya sifat gen jika berdiri sendiri (A_B_ Ungu, A_bb Merah, aaB_/aabb Putih) -> 9:3:4.\n- **Epistasis Dominan**: Gen dominan menutupi gen dominan lain -> 12:3:1.\n- **Polimeri**: Banyak gen menambah ekspresi sifat -> 15:1.\n- **Komplementer**: Gen saling melengkapi -> 9:7.";
  }

  return "🎓 **Pak GuruAI - Penjelasan Genetika**: \nPewarisan sifat dikendalikan oleh materi genetik (DNA/Gen) yang diturunkan dari orang tua ke keturunan melalui pembelahan sel meiosis. Cobalah gunakan modul Simulasi Interaktif di atas untuk mencoba persilangan Punnett Square, transkripsi DNA, atau pembuatan silsilah keluarga (pedigree) secara langsung!";
}

startServer();
