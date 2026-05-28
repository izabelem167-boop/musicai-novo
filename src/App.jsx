import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("Feminino");
  const [estilo, setEstilo] = useState("Gospel");
  const [resultado, setResultado] = useState("");

  const artigo = genero === "Feminino" ? "uma" : "um";
  const criado = genero === "Feminino" ? "criada" : "criado";
  const imagem = genero === "Feminino"
    ? "https://randomuser.me/api/portraits/women/44.jpg"
    : "https://randomuser.me/api/portraits/men/32.jpg";

  function criar() {
    if (!nome || !tema) {
      alert("Preencha nome e tema.");
      return;
    }
