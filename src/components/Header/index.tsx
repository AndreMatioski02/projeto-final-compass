import Logo from 'assets/images/home-logo-compasso.svg'
import Weather from './Weather';
import Clock from './Clock'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo compasso" />
            </div>
            <div className={styles.time}>
                <Clock />
            </div>
            <div className={styles.weather}>
                <Weather />
            </div>
        </header>
    )
}