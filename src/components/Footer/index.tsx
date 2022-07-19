import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss'
import { useContext } from 'react';
import { UserLoginContext } from 'context/UserLogin';
import { signOut } from "firebase/auth";
import { auth } from 'data/firebase';

export default function Footer() {
    const [seconds, setSeconds] = useState<number>(60);
    const { setEmail, setPassword } = useContext(UserLoginContext);    
    const navigate = useNavigate();

    function countToLogout(seconds: number = 0) {
		setTimeout(() => {
			if(seconds > 0) {
				setSeconds(seconds - 1);
				return countToLogout(seconds - 1);
			}else {
                logout()
                resetContext()
				navigate("/", {replace: true})
                
			}
		}, 1000);
	}    

    useEffect(() => {
        countToLogout(seconds)
    }, [])

    
    useEffect(() => {
		return () => {
		  setSeconds(0); 
		};
	}, []);    

    const logout = async () => {
		await signOut(auth);
	};

    function resetContext() {
		setEmail("");
		setPassword("");
	}

    return (
        <footer className={styles.footer} >
            <div className={styles.description}>
                <div>
                    <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
                        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </p>            
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.application}>
                <div className={styles.title}>
                    <p>Application refresh in</p>            
                </div>
                <div className={styles.timer}>
                    <span className={styles.number}>{seconds}</span>
                    <p className={styles.seconds}>seconds</p>
                </div>
            </div>
            <div className={styles.buttons}>     
                <a href="https://www.google.com/" target="_blank"><button className={styles.continue}>Continuar Navegando</button></a>
                <button 
                    className={styles.logout} 
                    onClick={() => (
                        resetContext(),                                               
                        logout(),
                        navigate("/", {replace: true})
                    )}
                >
                    Logout
                </button>                
            </div>
        </footer>
    )
}