import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [email, setEmail] = useState('');
  const [logado, setLogado] = useState(false);
  const [isVip, setIsVip] = useState(false);
  const [usosGratis, setUsosGratis] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [resultado, setResultado] = useState('');

  // Carrega Stripe
  useEffect(() => {
    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://js.stripe.com/v3/pricing-table.js';
      s.async = true;
      document.body.appendChild(s);
    }
    setUsosGratis(Number(localStorage.getItem('usosGratis') || 0));
  }, []);

  async function checarVip(emailUser) {
    const { data } = await supabase.from('assinantes').select('status').eq('email', emailUser).single();
    setIsVip(data?.status === 'ativo');
  }

  async function entrar() {
    if (!email) return;
    setLogado(true);
    localStorage.setItem('email', email);
    checarVip(email);
  }

  async function gerarMusica() {
    if (!isVip && usosGratis >= 3) {
      alert('Limite grátis atingido. Faz upgrade abaixo!');
      return;
    }
    setLoading(true);
    
    // AQUI entra a tua chamada para gerar música
    setTimeout(() => {
      setResultado(`Música gerada: "${prompt}"`);
      if (!isVip) {
        const novoUso = usosGratis + 1;
        setUsosGratis(novoUso);
        localStorage.setItem('usosGratis', novoUso);
      }
      setLoading(false);
    }, 1200);
  }

  // TELA DE LOGIN
  if (!logado) {
    return (
      <div style={styles.page}>
        <div style={styles.loginCard}>
          <h1 style={styles.title}>🎵 MusicAI Studio Pro</h1>
          <p style={styles.subtitle}>Digite seu email para começar</p>
          <input style={styles.input} placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <button style={styles.createButton} onClick={entrar}>Entrar</button>
        </div>
      </div>
    );
  }

  // APP PRINCIPAL
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <span style={styles.badge}>{isVip ? 'VIP ATIVO' : 'GRÁTIS'}</span>
        <h1 style={styles.title}>MusicAI Studio Pro</h1>
        <p style={styles.subtitle}>Crie músicas com IA em segundos</p>
        {!isVip && <p style={styles.free}>Usos grátis: {usosGratis}/3</p>}
        <button style={styles.logout} onClick={() => setLogado(false)}>Sair</button>
      </div>

      <div style={styles.formCard}>
        <input style={styles.input} placeholder="Descreva sua música..." value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button style={styles.createButton} onClick={gerarMusica} disabled={loading}>
          {loading ? 'Gerando...' : 'Gerar Música'}
        </button>
      </div>

      {resultado && (
        <div style={styles.resultCard}>
          <p style={styles.resultText}>{resultado}</p>
        </div>
      )}

      {/* TABELA DE PREÇOS - só para quem não é VIP */}
      {!isVip && (
        <div style={{ maxWidth: '1000px', margin: '60px auto' }}>
          <h2 style={{ textAlign: 'center', color: '#ff2d78' }}>Desbloqueie o Pro</h2>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Tb0Y1NbetB6aDzhk1hbn0"
            publishable-key="pk_live_51Tzch1N
