import styles from './Cadastro.module.scss';
import Logo from 'assets/images/login-logo-compasso.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { UserSignUpContext } from 'context/UserSignUp'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from 'data/firebase';
import InputSignUpEmail from 'components/Inputs/signUpEmail';
import InputSignUpPassword from 'components/Inputs/signUpPassword';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Cadastro() {
    const navigate = useNavigate();    
    const { email, 
            setEmail,
            emailCorrect,
            password, 
            setPassword,
            passwordCorrect, 
        } = useContext(UserSignUpContext);
    const [errorActive, setErrorActive] = useState(false);    
    const [user, loading] = useAuthState(auth);
    
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
    }, [user, loading]);

    function validateForm() {
        event.preventDefault()
		let inputs = document.querySelectorAll("input");
		inputs.forEach(input => {
			if(!emailCorrect || !passwordCorrect) {
				input.style.border = "1px solid #E9B425";
				setErrorActive(true);
                return
			} else { 
                input.style.border = "1px solid #FFFFFF";                
                setErrorActive(false) 
                alert("Cadastro realizado com sucesso!")
                navigate('/home')                                
                registerWithEmailAndPassword(email, password);
                resetContext();           
            }
		});
	}

    const registerWithEmailAndPassword = async (email: string, password: string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                authProvider: "local",
                email,
            });                       
        } catch (err: any) {
            setErrorActive(true);
            let inputs = document.querySelectorAll("input");
		    inputs.forEach(input => {input.style.border = "1px solid #E9B425"})
        }
    }

    function resetContext() {
		setEmail("");
		setPassword("");
	}

    return (                                 
        <main className={styles.mainCadastro}>
            <div className={styles.mainDiv}>
                <form>
                    <div className={styles.welcomeDiv}>
                        <h1>Olá,</h1>
                        <h2>Para continuar navegando de forma segura, efetue o cadastro na rede.</h2>
                    </div>
                    <div className={styles.formDiv}>
                        <p>Cadastro</p>
                        <InputSignUpEmail />
                        <InputSignUpPassword />                    
                        <div className={styles.passwordChecks}>
                            <p>Mínimo de 6 dígitos</p>
                            <p>Letra maiúscula</p>
                            <p>Letra minúscula</p>
                            <p>Número</p>
                        </div>

                        <div className={classNames({
			    			[styles.errorContainer]: true,
			    			[styles.errorContainer__active]: errorActive
			    		})}>
			    			<p>Ops, usuário ou senha inválidos.</p>
			    			<p>Tente novamente!</p>
			    		</div>
                        <div className={styles.signUpDiv}>
                            <p className={styles.signUpText}>
                                Já possui cadastro? 
                                <a 
                                    onClick={() => (
                                        navigate("/login", {replace: true}),
                                        resetContext()
                                    )}> 
                                    {` Faça Login aqui`}
                                </a>
                            </p>                        
                        </div>
                        <button 
                        onClick={() => (
                            validateForm()
                        )}>Cadastrar-se</button>                    
                    </div>
                </form>
            </div>            
            <div className={styles.divImage}>
                <img src={Logo} alt="Logo compasso" />
            </div>
        </main>       
    
    )
}