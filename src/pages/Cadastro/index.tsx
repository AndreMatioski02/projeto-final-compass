import styles from './Cadastro.module.scss';
import Logo from 'assets/images/login-logo-compasso.svg'
import notChecked from 'assets/notCheckedIcon.png'
import checked from 'assets/checkedIcon.png'
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
            minCharacters,
            lowerCase,
            upperCase,
            number
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
                        <h1>Ol??,</h1>
                        <h2>Para continuar navegando de forma segura, efetue o cadastro na rede.</h2>
                    </div>
                    <div className={styles.formDiv}>
                        <p>Cadastro</p>
                        <InputSignUpEmail />
                        <InputSignUpPassword />                    
                        <div className={styles.passwordChecks}>
                            <div className={styles.checksDiv}>
                                <img src={notChecked} className={classNames({
                                    [styles.iconNotChecked]: true,
                                    [styles.iconNotChecked__active]: minCharacters
                                    })}>                            
                                </img>
                                <img src={checked} className={classNames({
                                    [styles.iconChecked]: true,
                                    [styles.iconChecked__active]: minCharacters
                                    })}>                            
                                </img>
                                <p className={classNames({
                                    [styles.checked]: true,
                                    [styles.checked__active]: minCharacters
                                    })}
                                >M??nimo de 6 d??gitos</p>
                            </div>

                            <div className={styles.checksDiv}>
                                <img src={notChecked} className={classNames({
                                    [styles.iconNotChecked]: true,
                                    [styles.iconNotChecked__active]: upperCase
                                    })}>                            
                                </img>
                                <img src={checked} className={classNames({
                                    [styles.iconChecked]: true,
                                    [styles.iconChecked__active]: upperCase
                                    })}>                            
                                </img>
                                <p className={classNames({
                                    [styles.checked]: true,
                                    [styles.checked__active]: upperCase
                                    })}
                                >Letra mai??scula</p>
                            </div>
                            
                            <div className={styles.checksDiv}>
                                <img src={notChecked} className={classNames({
                                    [styles.iconNotChecked]: true,
                                    [styles.iconNotChecked__active]: lowerCase
                                    })}>                            
                                </img>
                                <img src={checked} className={classNames({
                                    [styles.iconChecked]: true,
                                    [styles.iconChecked__active]: lowerCase
                                    })}>                            
                                </img>
                                <p className={classNames({
                                    [styles.checked]: true,
                                    [styles.checked__active]: lowerCase
                                    })}
                                >Letra min??scula</p>
                            </div>

                            <div className={styles.checksDiv}>                                    
                                <img src={notChecked} className={classNames({
                                    [styles.iconNotChecked]: true,
                                    [styles.iconNotChecked__active]: number
                                    })}>                            
                                </img>
                                <img src={checked} className={classNames({
                                    [styles.iconChecked]: true,
                                    [styles.iconChecked__active]: number
                                    })}>                            
                                </img>
                                <p className={classNames({
                                    [styles.checked]: true,
                                    [styles.checked__active]: number
                                    })}
                                >N??mero</p>
                            </div>
                        </div>

                        <div className={classNames({
			    			[styles.errorContainer]: true,
			    			[styles.errorContainer__active]: errorActive
			    		})}>
			    			<p>Ops, usu??rio ou senha inv??lidos.</p>
			    			<p>Tente novamente!</p>
			    		</div>
                        <button 
                            onClick={() => (
                            validateForm()
                        )}>Cadastrar-se
                        </button> 
                        <div className={styles.signUpDiv}>
                            <p className={styles.signUpText}>
                                J?? possui cadastro? 
                                <a 
                                    onClick={() => (
                                        navigate("/login", {replace: true}),
                                        resetContext()
                                    )}> 
                                    {` Fa??a Login aqui`}
                                </a>
                            </p>                        
                        </div>                   
                    </div>
                </form>
            </div>            
            <div className={styles.divImage}>
                <img src={Logo} alt="Logo compasso" />
            </div>
        </main>       
    
    )
}