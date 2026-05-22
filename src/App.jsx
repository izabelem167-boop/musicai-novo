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

🎵 Estilo Musical:
${estilo}

🎶 Música:
${tema}

[Verso]
No silêncio eu encontrei
Uma força pra seguir

[Refrão]
${tema}, luz no meu coração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶`);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2b0036 0%, #090909 60%)",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#ff2d78",
          fontSize: "60px",
        }}
      >
        🎵 MusicAI
      </h1>

      <p>Crie seu artista virtual com IA do seu jeito</p>

      <input
        value={personagem}
        onChange={(e) => setPersonagem(e.target.value)}
        placeholder="Nome do personagem"
        style={{
          padding: "16px",
          width: "320px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "15px",
        }}
      />

      <br />

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Tema da música"
        style={{
          padding: "16px",
          width: "320px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "15px",
        }}
      />

      <br />

      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        style={{
          padding: "16px",
          width: "355px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "15px",
        }}
      >
        <option value="">Escolha o gênero</option>
        <option>Feminino</option>
        <option>Masculino</option>
      </select>

      <br />

      <select
        value={estilo}
        onChange={(e) => setEstilo(e.target.value)}
        style={{
          padding: "16px",
          width: "355px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "20px",
        }}
      >
        <option value="">Escolha o estilo</option>
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Sertanejo</option>
        <option>Funk</option>
      </select>

      <br />

      <button
        onClick={criarArtista}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "16px 30px",
          borderRadius: "14px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ✨ Criar artista IA
      </button>

      {resultado && (
        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "24px",
            maxWidth: "850px",
            marginInline: "auto",
            textAlign: "left",
          }}
        >
          <img
            src={`https://api.dicebear.com/7.x/adventurer/png?seed=${personagem}`}
            alt="personagem"
            style={{
              width: "180px",
              borderRadius: "20px",
              display: "block",
              marginBottom: "20px",
              background: "white",
            }}
          />

          <pre
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
            }}
          >
            {resultado}
          </pre>
        </div>
      )}
    </div>
  );
}
