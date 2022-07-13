import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss'

export default function Footer() {
    const [seconds, setSeconds] = useState<number>(60);
    
    const navigate = useNavigate();

    function countToLogout(seconds: number = 60) {
		setTimeout(() => {
			if(seconds > 0) {
				setSeconds(seconds - 1);
				return countToLogout(seconds - 1);
			}else {
				navigate("/", {replace: true})
			}
		}, 1000);
	}

    return (
        <footer onLoad={() => countToLogout(seconds)} className={styles.footer} >
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
                <button className={styles.logout} onClick={() => navigate("/", {replace: true})}>Logout</button>                
            </div>
        </footer>
    )
}