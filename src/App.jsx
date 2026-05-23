import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [resultado, setResultado] = useState("");

  function criar() {
    setResultado(
      "🎤 Artista: " + nome +
      "\n🎵 Tema: " + tema +
      "\n✅ Música criada com sucesso!"
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#ff2d78" }}>
        🎵 MusicAI Studio
      </h1>

      <input
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          margin: "10px",
          width: "320px"
        }}
      />

      <br />

      <input
        placeholder="Tema da música"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        style={{
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          margin: "10px",
          width: "320px"
        }}
      />

      <br />

      <button
        onClick={criar}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "18px 40px",
          borderRadius: "14px",
          cursor: "pointer"
        }}
      >
        ✨ Criar artista IA
      </button>

      {resultado && (
        <pre
          style={{
            marginTop: "30px",
            background: "#222",
            padding: "20px",
            borderRadius: "20px",
            whiteSpace: "pre-wrap",
            maxWidth: "600px",
            marginInline: "auto",
            textAlign: "left"
          }}
        >
          {resultado}
        </pre>
      )}
    </div>
  );
}

export default App;
