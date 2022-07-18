import styles from './Login.module.scss'
import Image from '../../components/Login/Image'
import FormLogin from '../../components/Login/FormLogin'
import { useContext } from 'react';
import { UserContext } from 'context/User';

export default function Login() {
    const { email, setEmail, password, setPassword } = useContext(UserContext);
    return (                                 
        <main className={styles.mainLogin}>
            <FormLogin />
            <Image />
        </main>       
    
    )
}