import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const imagem =
    genero === "Feminino"
      ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800"
      : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800";

  function criar() {
    setResultado(
      "🎤 Artista: " + nome +
      "\n👤 Gênero: " + genero +
      "\n🎵 Tema: " + tema +
      "\n🎶 Estilo: " + estilo +
      "\n✅ Música criada com sucesso!"
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
      <h1 style={{ color: "#ff2d78", fontSize: "52px" }}>🎵 MusicAI Studio 2.0</h1>
      <p>Crie personagens e músicas com IA</p>

      <input placeholder="Nome do personagem" value={nome} onChange={(e) => setNome(e.target.value)} style={campo} />
      <br />

      <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} style={campo} />
      <br />

      <select value={genero} onChange={(e) => setGenero(e.target.value)} style={campo}>
        <option>Feminino</option>
        <option>Masculino</option>
      </select>
      <br />

      <select value={estilo} onChange={(e) => setEstilo(e.target.value)} style={campo}>
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Funk</option>
        <option>Sertanejo</option>
      </select>

      <br />

      <button onClick={criar} style={{
        background: "#ff2d78",
        color: "white",
        border: "none",
        padding: "18px 40px",
        borderRadius: "14px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "15px"
      }}>
        ✨ Criar artista IA
      </button>

      {resultado && (
        <div style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "650px",
          marginInline: "auto"
        }}>
          <img src={imagem} alt="" style={{
            width: "180px",
            background: "white",
            borderRadius: "20px",
            marginBottom: "20px"
          }} />

          <pre style={{
            whiteSpace: "pre-wrap",
            textAlign: "left"
          }}>
            {resultado}
          </pre>
        </div>
      )}
    </div>
  );
}

const campo = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  margin: "10px",
  width: "320px"
};

export default App;
