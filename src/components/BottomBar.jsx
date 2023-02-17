import styles from "../modules/BottomBar.module.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext, useRef, useEffect } from "react";
import { Tocando } from '../App'
import lista from './Audio'

export default function BottomBar() {

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
      }

    const { tocando, setTocando } = useContext(Tocando)
    const { theone, setTheOne } = useContext(Tocando)
    const { duration, setDuration } = useContext(Tocando)
    const { currentTime, setCurrentTime } = useContext(Tocando)
    
    const [volume, setVolume] = useState(0.3);

    const pause = useRef(null)
    const play = useRef(null)

    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        setVolume(volume);
        for (let item in lista) {
            lista[item].volume = volume;
        }
    };

    const handleTimeChange = (event) => {
        lista[theone].currentTime = event.target.value;
        setCurrentTime(lista[theone].currentTime);
      };
    

    function handlePlay() {
        if (theone == 'nenhuma') {
            return;
        } else {
            if (lista[theone].paused) {
                lista[theone].play(); 
                setTocando(true)
            } else {
                lista[theone].pause();
                setTocando(false)
            }
        }
    }  

    useEffect(() => {
        if (tocando) {
            pause.current.style.opacity = 1
            play.current.style.opacity = 0
        } else {
            pause.current.style.opacity = 0
            play.current.style.opacity = 1
        }
      }, [tocando]);
    

    return (<div className={styles.supermain}>
        <span className={styles.main}>
        <button onClick={() => handlePlay()}>
            <FontAwesomeIcon ref={play} id={styles.icon} icon={faPlay} />
            <FontAwesomeIcon ref={pause} id={styles.icon} icon={faPause} />
        </button>
        <p>{formatTime(Math.ceil(currentTime))}</p>
        <input 
        id={styles.tempo}
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleTimeChange}
        />
        <p>{formatTime(Math.ceil(duration))}</p>
        <input
        id={styles.volume}
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
            />
            </span>
    </div>)
}