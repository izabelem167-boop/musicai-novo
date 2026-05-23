import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const imagem = "https://api.dicebear.com/7.x/lorelei/png?seed=" + nome;

  function criar() {
    if (!nome || !tema) {
      alert("Preencha o nome e o tema.");
      return;
    }

    setResultado(
      "🎭 Artista Virtual: " + nome +
      "\n🎵 Estilo Musical: " + estilo +
      "\n✨ Tema: " + tema +
      "\n\n[Verso]\n" +
      "No silêncio eu encontrei\n" +
      "Uma força pra seguir\n" +
      "Cada sonho que guardei\n" +
      "Hoje volta a existir\n\n" +
      "[Refrão]\n" +
      tema + ", luz no meu coração\n" +
      "Com estilo " + estilo + "\n" +
      "Vai nascer uma nova canção 🎶"
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
      <h1 style={{ color: "#ff2d78", fontSize: "52px" }}>🎵 MusicAI Studio</h1>

      <p style={{ color: "#ddd", fontSize: "18px" }}>
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
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "25px"
        }}
      >
        🚀 Criar artista VIP — 4,99€
      </button>

      <br />

      <input
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: "15px", borderRadius: "12px", border: "none", margin: "10px", width: "320px" }}
      />

      <br />

      <select
        value={estilo}
        onChange={(e) => setEstilo(e.target.value)}
        style={{ padding: "15px", borderRadius: "12px", border: "none", margin: "10px", width: "350px" }}
      >
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Funk</option>
        <option>Sertanejo</option>
        <option>TikTok Viral</option>
      </select>

      <br />

      <input
        placeholder="Tema da música"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        style={{ padding: "15px", borderRadius: "12px", border: "none", margin: "10px", width: "320px" }}
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
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "15px",
          boxShadow: "0 0 25px rgba(255,45,120,0.5)"
        }}
      >
        ✨ Criar artista IA
      </button>

      {resultado && (
        <div style={{
          marginTop: "35px",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "24px",
          maxWidth: "720px",
          marginInline: "auto"
        }}>
          <img
            src={imagem}
            alt=""
            style={{ width: "180px", background: "white", borderRadius: "22px", marginBottom: "20px" }}
          />

          <pre style={{
            whiteSpace: "pre-wrap",
            textAlign: "left",
            lineHeight: "1.8",
            fontSize: "16px"
          }}>
            {resultado}
         <div
  style={{
    background: "linear-gradient(135deg,#1a1a1a,#2d0036)",
    padding: "25px",
    borderRadius: "22px",
    boxShadow: "0 0 30px rgba(255,0,150,0.3)",
    textAlign: "left",
    marginTop: "20px"
  }}
>
  <h2 style={{ color: "#ff4fd8" }}>
    🎤 {nome}
  </h2>

  <p>
    ✨ Estilo: <b>{estilo}</b>
  </p>

  <p>
    🎵 Tema: <b>{tema}</b>
  </p>

  <hr style={{ borderColor: "#444" }} />

  <p style={{ lineHeight: "1.8" }}>
    No silêncio eu encontrei uma força pra seguir.
    Cada sonho que guardei hoje volta a existir.
  </p>

  <p style={{ color: "#ffb3ec", fontWeight: "bold" }}>
    {tema}, luz no meu coração ✨
  </p>
</div>
