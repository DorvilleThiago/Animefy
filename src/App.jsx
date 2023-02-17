import { useState, createContext, createRef, useRef, useEffect } from 'react'

import React from 'react'
import '/index.css'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Song from './components/Song'

export const Tocando = createContext();

function App() {

  const [tocando, setTocando] = useState(false);
  const [theone, setTheOne] = useState('nenhuma');
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [mostrar, setMostrar] = useState(true);


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) { 
        console.log('olá')
      } else {
        console.log('chau')
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Tocando.Provider value={{tocando, setTocando, theone, setTheOne, duration, setDuration, currentTime, setCurrentTime}}>
    <div >
    <BottomBar />
    <TopBar />
    <LeftBar />
    <h1 id ='title' style={{fontSize: 23,position: 'absolute', left: 275,top: 70, zIndex: -1}}>Épico</h1>
    <span id ='linha' style={{
      paddingTop: 138,
      display: 'flex',
      overflow: 'hidden',
      flexWrap: 'wrap',
      zIndex: -1,
      paddingLeft: 275,
      marginBottom: 34
    }}>
      <Song song={'youseebiggirl'} nome='YOUSEEBIGGIRL' desc='"Attack on Titan" OST, essa é muito épica' img='https://i.imgur.com/FD14PeP.jpeg' />
      <Song song={'tanjironouta'} nome='Tanjiro no Uta' desc='"Demon Slayer" OST, extra quente (literalmente)' img='https://i.imgur.com/Jxv7L53.gif' />
      <Song song={'yousayrun'} nome='You Say Run' desc='"Boku no Hero" OST, você pode ser um heroi !' img='https://i.imgur.com/4fiYbNT.gif' />
      <Song song={'swordland'} nome='Swordland' desc='"Sword Art Online" OST, link start!' img='https://i.imgur.com/Er3kKyC.gif' />
      <Song song={'sasageyo'} nome='Shinzo wo Sasageyo! ' desc='"Attack on Titan" Opening made by Linked Horizon' img='https://i.imgur.com/NGW3Aou.gif' />
      <Song song={'melissa'} nome='Melissa! ' desc='"FullMetal Alchemist" OST cycle of 5ths goes BRRR!' img='https://i.imgur.com/kxEVwwu.gif' />
    </span>
    <h1 id ='title' style={{fontSize: 23, marginLeft: 275, maginTop: 47, zIndex: -1}}>Emocionante</h1>
    <span id ='linha' style={{
      top: 518,
      display: 'flex',
      overflow: 'hidden',
      flexWrap: 'wrap',
      zIndex: -1,
      paddingLeft: 275,
      marginBottom: 100,
    }}>
    <Song nome='Unravel' desc='"Tokyo Ghoul" Opening made by TK' img='https://i.imgur.com/Xjhe15r.gif' />
    <Song song={'gurenge'} nome='Zankyou Sanka' desc='"Demon Slayer" Opening made by Aimer' img='https://i.imgur.com/bT7bPRO.gif' />
      <Song nome='Barricades' desc='"Attack on Titan" OST, you will love this one' img='https://i.imgur.com/C1aF04o.gif' />
      <Song nome='Again' desc='"FullMetal Alchemist" Opening made by YUI' img='https://i.imgur.com/We3B3Ep.gif' />
      <Song nome='Believe Me' desc='"Steins Gate" OST, it makes people cry' img='https://i.imgur.com/bKGcPWH.gif' />
    </span>
    
      </div>
      </Tocando.Provider>
      )
}

export default App
