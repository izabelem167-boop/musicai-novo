import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("");
  const [musica, setMusica] = useState("");

  function criarMusica() {
    if (!tema) return;

    setMusica(`🎵 Título: Canção de ${tema}

[Verso 1]
No silêncio eu encontrei
Uma força pra seguir
Cada sonho que guardei
Hoje volta a existir

[Pré-refrão]
E quando o mundo tentar me parar
Eu vou lembrar do que me faz continuar

[Refrão]
${tema}, luz no meu caminho
${tema}, força no coração
Mesmo quando eu estiver sozinho
Vai nascer uma nova canção

[Verso 2]
Cada lágrima virou
Uma estrela a brilhar
E a esperança me ensinou
Que eu posso recomeçar

[Final]
MusicAI criou
E a emoção ficou 🎶`);
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, #090909, #2b0036)",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "55px", color: "#ff2d78" }}>🎵 MusicAI</h1>
      <p>Crie letras de músicas com inteligência artificial</p>

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Ex: amor de mãe, fé, saudade..."
        style={{ padding: "15px", width: "320px", borderRadius: "12px", border: "none" }}
      />

      <br /><br />

      <button onClick={criarMusica} style={{
        background: "#ff2d78",
        color: "white",
        border: "none",
        padding: "15px 30px",
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: "bold"
      }}>
        ✨ Criar música completa
      </button>

      {musica && (
        <pre style={{
          marginTop: "35px",
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "750px",
          marginInline: "auto",
          whiteSpace: "pre-wrap",
          textAlign: "left",
          lineHeight: "1.7"
        }}>{musica}</pre>
      )}
    </div>
  );
}
