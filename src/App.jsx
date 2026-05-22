import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("");
  const [musica, setMusica] = useState("");
  const [loading, setLoading] = useState(false);
  const [premium, setPremium] = useState(false);

  function criarMusica() {
    if (!tema) return;

    setLoading(true);
    setMusica("");

    setTimeout(() => {
      if (premium) {
        setMusica(`🎵 Título Premium: Canção de ${tema}

[Verso 1]
No silêncio da noite eu ouvi
Os sonhos chamando por mim
Cada estrela parecia dizer
Que ainda existe um novo amanhecer

[Pré-refrão]
Mesmo quando o medo aparecer
A esperança vai me fortalecer

[Refrão]
${tema}, luz do meu coração
Força viva em cada canção
Mesmo longe eu vou acreditar
Que os sonhos podem voltar 🎶`);
      } else {
        setMusica(`🎵 Música grátis sobre ${tema}

[Verso]
Hoje eu vou cantar
Sobre ${tema}
Com emoção no coração 🎶`);
      }

      setLoading(false);
    }, 1500);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2b0036 0%, #090909 60%)",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff2d78", fontSize: "55px" }}>
        🎵 MusicAI
      </h1>

      <p>Crie músicas com inteligência artificial</p>

      <button
        onClick={() =>
          window.open(
            "https://buy.stripe.com/test_7sYbJ12NG16y4K76Zh9R600"
          )
        }
        style={{
          background: "#ffd700",
          color: "#111",
          border: "none",
          padding: "12px 20px",
          borderRadius: "12px",
          marginBottom: "25px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ⭐ Desbloquear Premium — 4,99€
      </button>

      <br />

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Digite um tema..."
        style={{
          padding: "16px",
          width: "320px",
          borderRadius: "14px",
          border: "none",
        }}
      />

      <br />
      <br />

      <button
        onClick={criarMusica}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "16px 30px",
          borderRadius: "14px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ✨ Criar música
      </button>

      {loading && (
        <div style={{ marginTop: "30px" }}>
          ⏳ Criando música...
        </div>
      )}

      {musica && (
        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "24px",
            maxWidth: "850px",
            marginInline: "auto",
            textAlign: "left",
          }}
        >
          <pre
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
            }}
          >
            {musica}
          </pre>
        </div>
      )}
    </div>
  );
}
