import styles from '../modules/TopBar.module.css'

export default function TopBar() {
    return (
      <div className={styles.main}>
        <p style={{marginRight: '50px', fontSize: '17px', letterSpacing: '1px'}}>Deixe a chama do seu coração incendiar !</p>
        <p style={{marginRight: '50px'}}>|</p>
        <a id={styles.port}>Ir para portfólio</a>
      </div>  
    );
}