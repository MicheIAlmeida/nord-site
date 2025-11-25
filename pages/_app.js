import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  
  const titles = [
    "NORD|PP - Creative Content Studio",
    "NORD|PP - Branding & Design", 
    "NORD|PP - Estratégia Criativa",
    "NORD|PP - Conteúdo Impactante"
  ]

  useEffect(() => {
    // Rotação do título
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    
    // Rotação do favicon
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50) // Gira suavemente

    return () => {
      clearInterval(titleInterval)
      clearInterval(rotationInterval)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{titles[titleIndex]}</title>
        <link 
          rel="icon" 
          href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/0e869d2b1_Noir_Prancheta1cpia3.png" 
        />
        <style>{`
          link[rel="icon"] {
            transform: rotate(${rotation}deg);
            transition: transform 0.1s ease;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}