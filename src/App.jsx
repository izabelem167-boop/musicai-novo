import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const artigo = genero === "Feminino" ? "uma" : "um";
const criado = genero === "Feminino" ? "criada" : "criado";
  const imagem =
    genero === "Feminino"
      ? "https://randomuser.me/api/portraits/women/44.jpg"
      : "https://randomuser.me/api/portraits/men/32.jpg";

  function criarArtista() {
    if (!nome || !tema || !genero || !estilo) {
      alert("Preencha todos os campos.");
      return;
    }

    setLoading(true);
    setResultado("");

    setTimeout(() => {
      setResultado(
`🎤 Artista Virtual: ${nome}

👤 Gênero: ${genero}
🎵 Estilo Musical: ${estilo}
✨ Tema principal: ${tema}

📖 Biografia:
${nome} é ${artigo} artista virtual ${criado} com inteligência artificial para emocionar, inspirar e criar músicas únicas. Seu estilo mistura ${estilo} com uma presença marcante, perfeita para vídeos, redes sociais e conteúdos virais.

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

      setLoading(false);
    }, 1200);
  }

  function copiarResultado() {
    navigator.clipboard.writeText(resultado);
    alert("Resultado copiado!");
  }

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.badge}>✨ Plataforma IA para criadores</div>

        <h1 style={styles.title}>🎵 MusicAI Studio Pro</h1>

        <p style={styles.subtitle}>
          Crie artistas virtuais, personagens e músicas com inteligência artificial em segundos.
        </p>

        <button
          onClick={() => window.open("https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00")}
          style={styles.vipButton}
        >
          🚀 Criar artista VIP — 4,99€
        </button>
      </div>

      <div style={styles.formCard}>
        <input
          placeholder="Nome do personagem"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Tema da música"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          style={styles.input}
        />

        <select value={genero} onChange={(e) => setGenero(e.target.value)} style={styles.input}>
          <option>Feminino</option>
          <option>Masculino</option>
        </select>

        <select value={estilo} onChange={(e) => setEstilo(e.target.value)} style={styles.input}>
          <option>Gospel</option>
          <option>Pop</option>
          <option>Trap</option>
          <option>Funk</option>
          <option>Sertanejo</option>
          <option>TikTok Viral</option>
        </select>

        <button onClick={criarArtista} style={styles.createButton}>
          {loading ? "⏳ Criando artista..." : "✨ Criar artista IA"}
        </button>
      </div>

      {resultado && (
        <div style={styles.resultCard}>
          <img src={imagem} alt="" style={styles.avatar} />

          
         <div style={styles.artistHeader}>
  <div style={styles.verifiedRow}>
    <h2 style={styles.artistName}>
      🎤 {nome.toUpperCase()}
    </h2>

    <div style={styles.verifiedBadge}>
      ✔ Verified Artist
    </div>
  </div>

  <p style={styles.artistMeta}>
    {genero} · {estilo} · IA Artist
  </p>

  <p style={styles.listeners}>
    🎧 1.2M ouvintes mensais
  </p>
</div>

😄🚀      
</div>s.artistName}>🎤 {nome}</h2>
            <p style={styles.artistMeta}>
              {genero} · {estilo} · IA Artist
            </p>
          </div>
<div style={styles.musicPlayer}>
  <div style={styles.playButton}>
    ▶
  </div>

  <div style={{ flex: 1 }}>
    <div style={styles.songTitle}>
      {tema}
    </div>

    <div style={styles.songArtist}>
      {nome} • {estilo}
    </div>

    <div style={styles.progressBar}>
      <div style={styles.progress}></div>
    </div>

    <div style={styles.time}>
      0:32 / 2:14
    </div>
  </div>
</div>
          <pre style={styles.resultText}>{resultado}</pre>

          <div style={styles.actions}>
            <button onClick={copiarResultado} style={styles.copyButton}>
              📋 Copiar resultado
            </button>

            <button
              onClick={() => alert("🎧 Prévia de áudio em breve!")}
              style={styles.previewButton}
            >
              ▶ Ouvir prévia
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #3b0050 0%, #090909 65%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    textAlign: "center"
  },
  hero: {
    maxWidth: "850px",
    margin: "0 auto 30px"
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    marginBottom: "15px"
  },
  title: {
    color: "#ff2d78",
    fontSize: "52px",
    margin: "10px 0"
  },
  subtitle: {
    color: "#ddd",
    fontSize: "18px",
    lineHeight: "1.6"
  },
  vipButton: {
    background: "#ffd700",
    color: "#111",
    border: "none",
    padding: "14px 24px",
    borderRadius: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "18px",
    fontSize: "16px"
  },
  formCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "25px",
    borderRadius: "24px",
    maxWidth: "430px",
    margin: "0 auto",
    boxShadow: "0 0 30px rgba(255,45,120,0.18)"
  },
  input: {
    width: "100%",
    padding: "15px",
    borderRadius: "14px",
    border: "none",
    marginBottom: "14px",
    fontSize: "15px",
    boxSizing: "border-box"
  },
  createButton: {
    width: "100%",
    background: "#ff2d78",
    color: "white",
    border: "none",
    padding: "16px 28px",
    borderRadius: "14px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(255,45,120,0.5)"
  },
  resultCard: {
    marginTop: "35px",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "30px",
    borderRadius: "28px",
    maxWidth: "820px",
    marginInline: "auto",
    boxShadow: "0 0 35px rgba(255,45,120,0.18)"
  },
  avatar: {
    width: "190px",
    height: "190px",
    objectFit: "cover",
    borderRadius: "24px",
    marginBottom: "20px",
    boxShadow: "0 0 30px rgba(255,255,255,0.25)"
  },
  artistHeader: {
    marginBottom: "20px"
  },
  artistName: {
    color: "#ff2d78",
    marginBottom: "5px"
  },
  artistMeta: {
    color: "#ddd"
  },
  resultText: {
    whiteSpace: "pre-wrap",
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "16px",
    background: "rgba(0,0,0,0.25)",
    padding: "20px",
    borderRadius: "18px"
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  copyButton: {
    background: "white",
    color: "#111",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  previewButton: {
    background: "#ff2d78",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default App;
