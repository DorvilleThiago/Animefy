import styles from "../modules/LeftBar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFire, faHouse, faMagnifyingGlass, faBookAtlas, faHeart, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LeftBar() {
    return (
      <div className={styles.main}>
        <div className={styles.title}>
          <FontAwesomeIcon style={{
              color: 'white',
              marginLeft: '26px',
              height: '45px'
            }} icon={faFire} />
          <h1 style={{
            marginLeft: '4px',
            marginBottom: '12px',
            fontSize: '25px',
            fontWeight: '600'
          }}>Animefy</h1>
        </div>
        <div>
            
        </div>
        <div className={styles.menu1}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <FontAwesomeIcon style={{
              marginLeft: '26px',
              height: '26px',
              width: '26px'
            }} icon={faHouse} />
            <h3 style={{ fontSize: '15px', marginLeft: '12px'}}>Inicio</h3>
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <FontAwesomeIcon style={{
              marginLeft: '26px',
              height: '26px',
              width: '26px'
            }} icon={faMagnifyingGlass} />
            <h3 style={{ fontSize: '15px', marginLeft: '12px'}}>Pesquisar</h3>
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <FontAwesomeIcon style={{
              marginLeft: '26px',
              height: '26px',
              width: '26px'
            }} icon={faBookAtlas} />
            <h3 style={{ fontSize: '15px', marginLeft: '12px'}}>Pesquisar</h3>
          </span>
        </div>
        <div>

        </div>
        <div className={styles.menu2}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <span style={{
              marginLeft: '26px',
              height: '26px',
              width: '26px',
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
             <FontAwesomeIcon style={{
                width: '18px',
                color: 'black',
            }} icon={faGithub} />
            </span>
            <h3 style={{ fontSize: '15px', marginLeft: '12px'}}>Código do Projeto</h3>
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <span style={{
              marginLeft: '26px',
              height: '26px',
              width: '26px',
              background: 'linear-gradient(90deg, rgba(32,7,58,1) 0%, rgba(189,69,69,1) 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <FontAwesomeIcon style={{
              width: '13px'
            }} icon={faHeart} />
            </span>
            <h3 style={{ fontSize: '15px', marginLeft: '12px'}}>Músicas Curtidas</h3>
            </span>
        </div>
        <div className={styles.menu3}>
          <span className={styles.redes} style={{
            display: 'flex', gap: '10px',
            marginBottom: '10px', color: 'grey', transition: 'all 0.3s',
            cursor: 'pointer'
          }}>
            <a>Github</a>
            <a>Linkedin</a>
            <a>Instagram</a>
          </span>
            <span id={styles.language}>
              <a style={{
                width: '150px', height: '27px', border: 'rgba(255, 255, 255, 0.464) solid 1px',
                marginTop: '10px', borderRadius: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}> <FontAwesomeIcon style={{
                    width: '18px',
                    color: 'white',
                    marginBottom: '1px',
                    marginRight: '8px',
                  }} icon={faGlobe} /> <p>Português</p></a>
            </span>
        </div>
      </div>  
    );
}