export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f0f0f',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>MusicAI</h1>
      <p style={{ opacity: 0.8, marginBottom: '30px' }}>
        O teu app está no ar! Próximo passo: ligar o botão VIP.
      </p>
      <a
        href="https://buy.stripe.com/test_xxx" 
        style={{
          background: '#ff2d55',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Assinar VIP – €9/mês
      </a>
    </div>
  )
}
