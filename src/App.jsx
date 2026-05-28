import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

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
      const { data } = await supabase
        .from('users')
        .select('is_vip')
        .eq('email', user.email)
        .single();
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
    setEmail("");
  }

  if (loading) return <div style={{ padding: 40 }}>Carregando...</div>;

  if (!logado) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1>MusicAI Studio</h1>
        <p>Assine €9,90/mês</p>
        <button onClick={loginComGoogle}>Entrar com Google</button>
      </div>
    );
  }

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
