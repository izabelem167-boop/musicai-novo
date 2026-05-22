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

[Pré-refrão]
E quando o mundo tentar me parar
Eu vou lembrar do que me faz continuar

[Refrão]
${tema}, luz no meu caminho
${tema}, força no coração
Mesmo quando eu estiver sozinho
Vai nascer uma nova canção 🎶`);
      setLoading(false);
    }, 1500);
  }

  function copiarMusica() {
    navigator.clipboard.writeText(musica);
    alert("🎵 Música copiada!");
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#090909,#1a0033,#2b0036)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "65px",
          color: "#ff2d78",
          marginBottom: "10px",
        }}
      >
        🎵 MusicAI
      </h1>

      <p style={{ color: "#ccc", marginBottom: "35px" }}>
        Crie letras de músicas com inteligência artificial
      </p>

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Digite um tema..."
        style={{
          padding: "16px",
          width: "320px",
          borderRadius: "14px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <br />
      <br />

      <button
        onClick={criarMusica}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "16px 30px",
          borderRadius: "14px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 0 20px rgba(255,45,120,0.5)",
        }}
      >
        ✨ Criar música
      </button>

      {loading && (
        <div style={{ marginTop: "30px", fontSize: "20px" }}>
          ⏳ Criando música...
        </div>
      )}

      {musica && (
        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "30px",
            borderRadius: "24px",
            maxWidth: "750px",
            marginInline: "auto",
            textAlign: "left",
            backdropFilter: "blur(10px)",
          }}
        >
          <button
            onClick={copiarMusica}
            style={{
              background: "white",
              color: "#111",
              border: "none",
              padding: "10px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            📋 Copiar música
          </button>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            {musica}
          </pre>
        </div>
      )}
    </div>
  );
}
