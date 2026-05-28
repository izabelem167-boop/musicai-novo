import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const artigo = genero === "Feminino" ? "uma" : "um";
  const criado = genero === "Feminino" ? "criada" : "criado";
  const imagem = genero === "Feminino"
    ? "https://randomuser.me/api/portraits/women/44.jpg"
    : "https://randomuser.me/api/portraits/men/32.jpg";

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
${nome} é ${artigo} artista virtual ${criado} com inteligência artificial.

🎶 Música: ${tema}

[Verso]
No silêncio eu encontrei
Uma força pra seguir

[Refrão]
${tema}, luz no meu coração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶`);
  }

  function copiar() {
    navigator.clipboard.writeText(resultado);
    alert("Copiado!");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#120018", color: "white", padding: "30px", textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={{ color: "#ff2d78" }}>🎵 MusicAI Studio Pro</h1>
      <p>Crie artistas virtuais e músicas com IA.</p>

      <button onClick={() =<window.open("https://buy.stripe.com/dRm7sMaLI3lJ1lZgDte3e03")
        🚀 Criar artista VIP — 9,90€
      </button>

      <div style={card}>
        <input placeholder="Nome do personagem" value={nome} onChange={(e) => setNome(e.target.value)} style={input} />
        <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} style={input} />

        <select value={genero} onChange={(e) => setGenero(e.target.value)} style={input}>
          <option>Feminino</option>
          <option>Masculino</option>
        </select>

        <select value={estilo} onChange={(e) => setEstilo(e.target.value)} style={input}>
          <option>Gospel</option>
          <option>Pop</option>
          <option>Trap</option>
          <option>Funk</option>
          <option>Sertanejo</option>
          <option>TikTok Viral</option>
        </select>

        <button onClick={criar} style={botaoCriar}>✨ Criar artista IA</button>
      </div>

      {resultado && (
        <div style={resultadoCard}>
          <img src={imagem} alt="Artista IA" style={avatar} />
          <h2>🎤 {nome.toUpperCase()}</h2>
          <p>✔ Verified Artist</p>
          <p>{genero} · {estilo} · IA Artist</p>
          <p>🎧 1.2M ouvintes mensais</p>

          <pre style={texto}>{resultado}</pre>

          <button onClick={copiar} style={botaoCopiar}>📋 Copiar resultado</button>
          <button onClick={() => alert("🎧 Prévia de áudio em breve!")} style={botaoCriar}>▶ Ouvir prévia</button>
        </div>
      )}
    </div>
  );
}

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "none",
  boxSizing: "border-box"
};

const card = {
  maxWidth: "420px",
  margin: "25px auto",
  background: "rgba(255,255,255,0.1)",
  padding: "22px",
  borderRadius: "20px"
};

const resultadoCard = {
  maxWidth: "760px",
  margin: "30px auto",
  background: "rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "24px"
};

const avatar = {
  width: "170px",
  height: "170px",
  objectFit: "cover",
  borderRadius: "22px"
};

const texto = {
  whiteSpace: "pre-wrap",
  textAlign: "left",
  background: "rgba(0,0,0,0.3)",
  padding: "18px",
  borderRadius: "16px"
};

const botaoVip = {
  background: "#ffd700",
  padding: "14px 20px",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold"
};

const botaoCriar = {
  background: "#ff2d78",
  color: "white",
  padding: "14px 20px",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  margin: "8px"
};

const botaoCopiar = {
  background: "white",
  color: "#111",
  padding: "14px 20px",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  margin: "8px"
};

export default App;
