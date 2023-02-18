import { faBars, faFire } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from "react";
import "../modules/Hamburguer.css";


export default function Hamburguer() {

    const main = useRef(null)
    const [alavanca, setAlavanca] = useState(false);

    function aumentar() {
        if (!alavanca) {
            main.current.style.height = '220px';
            setAlavanca(!alavanca)
        }
        else {
            main.current.style.height = '65px';
            setAlavanca(!alavanca)
        }
    }

    const divStyle = {
        
        position: "absolute",
        transform: alavanca ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)",
        opacity: alavanca ? 1 : 0,
        transition: "opacity 0.5s, transform 0.5s",
        pointerEvents: alavanca ? "auto" : "none"
      };

    return (
        <div ref={main}
            style={{
            top: '10px',
            left: '5%',
            display: 'flex',
            height: '65px',
            borderRadius: 25,
            backgroundColor: '#56575fb5',
            width: '90%',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: 3,
            transition: 'all 0.3s ease-in-out',
        }}>
            <FontAwesomeIcon
              onClick={() => aumentar()}
              style={{
              marginLeft: '35px',
              height: '35px',
              width: '26px',
              marginTop: '15px',
              
            }} icon={faBars} />
            <FontAwesomeIcon style={{
              color: 'white',
              marginRight: '35px',
                height: '35px',
                marginTop: '15px',
            }} icon={faFire} />
            <div style={divStyle}> 
                {alavanca && <div style={{
                    
                position: 'absolute',
                transform: 'translate(36px, 75px)',
                display: 'flex', flexDirection: 'column',
                width: '200px',
            }}>
                    <span onClick={() => window.open('https://github.com/DorvilleThiago/Animefy', "_blank")} style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    transition: 'all 0.3s ease-in-out'
                }}>
                    <span style={{
                        height: '26px',
                        width: '26px',
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    
                    }}>
                        <FontAwesomeIcon style={{
                            width: '18px',
                            color: 'black',
                        }} icon={faGithub} />
                    </span>
                    <h3 style={{ fontSize: '15px', marginLeft: '12px' }}>Código do Projeto</h3>
                </span>
                <span onClick={() => window.open('https://www.linkedin.com/in/thiago-dorville/', "_blank")} style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    cursor: 'pointer',
                }}>
                    <span style={{
                        height: '26px',
                        width: '26px',
                        background: 'linear-gradient(90deg, blue 0%, lightblue 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    
                    }}>
                        <FontAwesomeIcon style={{
                            width: '18px',
                            color: 'white',
                        }} icon={faLinkedin} />
                    </span>
                    <h3 style={{ fontSize: '15px', marginLeft: '12px' }}>Linkedin</h3>
                </span>
                <span onClick={() => window.open('https://www.instagram.com/thiagojosedorville/', "_blank")} style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    cursor: 'pointer',
                }}>
                    <span style={{
                        height: '26px',
                        width: '26px',
                        background: 'linear-gradient(90deg, rgba(32,7,58,1) 0%, rgba(189,69,69,1) 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    
                    }}>
                        <FontAwesomeIcon style={{
                            width: '18px',
                            color: 'white',
                        }} icon={faInstagram} />
                    </span>
                    <h3 style={{ fontSize: '15px', marginLeft: '12px' }}>Instagram</h3>
                </span>
                </div>}
                </div>
        </div>
    )
}