import { useState } from "react";

export default function App() {
  const [personagem, setPersonagem] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("");
  const [estilo, setEstilo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const imagem =
    genero === "Feminino"
      ? "https://api.dicebear.com/7.x/lorelei/png?seed=" + personagem
      : "https://api.dicebear.com/7.x/adventurer/png?seed=" + personagem;

  function criarArtista() {
    if (!personagem || !tema || !genero || !estilo) {
      alert("Preencha tudo primeiro.");
      return;
    }

    setMostrar(true);
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
      <h1 style={{ color: "#ff2d78", fontSize: "60px" }}>
        🎵 MusicAI Studio
      </h1>

      <p>
        Crie artistas virtuais, personagens e músicas com inteligência artificial 🚀
      </p>

      <button
        onClick={() =>
          window.open(
            "https://buy.stripe.com/5kQ5kEcTQe0n3u70Eve3e00"
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
        🚀 Criar artista VIP — 4,99€
      </button>

      <br />

      <input
        value={personagem}
        onChange={(e) => setPersonagem(e.target.value)}
        placeholder="Nome do personagem"
      />

      <br />
      <br />

      <input
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Tema da música"
      />

      <br />
      <br />

      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      >
        <option value="">Escolha o gênero</option>
        <option>Feminino</option>
        <option>Masculino</option>
      </select>

      <br />
      <br />

      <select
        value={estilo}
        onChange={(e) => setEstilo(e.target.value)}
      >
        <option value="">Escolha o estilo</option>
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Sertanejo</option>
        <option>Funk</option>
      </select>

      <br />
      <br />

      <button
        onClick={criarArtista}
        style={{
          background: "#ff2d78",
          color: "white",
          border: "none",
          padding: "16px 30px",
          borderRadius: "14px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ✨ Criar artista IA
      </button>

      {mostrar && (
        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "24px",
            maxWidth: "850px",
            marginInline: "auto",
          }}
        >
          <img
            src={imagem}
            alt=""
            style={{
              width: 180,
              background: "white",
              borderRadius: 20,
            }}
          />

          <h2>🎭 Personagem IA: {personagem}</h2>
          <p>👤 Gênero: {genero}</p>
          <p>🎵 Estilo: {estilo}</p>
          <p>🎶 Música sobre: {tema}</p>

          <p>
            {tema}, luz no meu coração, com estilo {estilo}, vai nascer uma nova canção 🎶
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "Personagem: " +
                  personagem +
                  "\nGênero: " +
                  genero +
                  "\nEstilo: " +
                  estilo +
                  "\nMúsica sobre: " +
                  tema
              );

              alert("Copiado!");
            }}
            style={{
              background: "#ff2d78",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              marginTop: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📋 Copiar resultado
          </button>
        </div>
      )}
    </div>
  );
}
