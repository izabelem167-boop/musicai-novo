import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
export default function App() {
  const [email, setEmail] = useState("");
  const [logado, setLogado] = useState(false);
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const s = document.createElement("script");
      s.src = "https://js.stripe.com/v3/pricing-table.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  async function entrar() {
    const { data } = await supabase
      .from('users')
      .select('is_vip')
      .eq('email', email)
      .single();
    
    setIsVip(data?.is_vip === true);
    setLogado(true);
  }

  if (!logado) {
    return (
      <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arial"}}>
        <div style={{background:"#1a1a1a",padding:40,borderRadius:20,textAlign:"center",width:320}}>
          <h1 style={{color:"#ff2d78"}}>🎵 MusicAI</h1>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="izabelem167@gmail.com"
            style={{padding:12,width:"100%",margin:"10px 0",borderRadius:8,border:"none"}}
          />
          <button
            onClick={entrar}
            style={{background:"#ff2d78",color:"white",padding:12,width:"100%",border:"none",borderRadius:8,cursor:"pointer"}}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",padding:40,fontFamily:"Arial"}}>
      <h1 style={{color:"#ff2d78",textAlign:"center"}}>MusicAI Studio</h1>
      {isVip ? (
        <div style={{textAlign:"center",marginTop:60}}>
          <h2 style={{color:"#00ff88",fontSize:32}}>✅ Você é VIP</h2>
          <p>Acesso liberado: LIA, MAESTRO, BEAT</p>
        </div>
      ) : (
        <div style={{maxWidth:900,margin:"40px auto"}}>
          <h2 style={{textAlign:"center"}}>Assine €9,90/mês</h2>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Tb0Y1NbetB6aDzhk1hbn0"
            publishable-key="pk_live_51Tzch1NbetB6aD5UGLs1a4EUhtwV4PKG81gy1s1kX1RU7urLC9A0LmC5HbyL59Vd0radhfD6pgWKT3UTWYhAR0o0V9cJL38"
          />
        </div>
      )}
    </div>
  );
}
export default function App() {
  const [email, setEmail] = useState("");
  const [logado, setLogado] = useState(false);
  const [isVip, setIsVip] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setLogado(true);
      setEmail(user.email);
      const { data } = await supabase.from('users').select('is_vip').eq('email', user.email).single();
      if (data?.is_vip) setIsVip(true);
    }
    setLoading(false);
  }

  async function loginComGoogle() {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  }

  async function logout() {
    await supabase.auth.signOut();
    setLogado(false);
    setIsVip(false);
  }

  if (loading) return <div>Carregando...</div>;

  // TELA 1: NÃO LOGADO
  if (!logado) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1>MusicAI Studio</h1>
        <p>Assine €9,90/mês</p>
        <button onClick={loginComGoogle}>Entrar com Google</button>
      </div>
    );
  }

  // TELA 2: LOGADO MAS NÃO É VIP
  if (!isVip) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1>MusicAI Studio</h1>
        <p>Olá {email}</p>
        <p>Você ainda não é VIP</p>
        <button>Assinar €9,90/mês</button>
        <br/><br/>
        <button onClick={logout}>Sair</button>
      </div>
    );
  }

  // TELA 3: É VIP - AQUI VAI SEU APP
  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>MusicAI Studio ✅ Você é VIP</h1>
        <button onClick={logout}>Sair</button>
      </div>
      
      <h2>Gerar música</h2>
      <input placeholder="Descreva sua música..." style={{ width: '100%', padding: 10 }} />
      <button style={{ marginTop: 10, padding: 10 }}>Gerar</button>

      <h2 style={{ marginTop: 40 }}>Suas músicas</h2>
      <p>Ainda não tem nada aqui. Bora gerar a primeira.</p>
    </div>
  );
}
