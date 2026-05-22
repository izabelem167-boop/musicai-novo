import { useState } from "react";

export default function App() {
  const [personagem, setPersonagem] = useState("");
  const [tema, setTema] = useState("");
  const [estilo, setEstilo] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  function criarTudo() {
    if (!tema || !personagem || !estilo) return;

    setLoading(true);
    setResultado("");

    setTimeout(() => {
      setResultado(`🎭 Personagem: ${personagem}

🎵 Estilo Musical:
${estilo}

✨ Descrição:
Artista virtual estilo ${estilo}, com visual moderno e presença forte.

🎶 Música:
Título: ${tema}

[Verso]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Refrão]
${tema}, luz no meu coração
Com batidas de ${estilo}
Vai nascer uma nova canção 🎵`);
      setLoading(false);
    }, 1800);
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
      <h1 style={{ color: "#ff2d78", fontSize: "60px" }}>
        🎵 MusicAI
      </h1>

      <p>Crie artistas virtuais com IA</p>

      <input
        value={personagem}
        onChange={(e) => setPersonagem(e.target.value)}
        placeholder="Nome do personagem..."
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
        placeholder="Tema da música..."
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
        <option value="">Escolha um estilo</option>
        <option>Gospel</option>
        <option>Trap</option>
        <option>Pop</option>
        <option>Sertanejo</option>
        <option>Funk</option>
        <option>TikTok Viral</option>
      </select>

      <br />

      <button
        onClick={criarTudo}
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

      {loading && (
        <div style={{ marginTop: "30px" }}>
          ⏳ Criando artista...
        </div>
      )}

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
