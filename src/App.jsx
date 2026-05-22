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
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: 40, textAlign: "center", fontFamily: "Arial" }}>
      <h1>🎵 MusicAI</h1>
      <p>Crie seu artista virtual com IA do seu jeito</p>

      <input placeholder="Nome do personagem" value={personagem} onChange={(e) => setPersonagem(e.target.value)} />
      <br /><br />

      <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} />
      <br /><br />

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Escolha o gênero</option>
        <option>Feminino</option>
        <option>Masculino</option>
      </select>
      <br /><br />

      <select value={estilo} onChange={(e) => setEstilo(e.target.value)}>
        <option value="">Escolha o estilo</option>
        <option>Gospel</option>
        <option>Pop</option>
        <option>Trap</option>
        <option>Sertanejo</option>
        <option>Funk</option>
      </select>
      <br /><br />

      <button onClick={criarArtista}>✨ Criar artista IA</button>

      {mostrar && (
        <div style={{ marginTop: 30 }}>
          <img src={imagem} alt="personagem" style={{ width: 180, background: "white", borderRadius: 20 }} />

          <h2>🎭 Personagem IA: {personagem}</h2>
          <p>👤 Gênero: {genero}</p>
          <p>🎵 Estilo: {estilo}</p>
          <p>🎶 Música sobre: {tema}</p>

          <p>
            {tema}, luz no meu coração, com estilo {estilo}, vai nascer uma nova canção 🎶
          </p>
        </div>
      )}
    </div>
  );
}
