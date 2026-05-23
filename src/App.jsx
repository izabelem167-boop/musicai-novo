import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [resultado, setResultado] = useState("");

  function criar() {
    if (!nome || !tema) {
      alert("Preencha o nome e o tema.");
      return;
    }

    setResultado(
      "🎭 Personagem IA: " + nome +
      "\n🎵 Música sobre: " + tema +
      "\n\n[Refrão]\n" +
      tema + ", luz no meu coração\nVai nascer uma nova canção 🎶"
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #15001f, #090909)",
      color: "white",
      padding: "40px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#ff2d78", fontSize: "52px" }}>
        🎵 MusicAI Studio
      </h1>

      <p>Crie personagens e músicas com IA</p>

      <input
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: "15px", borderRadius: "12px", border: "none", margin: "10px", width: "280px" }}
      />

      <br />
<select
  style={{
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    margin: "10px",
    width: "280px"
  }}
>
  <option>Gospel</option>
  <option>Trap</option>
  <option>Pop</option>
  <option>Funk</option>
  <option>Sertanejo</option>
</select>
      <input
        placeholder="Tema da música"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        style={{ padding: "15px", borderRadius: "12px", border: "none", margin: "10px", width: "280px" }}
      />

      <br />

      <button
        onClick={criar}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "14px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "15px"
        }}
      >
        ✨ Criar artista IA
      </button>

      {resultado && (
        <pre style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "650px",
          marginInline: "auto",
          whiteSpace: "pre-wrap",
          textAlign: "left"
        }}>
          {resultado}
        </pre>
      )}
    </div>
  );
}

export default App;
