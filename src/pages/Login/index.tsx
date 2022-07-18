import styles from './Login.module.scss'
import Image from '../../components/Login/Image'
import FormLogin from '../../components/Login/FormLogin'

export default function Login() {
    return (                                 
        <main className={styles.mainLogin}>
            <FormLogin />
            <Image />
        </main>       
    
    )
}