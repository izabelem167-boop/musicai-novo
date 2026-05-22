import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("");
  const [musica, setMusica] = useState("");
  const [loading, setLoading] = useState(false);

  function criarMusica() {
    if (!tema) return;
    setLoading(true);
    setMusica("");

    setTimeout(() => {
      setMusica(`🎵 Título: Canção de ${tema}

[Verso 1]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Refrão]
${tema}, luz no meu caminho
${tema}, força no coração
Mesmo quando eu estiver sozinho
Vai nascer uma nova canção 🎶`);
      setLoading(false);
    }, 1200);
  }

  function copiarMusica() {
    navigator.clipboard.writeText(musica);
    alert("Música copiada!");
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #090909, #2b0036)", color: "white", minHeight: "100vh", padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1 style={{ fontSize: "55px", color: "#ff2d78" }}>🎵 MusicAI</h1>
      <p>Crie letras de músicas com inteligência artificial</p>

      <input value={tema} onChange={(e) => setTema(e.target.value)} placeholder="Ex: amor, fé, saudade..." style={{ padding: "15px", width: "320px", borderRadius: "12px", border: "none" }} />

      <br /><br />

      <button onClick={criarMusica} style={{ background: "#ff2d78", color: "white", border: "none", padding: "15px 30px", borderRadius: "12px", fontSize: "18px", fontWeight: "bold" }}>
        ✨ Criar música
      </button>

      {loading && <p style={{ marginTop: "25px" }}>⏳ Criando música...</p>}

      {musica && (
        <div style={{ marginTop: "35px", background: "rgba(255,255,255,0.1)", padding: "25px", borderRadius: "20px", maxWidth: "750px", marginInline: "auto", textAlign: "left" }}>
          <button onClick={copiarMusica} style={{ background: "white", color: "#111", border: "none", padding: "10px 18px", borderRadius: "10px", fontWeight: "bold" }}>
            📋 Copiar música
          </button>

          <pre style={{ whiteSpace: "pre-wrap", lineHeight: "1.7", marginTop: "20px" }}>{musica}</pre>
        </div>
      )}
    </div>
  );
}
