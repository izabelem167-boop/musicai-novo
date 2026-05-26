import { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'

// Configuração Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Personagem IA
const PERSONAGENS = [
  { id: 'lia', nome: 'LIA', desc: 'Produtora Pop & Eletrônica', emoji: '🎧', cor: '#a855f7' },
  { id: 'maestro', nome: 'MAESTRO', desc: 'Clássico & Cinemático', emoji: '🎻', cor: '#3b82f6' },
  { id: 'beat', nome: 'BEAT', desc: 'Trap & Hip-Hop', emoji: '🎤', cor: '#ec4899' },
]

const ESTILOS = ['Pop', 'Trap', 'Sertanejo', 'Funk', 'Eletrônica', 'Rock', 'MPB', 'Lo-fi', 'Clássica', 'Reggaeton']

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authMode, setAuthMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [personagem, setPersonagem] = useState(PERSONAGENS[0])
  const [prompt, setPrompt] = useState('')
  const [estilo, setEstilo] = useState('Pop')
  const [gerando, setGerando] = useState(false)
  const [musicas, setMusicas] = useState([])
  const [mensagemLia, setMensagemLia] = useState('Oi! Eu sou a LIA. Me conta que música você quer criar hoje?')
  const audioRef = useRef(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (user) carregarMusicas()
  }, [user])

  const carregarMusicas = async () => {
    const { data } = await supabase
      .from('songs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)
    setMusicas(data || [])
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        alert('Conta criada! Verifica teu email.')
      }
    } catch (err) {
      alert(err.message)
    }
    setLoading(false)
  }

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({ 
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
  }

  const gerarMusica = async () => {
    if (!prompt.trim()) {
      setMensagemLia('Escreve uma ideia primeiro! Ex: "uma música sobre amor no verão"')
      return
    }
    setGerando(true)
    setMensagemLia(${personagem.emoji} ${personagem.nome} está produzindo em ${estilo}... isso leva 20s)

    // SIMULAÇÃO - depois você conecta com API real (Suno, Replicate, etc)
    await new Promise(r => setTimeout(r, 3500))
    
    const audioDemo = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2c7d2c6fca.mp3'
    const novaMusica = {
      user_id: user.id,
      prompt,
      style: estilo,
      audio_url: audioDemo,
      personagem: personagem.nome
    }
    
    const { data, error } = await supabase.from('songs').insert(novaMusica).select().single()
    if (!error && data) {
      setMusicas([data, ...musicas])
      setMensagemLia(Pronto! Criei "${prompt.slice(0,30)}..." em ${estilo}. Dá o play!)
    }
    setGerando(false)
    setPrompt('')
  }

  const logout = () => supabase.auth.signOut()

  if (loading) {
    return <div style={styles.loading}>Carregando...</div>
  }

  if (!user) {
    return (
      <div style={styles.authWrap}>
        <div …
