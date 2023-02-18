import styles from '../modules/TopBar.module.css'
import { useState, useEffect } from 'react';


export default function TopBar() {

  const [showText, setshowText] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 920px)');

    if (mediaQuery.matches) {
      setshowText(false)
    }

    const handleMediaQueryChange = (event) => {
    if (event.matches) {
      setshowText(false)
    } else {
      setshowText(true)
    }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
    mediaQuery.removeListener(handleMediaQueryChange);
    };
}, []);

    return (
      <div className={styles.main}>
        {showText && <p style={{ marginRight: '50px', fontSize: '17px', letterSpacing: '1px' }}>Deixe a chama do seu coração incendiar !</p>}
        {showText && <span style={{ marginRight: '50px', width: 1, height: 27, backgroundColor: 'white' }}></span>}
        <a onClick={() => window.open('https://www.thiago-dorville.tech' , "_blank")} id={styles.port}>Ir para portfólio</a>
      </div>  
    );
}