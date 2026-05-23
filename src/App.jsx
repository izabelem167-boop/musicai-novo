import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  
 const imagem =
  genero === "Feminino"
    ? "https://i.imgur.com/6VBx3io.png"
    : "https://i.imgur.com/9XndQ5x.png";

  function criar() {
    if (!nome || !tema) {
      alert("Preencha o nome e o tema.");
      return;
    }

    setResultado(
`🎤 Artista Virtual: ${nome}

👤 Gênero: ${genero}
🎵 Estilo Musical: ${estilo}
✨ Tema principal: ${tema}

📖 Biografia:
${nome} é ${artigo} artista virtual criado(a) com inteligência artificial para emocionar, inspirar e criar músicas únicas. Seu estilo mistura ${estilo} com uma presença marcante, perfeita para vídeos, redes sociais e conteúdos virais.

🎶 Música: ${tema}

[Verso 1]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Pré-refrão]
Mesmo quando a noite vem
Eu não vou desanimar
Existe uma luz em mim
Que nasceu para brilhar

[Refrão]
${tema}, luz no meu coração
${tema}, minha inspiração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶

[Final]
E quando o mundo ouvir minha voz
Vai sentir que não estamos sós`
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

      <button onClick={criar} style={{
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
      }}>
        ✨ Criar artista IA
      </button>

      {resultado && (
        <div style={{
          marginTop: "35px",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "24px",
          maxWidth: "760px",
          marginInline: "auto"
        }}>
          <img src={imagem} alt="" style={{
            width: "190px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "24px",
            marginBottom: "20px",
            boxShadow: "0 0 30px rgba(255,255,255,0.25)"
          }} />

          <pre style={{
            whiteSpace: "pre-wrap",
            textAlign: "left",
            lineHeight: "1.8",
            fontSize: "16px"
          }}>
            {resultado}
          </pre>
<button
  onClick={() => alert("🎧 Prévia de áudio em breve!")}
  style={{
    background: "#ff2d78",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "10px"
  }}
 ▶ Ouvir prévia
</button>
