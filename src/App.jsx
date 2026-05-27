import { useState, useEffect } from "react";

function App() {
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");

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
      <h1 style={{color:"#ff2d78",textAlign:"center"}}>Funcionou!</h1>
      <p style={{textAlign:"center"}}>Se estás a ver isto, o site está OK.</p>
      
      <div style={{maxWidth:900,margin:"40px auto"}}>
        <stripe-pricing-table
          pricing-table-id="prctbl_1Tb0Y1NbetB6aDzhk1hbn0"
          publishable-key="pk_live_51Tzch1NbetB6aD5UGLs1a4EUhtwV4PKG81gy1s1kX1RU7urLC9A0LmC5HbyL59Vd0radhfD6pgWKT3UTWYhAR0o0V9cJL38"
        />
      </div>
    </div>
  );
}

export default App;
