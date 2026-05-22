import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("");
  const [musica, setMusica] = useState("");
  const [loading, setLoading] = useState(false);

  function criarMusica() {
    if (!tema) return;

    setLoading(true);
    setMusica("");

    setTimeout(() => {
      setMusica(`🎵 Título: Canção de ${tema}

[Verso]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Refrão]
${tema}, luz no meu caminho
${tema}, força no coração
Mesmo quando eu estiver sozinho
Vai nascer uma nova canção 🎶`);
      setLoading(false);
    }, 1800);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2b0036 0%, #090909 60%)",
        color: "white",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#ff2d78",
            fontSize: "38px",
            margin: 0,
          }}
        >
          🎵 MusicAI
        </h1>

        <button
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
            padding: "10px 18px",
            borderRadius: "12px",
          }}
        >
          Premium
        </button>
      </div>

      {/* HERO */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "65px",
            marginBottom: "10px",
            lineHeight: "1.1",
          }}
        >
          Crie músicas
          <br />
          com IA 🎶
        </h2>

        <p
          style={{
            color: "#bbb",
            fontSize: "20px",
            marginBottom: "40px",
          }}
        >
          Gere letras incríveis em segundos
        </p>

        {/* INPUT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            placeholder="Digite um tema..."
            style={{
              width: "320px",
              padding: "18px",
              borderRadius: "16px",
              border: "none",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "16px",
              outline: "none",
              backdropFilter: "blur(10px)",
            }}
          />

          <button
            onClick={criarMusica}
            style={{
              background: "#ff2d78",
              border: "none",
              color: "white",
              padding: "18px 26px",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(255,45,120,0.5)",
            }}
          >
            ✨ Criar
          </button>
        </div>

        {/* LOADING */}
        {loading && (
          <div
            style={{
              marginTop: "35px",
              fontSize: "18px",
              color: "#ff2d78",
            }}
          >
            ⏳ Criando música...
          </div>
        )}

        {/* RESULTADO */}
        {musica && (
          <div
            style={{
              marginTop: "40px",
              maxWidth: "850px",
              marginInline: "auto",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "28px",
              padding: "30px",
              backdropFilter: "blur(12px)",
              textAlign: "left",
            }}
          >
            <button
              onClick={() => {
                navigator.clipboard.writeText(musica);
                alert("🎵 Música copiada!");
              }}
              style={{
                background: "white",
                color: "#111",
                border: "none",
                padding: "10px 16px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              📋 Copiar música
            </button>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.9",
                fontSize: "17px",
                color: "#fff",
              }}
            >
              {musica}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
