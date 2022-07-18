import styles from './Image.module.scss';
import Logo from 'assets/images/login-logo-compasso.svg'

export default function Image() {
    return (
        <div className={styles.divImage}>
            <img src={Logo} alt="Logo compasso" />
        </div>
    )
}