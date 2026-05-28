import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

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
    // 1. Busca no Supabase se esse email é VIP
    const { data } = await supabase
      .from('users')
      .select('is_vip')
      .eq('email', email)
      .single()
    
    setIsVip(data?.is_vip === true)
    setLogado(true)
  }

  if (!logado) {
    return (
      <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arial"}}>
        <div style={{background:"#1a1a1a",padding:40,borderRadius:20,textAlign:"center",width:320}}>
          <h1 style={{color:"#ff2d78"}}>🎵 MusicAI</h1>
          <input 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            placeholder="izabelem167@gmail.com" 
            style={{padding:12,width:"100%",margin:"10px 0",borderRadius:8,border:"none"}}
          />
          <button 
            onClick={entrar} 
            style={{background:"#ff2d78",color:"white",padding:12,width:"100%",border:"none",borderRadius:8}}
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
          <h2 style={{textAlign:"center"}}>Assine €9,90/mês para liberar</h2>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Tb0Y1NbetB6aDzhk1hbn0"
            publishable-key="pk_live_51Tzch1NbetB6aD5UGLs1a4EUhtwV4PKG81gy1s1kX1RU7urLC9A0LmC5HbyL59Vd0radhfD6pgWKT3UTWYhAR0o0V9cJL38"
          />
        </div>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const s = document.createElement("script");
      s.src = "https://js.stripe.com/v3/pricing-table.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  if (!logado) {
    return (
      <div style={{minHeight:"100vh",background:"#0a0a0a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arial"}}>
        <div style={{background:"#1a1a1a",padding:40,borderRadius:20,textAlign:"center",width:320}}>
          <h1 style={{color:"#ff2d78"}}>🎵 MusicAI</h1>
          <p>Teste</p>
          <input 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            placeholder="email@teste.com" 
            style={{padding:12,width:"100%",margin:"10px 0",borderRadius:8,border:"none",boxSizing:"border-box"}}
          />
          <button 
            onClick={()=>setLogado(true)} 
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
      <h1 style={{color:"#ff2d78",textAlign:"center"}}>FUNCIONOU!</h1>
      <div style={{maxWidth:900,margin:"40px auto"}}>
        <stripe-pricing-table
          pricing-table-id="prctbl_1Tb0Y1NbetB6aDzhk1hbn0"
          publishable-key="pk_live_51Tzch1NbetB6aD5UGLs1a4EUhtwV4PKG81gy1s1kX1RU7urLC9A0LmC5HbyL59Vd0radhfD6pgWKT3UTWYhAR0o0V9cJL38"
        />
      </div>
    </div>
  );
}
