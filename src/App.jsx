import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const imagem =
    genero === "Feminino"
      ? "https://randomuser.me/api/portraits/women/44.jpg"
      : "https://randomuser.me/api/portraits/men/32.jpg";

  const artigo = genero === "Feminino" ? "uma" : "um";

  function criar() {
    setResultado(
      "🎤 Artista Virtual: " + nome +
      "\n👤 Gênero: " + genero +
      "\n🎵 Estilo Musical: " + estilo +
      "\n✨ Tema principal: " + tema +
      "\n\n📖 Biografia:\n" +
      nome + " é " + artigo + " artista virtual criado(a) com inteligência artificial para emocionar, inspirar e criar músicas únicas." +
      "\n\n🎶 Música: " + tema +
      "\n\n[Verso 1]\nNo silêncio eu encontrei\nUma força pra seguir\nCada sonho que guardei\nHoje volta a existir" +
      "\n\n[Refrão]\n" + tema + ", luz no meu coração\nCom estilo " + estilo + "\nVai nascer uma nova canção 🎶"
    );
  }

  function copiar() {
    navigator.clipboard.writeText(resultado);
    alert("Resultado copiado!");
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #3b0050, #090909 65%)",
      color: "white",
      padding: "40px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#ff2d78", fontSize: "52px" }}>🎵 MusicAI Studio 2.0</h1>
      <p>Crie artistas virtuais, personagens e músicas com IA.</p>

      <button
        onClick={() => window.open("https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00")}
        style={{ background: "#ffd700", color: "#111", border: "none", padding: "14px 22px", borderRadius: "14px", fontWeight: "bold", cursor: "pointer", marginBottom: "25px" }}
      >
        🚀 Criar artista VIP — 4,99€
      </button>

      <br />

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
        <option>TikTok Viral</option>
      </select>

      <br />

      <button onClick={criar} style={{ background: "#ff2d78", color: "white", border: "none", padding: "18px 40px", borderRadius: "14px", fontSize: "18px", fontWeight: "bold", cursor: "pointer", marginTop: "15px" }}>
        ✨ Criar artista IA
      </button>

      {resultado && (
        <div style={{ marginTop: "35px", background: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "24px", maxWidth: "760px", marginInline: "auto" }}>
          <img src={imagem} alt="" style={{ width: "190px", height: "190px", objectFit: "cover", borderRadius: "24px", marginBottom: "20px" }} />

          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left", lineHeight: "1.8", fontSize: "16px" }}>
            {resultado}
          </pre>

          <button onClick={copiar} style={{ background: "white", color: "#111", border: "none", padding: "12px 20px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>
            📋 Copiar resultado
          </button>

          <button onClick={() => alert("🎧 Prévia de áudio em breve!")} style={{ background: "#ff2d78", color: "white", border: "none", padding: "12px 20px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", marginLeft: "10px" }}>
            ▶ Ouvir prévia
          </button>
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
