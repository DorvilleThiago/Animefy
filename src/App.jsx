import { useState, createContext, createRef, useRef, useEffect } from 'react'

import React from 'react'
import '/index.css'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Song from './components/Song'
import Hamburguer from './components/Hamburguer'

export const Tocando = createContext();

function App() {

  const [tocando, setTocando] = useState(false);
  const [theone, setTheOne] = useState('nenhuma');
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    if (mediaQuery.matches) {
        setMostrar(false)
    }

    const handleMediaQueryChange = (event) => {
    if (event.matches) {
      setMostrar(false)
    } else {
      setMostrar(true)
    }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
    mediaQuery.removeListener(handleMediaQueryChange);
    };
}, []);
  
  return (
    <Tocando.Provider value={{tocando, setTocando, theone, setTheOne, duration, setDuration, currentTime, setCurrentTime}}>
    <BottomBar />
        {mostrar && <TopBar />}
      {mostrar && <LeftBar />}
      {!mostrar && <Hamburguer/>}
    <h1 id='title1'>Épico</h1>
    <span id ='linha'>
      <Song song={'youseebiggirl'} nome='YOUSEEBIGGIRL' desc='"Attack on Titan" OST, essa é muito épica' img='https://i.imgur.com/FD14PeP.jpeg' />
      <Song song={'tanjironouta'} nome='Tanjiro no Uta' desc='"Demon Slayer" OST, extra quente' img='https://i.imgur.com/Jxv7L53.gif' />
      <Song song={'yousayrun'} nome='You Say Run' desc='"Boku no Hero" OST, você pode ser um heroi !' img='https://i.imgur.com/4fiYbNT.gif' />
      <Song song={'swordland'} nome='Swordland' desc='"Sword Art Online" OST, link start!' img='https://i.imgur.com/Er3kKyC.gif' />
      <Song song={'sasageyo'} nome='Sasageyo! ' desc='"Attack on Titan" OP feita por Linked Horizon' img='https://i.imgur.com/NGW3Aou.gif' />
      <Song song={'melissa'} nome='Melissa! ' desc='"FullMetal Alchemist" OP circulo de transmutação!' img='https://i.imgur.com/kxEVwwu.gif' />
    </span>
    <h1 id ='title2'>Emocionante</h1>
    <span id ='linha2'>
    <Song song={'unravel'} nome='Unravel' desc='"Tokyo Ghoul" Opening produzida por TK' img='https://i.imgur.com/Xjhe15r.gif' />
    <Song song={'gurenge'} nome='Zankyou Sanka' desc='"Demon Slayer" Opening produzida por Aimer' img='https://i.imgur.com/bT7bPRO.gif' />
      <Song song={'barricades'} nome='Barricades' desc='"Attack on Titan" OST, KILL HER! KILL HER!' img='https://i.imgur.com/C1aF04o.gif' />
      <Song song={'again'} nome='Again' desc='"FullMetal Alchemist" Opening feita por YUI' img='https://i.imgur.com/We3B3Ep.gif' />
      <Song song={'believeme'} nome='Believe Me' desc='"Steins Gate" OST, cuidado pra não chorar' img='https://i.imgur.com/bKGcPWH.gif' />
    </span>
      </Tocando.Provider>
      )
}

export default App
