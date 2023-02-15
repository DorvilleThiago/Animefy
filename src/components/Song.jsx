import styles from '../modules/Song.module.css';

export default function Song() {
    return(
        <div className={styles.main}>
            <span className={styles.img}></span>
            <h3 className={styles.title}>Titulo Música</h3>
            <p className={styles.desc}>Essa é a melhor descrição de uma música do mundo</p>
        </div> 
    );
}