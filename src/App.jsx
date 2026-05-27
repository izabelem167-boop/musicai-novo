import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_KEY
);

function App() {
  const [email, setEmail] = useState("");
  const [logado, setLogado] = useState(false);
  const [isVip, setIsVip] = useState(false);
  const [usosGratis, setUsosGratis] = useState(0);
  const [checando, setChecando] = useState(false);
  
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailSalvo = localStorage.getItem('email');
    if (emailSalvo) {
      setEmail(emailSalvo);
      setLogado(true);
      checarVip(emailSalvo);
    }
    setUsosGratis(Number(localStorage.getItem('usosGratis') || 0));
  }, []);

  async function checarVip(emailUser) {
    setChecando(true);
    const { data } = await supabase
      .from('usuarios_vip')
      .select('email')
      .eq('email', emailUser)
      .single();
    
    if (data) setIsVip(true);
    setChecando(false);
  }

  function fazerLogin() {
    if (!email.includes('@')) return alert("Digite um email válido");
    localStorage.setItem('email', email);
    setLogado(true);
    checarVip(email);
  }

  function sair() {
    localStorage.removeItem('email');
    location.reload();
  }

  const artigo = genero === "Feminino" ? "uma" : "um";
  const criado = genero === "Feminino" ? "criada" : "criado";
  const imagem = genero === "Feminino"
    ? "https://randomuser.me/api/portraits/women/44.jpg"
    : "https://randomuser.me/api/portraits/men/32.jpg";

  function criarArtista() {
    if (!isVip && usosGratis >= 1) {
      alert("Você usou seu teste grátis. Vire VIP por €9,90 para criar ilimitado!");
      window.open("https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00");
      return;
    }

    if (!nome || !tema) return alert("Preencha nome e tema.");

    setLoading(true);
    setResultado("");

    setTimeout(() => {
      setResultado(
`🎤 Artista Virtual: ${nome}

👤 Gênero: ${genero}
🎵 Estilo Musical: ${estilo}
✨ Tema principal: ${tema}

📖 Biografia:
${nome} é ${artigo} artista virtual ${criado} com inteligência artificial para emocionar, inspirar e criar músicas únicas.

🎶 Música: ${tema}

[Refrão]
${tema}, luz no meu coração
${tema}, minha inspiração
Com estilo ${estilo}
Vai nascer uma nova canção 🎶`
      );
      
      if (!isVip) {
        const novoUso = usosGratis + 1;
        setUsosGratis(novoUso);
        localStorage.setItem('usosGratis', novoUso);
      }
      
      setLoading(false);
    }, 1200);
  }

  if (!logado) {
    return (
      <div style={styles.page}>
        <div style={styles.loginCard}>
          <h1 style={styles.title}>🎵 MusicAI Studio Pro</h1>
          <p style={styles.subtitle}>Digite seu email para começar</p>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={fazerLogin} style={styles.createButton}>
            Entrar
          </button>
          <p style={styles.free}>✨ 1 teste grátis | VIP €9,90/mês</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.badge}>
          {checando ? "Verificando..." : isVip ? "👑 VIP Ativo" : `✨ ${1 - usosGratis} teste grátis`}
        </div>
        <h1 style={styles.title}>🎵 MusicAI Studio Pro</h1>
        <p style={styles.subtitle}>
          {email} <button onClick={sair} style={styles.logout}>Sair</button>
        </p>
        
        {!isVip && !checando && (
          <button
            onClick={() => window.open("https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00")}
            style={styles.vipButton}
          >
            🚀 Virar VIP — 9,90 /mês
          </button>
        )}
      </div>

      <div style={styles.formCard}>
        <input placeholder="Nome do personagem" value={nome} onChange={(e) => setNome(e.target.value)} style={styles.input} />
        <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} style={styles.input} />
        <select value={genero} onChange={(e) => setGenero(e.target.value)} style={styles.input}>
          <option>Feminino</option><option>Masculino</option>
        </select>
        <select value={estilo} onChange={(e) => setEstilo(e.target.value)} style={styles.input}>
          <option>Gospel</option><option>Pop</option><option>Trap</option>
          <option>Funk</option><option>Sertanejo</option><option>TikTok Viral</option>
        </select>
        <button onClick={criarArtista} style={styles.createButton}>
          {loading ? "⏳ Criando..." : isVip ? "✨ Criar artista VIP" : "✨ Criar artista"}
        </button>
      </div>

      {resultado && (
        <div style={styles.resultCard}>
          <img src={imagem} alt="" style={styles.avatar} />
          <pre style={styles.resultText}>{resultado}</pre>
          <button onClick={() => {navigator.clipboard.writeText(resultado); alert("Copiado!")}} style={styles.copyButton}>
            📋 Copiar resultado
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "radial-gradient(circle at top, #3b0050 0%, #090909 65%)", color: "white", fontFamily: "Arial, sans-serif", padding: "30px", textAlign: "center" },
  loginCard: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "40px", borderRadius: "24px", maxWidth: "400px", margin: "100px auto" },
  hero: { maxWidth: "850px", margin: "0 auto 30px" },
  badge: { display: "inline-block", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", marginBottom: "15px" },
  title: { color: "#ff2d78", fontSize: "52px", margin: "10px 0" },
  subtitle: { color: "#ddd", fontSize: "18px" },
  logout: { background: "none", border: "none", color: "#ff2d78", cursor: "pointer", marginLeft: "10px", fontSize: "14px" },
  free: { color: "#aaa", fontSize: "13px", marginTop: "15px" },
  vipButton: { background: "#ffd700", color: "#111", border: "none", padding: "14px 24px", borderRadius: "14px", fontWeight: "bold", cursor: "pointer", marginTop: "18px", fontSize: "16px" },
  formCard: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "25px", borderRadius: "24px", maxWidth: "430px", margin: "0 auto" },
  input: { width: "100%", padding: "15px", borderRadius: "14px", border: "none", marginBottom: "14px", fontSize: "15px", boxSizing: "border-box" },
  createButton: { width: "100%", background: "#ff2d78", color: "white", border: "none", padding: "16px 28px", borderRadius: "14px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" },
  resultCard: { marginTop: "35px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)", padding: "30px", borderRadius: "28px", maxWidth: "820px", marginInline: "auto" },
  avatar: { width: "190px", height: "190px", objectFit: "cover", borderRadius: "24px", marginBottom: "20px" },
  resultText: { whiteSpace: "pre-wrap", textAlign: "left", lineHeight: "1.8", fontSize: "16px", background: "rgba(0,0,0,0.25)", padding: "20px", borderRadius: "18px" },
  copyButton: { background: "white", color: "#111", border: "none", padding: "12px 20px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", marginTop: "20px" }
};

export default App;
