import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("");
  const [musica, setMusica] = useState("");

  function criarMusica() {
    setMusica(`🎵 Música sobre: ${tema}

Verso:
Hoje eu vou cantar
Sobre ${tema}
Com emoção no coração

Refrão:
MusicAI chegou
E a inspiração começou 🎶`);
  }

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🎵 MusicAI</h1>
      <p>Digite um tema e gere uma música.</p>

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Ex: amor, fé, saudade..."
        style={{ padding: "12px", borderRadius: "10px", width: "280px" }}
      />

      <br /><br />

      <button onClick={criarMusica} style={{ background: "#ff2d78", color: "white", border: "none", padding: "15px 25px", borderRadius: "10px", fontSize: "18px" }}>
        Criar música
      </button>

      <pre style={{ marginTop: "30px", whiteSpace: "pre-wrap", fontSize: "18px" }}>
        {musica}
      </pre>
    </div>
  );
}
