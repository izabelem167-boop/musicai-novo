import { useState } from "react";

export default function App() {
  const [personagem, setPersonagem] = useState("");
  const [tema, setTema] = useState("");
  const [resultado, setResultado] = useState("");

  function criar() {
    setResultado(`🎭 Personagem: ${personagem}

🎵 Música sobre: ${tema}

[Refrão]
${tema}, luz no meu coração 🎶`);
  }

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: 40 }}>
      <h1>🎵 MusicAI</h1>

      <input placeholder="Nome do personagem" value={personagem} onChange={(e) => setPersonagem(e.target.value)} />
      <br /><br />

      <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} />
      <br /><br />

      <button onClick={criar}>Criar artista IA</button>

      <pre>{resultado}</pre>
    </div>
  );
}
