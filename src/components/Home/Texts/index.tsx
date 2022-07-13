import styles from './Text.module.scss'

export default function Texts() {
    return (
        <div className={styles.texts}>
            <p className={styles.englishFirst}>Our mission is</p>
            <p className={styles.portugues}>Nossa missão é</p>
            <p className={styles.english}>to transform the world</p>
            <p className={styles.portugues}>transformar o mundo</p>
            <p className={styles.english}>building digital experiences</p>
            <p className={styles.portugues}>construindo experiências digitais</p>
            <p className={styles.english}>that enable our client's growth</p>
            <p className={styles.portugues}>que permitam o crescimento dos nossos clientes</p>
        </div>
    )
}