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
      alert("Você usou seu teste grátis. Vire VIP por €4,99 para criar ilimitado!");
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
${nome} é ${artigo} artista virtual ${criado} com inteligência artificial para emocionar, inspirar e criar músicas únicas. Seu estilo mistura ${estilo} com uma presença marcante, perfeita para vídeos, redes sociais e conteúdos virais.

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
          <button
