import styles from './Login.module.scss';
import Logo from 'assets/images/login-logo-compasso.svg';
import classNames from 'classnames';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'data/firebase';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserLoginContext } from 'context/UserLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import InputLoginEmail from 'components/Inputs/loginEmail';
import InputLoginPassword from 'components/Inputs/loginPassword';

export default function Login() {
    const navigate = useNavigate();    
    const { email, setEmail, password, setPassword } = useContext(UserLoginContext);
    const [errorActive, setErrorActive] = useState(false);       
    const [user, loading] = useAuthState(auth);     
    
    useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
	}, [user, loading]);   

    function validateForm() {
        event.preventDefault()
		let inputs = document.querySelectorAll("input");
		let valid = true;
		inputs.forEach(input => {
			if(input.value == "") {
				valid = false;
				input.style.border = "1px solid #E9B425";
				setErrorActive(true);
			} else {
                logInWithEmailAndPassword(email, password)
            }
		});
	}    
    
    const logInWithEmailAndPassword = async (email: string, password: string) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.error(err);
        }
    } 

    function resetContext() {
		setEmail("");
		setPassword("");
	}

    return (                                 
        <main className={styles.mainLogin}>              
            <div className={styles.mainDiv}>
                <form>
                    <div className={styles.welcomeDiv}>
                        <h1>Olá,</h1>
                        <h2>Para continuar navegando de forma segura, efetue o login na rede.</h2>
                    </div>
                    <div className={styles.formDiv}>
                        <p>Login</p>
                        <InputLoginEmail />
                        <InputLoginPassword />
                        <div className={classNames({
		    				[styles.errorContainer]: true,
		    				[styles.errorContainer__active]: errorActive
		    			})}>
		    				<p>Ops, usuário ou senha inválidos.</p>
		    				<p>Tente novamente!</p>
		    			</div>
                        <div className={styles.signUpDiv}>
                            <p className={styles.signUpText}>Não possui cadastro?<a onClick={() => (
                                navigate("/cadastro", {replace: true}),
                                resetContext()
                            )}
                            > Cadastrar-se aqui</a></p>                        
                        </div>
                        <button onClick={() => validateForm()}>Continuar</button>                    
                    </div>
                </form>
            </div>            
            <div className={styles.divImage}>
                <img src={Logo} alt="Logo compasso" />
            </div>
        </main>       
    
    )
}