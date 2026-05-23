import { useState } from "react";

export default function App() {
  const [personagem, setPersonagem] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("");
  const [estilo, setEstilo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const imagem =
    genero === "Feminino"
      ? "https://api.dicebear.com/7.x/lorelei/png?seed=" + personagem
      : "https://api.dicebear.com/7.x/adventurer/png?seed=" + personagem;

  function criarArtista() {
    if (!personagem || !tema || !genero || !estilo) {
      alert("Preencha tudo primeiro.");
      return;
    }
    setMostrar(true);
  }

  const textoResultado =
    "🎭 Personagem IA: " + personagem +
    "\n👤 Gênero: " + genero +
    "\n🎵 Estilo: " + estilo +
    "\n🎶 Música sobre: " + tema +
    "\n\n[Refrão]\n" +
    tema + ", luz no meu coração\n" +
    "Com estilo " + estilo + "\n" +
    "Vai nascer uma nova canção 🎶";

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #3b0050 0%, #090909 60%)",
      color: "white",
      fontFamily: "Arial",
      padding: "30px",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#ff2d78", fontSize: "54px" }}>🎵 MusicAI Studio</h1>

      <p style={{ fontSize: "18px", color: "#ddd" }}>
        Crie artistas virtuais, personagens e músicas com IA em segundos.
      </p>

      <button
        onClick={() => window.open("https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00")}
        style={{
          background: "#ffd700",
          color: "#111",
          border: "none",
          padding: "14px 22px",
          borderRadius: "14px",
          marginBottom: "25px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        🚀 Criar artista VIP — 4,99€
      </button>

      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <input value={personagem} onChange={(e) => setPersonagem(e.target.value)} placeholder="Nome do personagem" style={campo} />
        <input value={tema} onChange={(e) => setTema(e.target.value)} placeholder="Tema da música" style={campo} />

        <select value={genero} onChange={(e) => setGenero(e.target.value)} style={campo}>
          <option value="">Escolha o gênero</option>
          <option>Feminino</option>
          <option>Masculino</option>
        </select>

        <select value={estilo} onChange={(e) => setEstilo(e.target.value)} style={campo}>
          <option value="">Escolha o estilo</option>
          <option>Gospel</option>
          <option>Pop</option>
          <option>Trap</option>
          <option>Sertanejo</option>
          <option>Funk</option>
          <option>TikTok Viral</option>
        </select>
      </div>

      <button onClick={criarArtista} style={{
        background: "#ff2d78",
        color: "white",
        border: "none",
        padding: "16px 30px",
        borderRadius: "16px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 0 25px rgba(255,45,120,0.5)"
      }}>
        ✨ Criar artista IA
      </button>

      {mostrar && (
        <div style={{
          marginTop: "40px",
          background: "rgba(255,255,255,0.09)",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: "30px",
          borderRadius: "28px",
          maxWidth: "850px",
          marginInline: "auto"
        }}>
          <img src={imagem} alt="" style={{
            width: 210,
            background: "white",
            borderRadius: 26,
            boxShadow: "0 0 30px rgba(255,255,255,0.2)"
          }} />

          <h2 style={{ color: "#ff2d78" }}>🎭 {personagem}</h2>
          <p>👤 {genero} · 🎵 {estilo}</p>

          <pre style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            textAlign: "left",
            background: "rgba(0,0,0,0.25)",
            padding: "20px",
            borderRadius: "18px"
          }}>
            {textoResultado}
          </pre>

          <button
            onClick={() => {
              navigator.clipboard.writeText(textoResultado);
              alert("Resultado copiado!");
            }}
            style={{
              background: "white",
              color: "#111",
              border: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📋 Copiar resultado
          </button>
        </div>
      )}
    </div>
  );
}

const campo = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  marginBottom: "14px",
  fontSize: "15px"
};
