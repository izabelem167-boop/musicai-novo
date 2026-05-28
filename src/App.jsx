import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const artigo = genero === "Feminino" ? "uma" : "um";
  const criado = genero === "Feminino" ? "criada" : "criado";

  function criar() {
    if (!nome || !tema) {
      alert("Preencha nome e tema.");
      return;
    }

    setResultado(`🎤 Artista Virtual: ${nome}

👤 Gênero: ${genero}
🎵 Estilo Musical: ${estilo}
✨ Tema principal: ${tema}

📖 Biografia:
${nome} é ${artigo} artista virtual ${criado} com inteligência artificial para emocionar, inspirar e criar músicas únicas.

🎶 Música: ${tema}

[Verso]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Refrão]
${tema}, luz no meu coração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶`);
  }

  return (
    <div style={page}>
      <div style={hero}>
        <div style={badge}>
          ✨ Plataforma IA para criadores
        </div>

        <h1 style={title}>
          🎵 MusicAI Studio Pro
        </h1>

        <p style={subtitle}>
          Crie artistas virtuais e músicas com inteligência artificial.
        </p>

        <button
          onClick={() =>
            window.open("https://buy.stripe.com/aFa9AUbPMaOb2q31Ize3e04")
          }
          style={vip}
        >
          🚀 Entrar no Beta MusicAI — 2,99€
        </button>

        <p style={betaText}>
          Versão beta com acesso antecipado às novas funções IA.
        </p>
      </div>

      <div style={card}>
        <input
          placeholder="Nome do personagem"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={input}
        />

        <input
          placeholder="Tema da música"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          style={input}
        />

        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          style={input}
        >
          <option>Feminino</option>
          <option>Masculino</option>
        </select>

        <select
          value={estilo}
          onChange={(e) => setEstilo(e.target.value)}
          style={input}
        >
          <option>Gospel</option>
          <option>Pop</option>
          <option>Trap</option>
          <option>Funk</option>
          <option>Sertanejo</option>
          <option>TikTok Viral</option>
        </select>

        <button onClick={criar} style={criarBtn}>
          ✨ Criar artista IA
        </button>
      </div>

      {resultado && (
        <div style={resultadoBox}>
          <h2>🎤 {nome.toUpperCase()}</h2>

          <p style={verified}>
            ✔ Verified Artist
          </p>

          <p>
            {genero} · {estilo} · IA Artist
          </p>

          <p style={listeners}>
            🎧 1.2M ouvintes mensais
          </p>

          <pre style={texto}>{resultado}</pre>
        </div>
      )}
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#17001f,#090909)",
  color: "white",
  padding: "30px",
  textAlign: "center",
  fontFamily: "Arial"
};

const hero = {
  marginBottom: "30px"
};

const badge = {
  display: "inline-block",
  background: "rgba(255,255,255,0.1)",
  padding: "8px 14px",
  borderRadius: "999px",
  marginBottom: "15px",
  fontSize: "14px"
};

const title = {
  color: "#ff2d78",
  fontSize: "46px",
  marginBottom: "10px"
};

const subtitle = {
  color: "#ddd",
  marginBottom: "20px"
};

const betaText = {
  color: "#aaa",
  marginTop: "12px",
  fontSize: "14px"
};

const card = {
  maxWidth: "420px",
  margin: "25px auto",
  background: "rgba(255,255,255,0.08)",
  padding: "22px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.08)"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "none",
  boxSizing: "border-box"
};

const vip = {
  background: "#ffd700",
  color: "#111",
  padding: "14px 22px",
  border: "none",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px"
};

const criarBtn = {
  background: "#ff2d78",
  color: "white",
  padding: "14px 20px",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%"
};

const resultadoBox = {
  maxWidth: "760px",
  margin: "30px auto",
  background: "rgba(255,255,255,0.08)",
  padding: "25px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.08)"
};

const verified = {
  color: "#1DB954",
  fontWeight: "bold"
};

const listeners = {
  color: "#aaa",
  marginBottom: "20px"
};

const texto = {
  whiteSpace: "pre-wrap",
  textAlign: "left",
  background: "rgba(0,0,0,0.3)",
  padding: "18px",
  borderRadius: "16px",
  lineHeight: "1.7"
};

export default App;
