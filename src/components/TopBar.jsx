import styles from '../modules/TopBar.module.css'

export default function TopBar() {
    return (
      <div className={styles.main}>
        <p style={{marginRight: '50px', fontSize: '17px', letterSpacing: '1px'}}>Deixe a chama do seu coração incendiar !</p>
        <span style={{marginRight: '50px',width: 1, height: 27,backgroundColor: 'white'}}></span>
        <a onClick={() => window.open('https://www.thiago-dorville.tech' , "_blank")} id={styles.port}>Ir para portfólio</a>
      </div>  
    );
}