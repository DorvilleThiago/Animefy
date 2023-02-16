import styles from '../modules/Song.module.css';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react';

export default function Song() {

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
        <div onMouseEnter={() => Appear()}
             onMouseLeave={() => Leave()}
             className={styles.main}>
            <span className={styles.img}></span>
            <h3 className={styles.title}>Titulo Música</h3>
            <p className={styles.desc}>Essa é a melhor descrição existente</p>
            <span ref={icon} className={styles.play}>
                <FontAwesomeIcon style={{
                    width: '26px',
                    height: '26px',
                    color: 'white',
                    position: 'relative',
                    left: 14,
                    top: 12
                }} icon={faPlay} />
            </span>
        </div> 
    );
}