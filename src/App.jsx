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
    <div
      style={{
        background: "linear-gradient(to bottom, #111, #1e1e1e)",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
          color: "#ff2d78",
        }}
      >
        🎵 MusicAI
      </h1>

      <p style={{ color: "#aaa", marginBottom: "40px" }}>
        Crie músicas com inteligência artificial
      </p>

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Digite um tema..."
        style={{
          padding: "15px",
          width: "300px",
          borderRadius: "12px",
          border: "none",
          fontSize: "16px",
          outline: "none",
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
          padding: "15px 30px",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ✨ Criar música
      </button>

      {musica && (
        <div
          style={{
            marginTop: "40px",
            background: "#222",
            padding: "25px",
            borderRadius: "20px",
            maxWidth: "700px",
            marginInline: "auto",
            textAlign: "left",
            lineHeight: "1.8",
          }}
        >
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "Arial",
              color: "#fff",
            }}
          >
            {musica}
          </pre>
        </div>
      )}
    </div>
  );
}
