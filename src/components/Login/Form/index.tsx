import styles from './Form.module.scss'
import userIcon from 'assets/images/user-icon.svg'
import passwordIcon from 'assets/images/password-icon.svg'
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    return (        
        <div className={styles.mainDiv}>
            <form>
                <div className={styles.welcomeDiv}>
                    <h1>Olá,</h1>
                    <h2>Para continuar navegando de forma segura, efetue o login na rede.</h2>
                </div>
                <div className={styles.formDiv}>
                    <p>Login</p>
                    <div className={styles.emailDiv}>
                        <input type="text" placeholder="Usuário" />
                        <img src={userIcon} alt="User Icon" />
                    </div>
                    <div className={styles.passwordDiv}>
                        <input type="password" placeholder="Senha"/>
                        <img src={passwordIcon} alt="Password Icon" />
                    </div>
                    <p className={styles.errorMessage}>Ops, usuário ou senha inválidos. Tente novamente!</p>
                    <button onClick={() => navigate("/home", {replace: true})}>Continuar</button>
                </div>
            </form>
        </div>
    )
}