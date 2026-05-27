import { useState, useEffect } from "react";

function App() {
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const s = document.createElement('script');
