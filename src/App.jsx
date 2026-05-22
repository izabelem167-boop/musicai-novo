<button
  onClick={() => {
    navigator.clipboard.writeText(
      `🎭 Personagem IA: ${personagem}

👤 Gênero: ${genero}

🎵 Estilo: ${estilo}

🎶 Música sobre: ${tema}

${tema}, luz no meu coração, com estilo ${estilo}, vai nascer uma nova canção 🎶`
    );

    alert("Resultado copiado!");
  }}
  style={{
    background: "#ff2d78",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  📋 Copiar resultado
</button>
