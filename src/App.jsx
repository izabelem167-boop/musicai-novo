import { useState } from "react";

export default function App() {
  const [personagem, setPersonagem] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("");
  const [estilo, setEstilo] = useState("");
  const [resultado, setResultado] = useState("");

  function criarArtista() {
    if (!personagem || !tema || !genero || !estilo) {
      alert("Preencha tudo primeiro.");
      return;
    }

    setResultado(`🎭 Personagem IA: ${personagem}

👤 Gênero: ${genero}
🎵 Estilo: ${estilo}

🎶 Música sobre: ${tema}

[Refrão]
${tema}, luz no meu coração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶`);
  }

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: 40, textAlign: "center", fontFamily: "Arial" }}>
      <h1>🎵 MusicAI</h1>
      <p>Crie seu artista virtual com IA do seu jeito</p>

      <input value={personagem} onChange={(e) => setPersonagem(e.target.value)} placeholder="Nome do personagem" />
      <br /><br />

      <input value={tema} onChange={(e) => setTema(e.target.value)} placeholder="Tema da música" />
      <br /><br />

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Escolha o gênero</option>
        <option>Feminino</option>
        <option>Masculino</option>
      </select>
      <br /><br />

      <select value={estilo} onChange={(e) => setEstilo(e.target.value)}>
        <option value="">Escolha o estilo</option>
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Sertanejo</option>
        <option>Funk</option>
      </select>
      <br /><br />

      <button onClick={criarArtista}>Criar artista IA</button>

      {resultado && (
        <pre style={{ marginTop: 30, whiteSpace: "pre-wrap", textAlign: "left" }}>
          {resultado}
        </pre>
      )}
    </div>
  );
}
