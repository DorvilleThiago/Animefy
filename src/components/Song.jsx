import styles from '../modules/Song.module.css';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState, useContext, useEffect } from 'react';
import { Tocando } from '../App'
import lista from './Audio'
export default function Song(props) {

    const { tocando, setTocando } = useContext(Tocando);
    const { theone, setTheOne } = useContext(Tocando);
    const { currentTime, setCurrentTime } = useContext(Tocando);
    const { duration, setDuration } = useContext(Tocando);

    useEffect(() => { 
        if (theone !== undefined && theone != 'nenhuma') {
        const interval = setInterval(() => {
            setCurrentTime(lista[theone].currentTime)
        }, 1000);
        return () => clearInterval(interval);
        }
        
      }, [theone]);
    
      useEffect(() => {
        const handleAudioEnded = () => {
            setTocando(false)
          };
          if (theone !== undefined && theone != 'nenhuma') {
              lista[theone].addEventListener('ended', handleAudioEnded);
              return () => {
                  lista[theone].removeEventListener('ended', handleAudioEnded);
              };
          }
      }, [theone]);
    
    
    const handlePlay = (song) => {
        if (theone == 'nenhuma') {
            for (let item in lista) {
                lista[item].volume = 0.3
            }
         }
         if (song == 'youseebiggirl') {
             if (tocando) {
                 for (let item in lista) {
                     lista[item].pause();
                     lista[item].currentTime = 0;
                 }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('youseebiggirl')
             lista.youseebiggirl.play();
             setDuration(lista.youseebiggirl.duration);
         } else if (song == 'gurenge') {
            if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('gurenge')
             setDuration(lista.gurenge.duration);
            lista.gurenge.play();
         } else if (song == 'tanjironouta') {
             if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('tanjironouta')
             setDuration(lista.tanjironouta.duration);
            lista.tanjironouta.play();
         } else if (song == 'yousayrun') {
            if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('yousayrun')
             setDuration(lista.yousayrun.duration);
            lista.yousayrun.play();
         } else if (song == 'swordland') {
            if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('swordland')
             setDuration(lista.swordland.duration);
            lista.swordland.play();
         } else if (song == 'sasageyo') {
            if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('sasageyo')
             setDuration(lista.sasageyo.duration);
            lista.sasageyo.play();
         } else if (song == 'melissa') {
            if (tocando) {
                for (let item in lista) {
                    lista[item].pause();
                    lista[item].currentTime = 0;
                }
             }
             setCurrentTime(0)
             setTocando(true);
             setTheOne('melissa')
             setDuration(lista.melissa.duration);
            lista.melissa.play();
         }
       
        };
    
    const icon = useRef(null)

    function Appear() {
        icon.current.style.transform = 'translateY(-5px)'
        icon.current.style.opacity = 1
    }
    function Leave() {
        icon.current.style.transform = 'translateY(5px)'
        icon.current.style.opacity = 0
    }
    

    return(
        <div
            onClick={() => handlePlay(props.song)}
            onMouseEnter={() => Appear()}
             onMouseLeave={() => Leave()}
             className={styles.main}>
            <img src={props.img} alt="" className={styles.img}></img>
            <h3 className={styles.title}>{props.nome}</h3>
            <p className={styles.desc}>{props.desc}</p>
            <span ref={icon} className={styles.play}>
                <FontAwesomeIcon style={{
                    width: '26px',
                    height: '26px',
                    color: 'white',
                    position: 'absolute',
                    left: 14,
                    top: 12
                }} icon={faPlay} />
            </span>
        </div> 
    );
}