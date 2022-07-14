import styles from './Form.module.scss'
import userIcon from 'assets/images/user-icon.svg'
import passwordIcon from 'assets/images/password-icon.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export default function Form() {
    const navigate = useNavigate();
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);
    const [errorActive, setErrorActive] = useState(false);

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
                navigate('/home')
            }
		});
	}

    function moveIcon(input: HTMLInputElement) {
        setIconInactive(true);
        setInputActive(true);
    }

    function returnIcon(input: HTMLInputElement) {
        setIconInactive(false);
        setInputActive(false);
    }

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
                        <input 
                            className={classNames({
                                [styles.formInput]: true,
                                [styles["userFormInput--active"]]: inputActive
                            })}
                            type="text" placeholder="Usuário"
                            onFocus={(event) => moveIcon(event.target)}
                            onBlur={(event) => returnIcon(event.target)}
                        />
                        <img 
                            src={userIcon} alt="User Icon"
                            className={classNames({
                                [styles.userIcon]: true,
                                [styles.inactiveIcon]: iconInactive
                            })} 
                        />
                    </div>
                    <div className={styles.passwordDiv}>
                        <input 
                            className={classNames({
                                [styles.formInput]: true,
                                [styles["passFormInput--active"]]: inputActive
                            })}
                            type="password" placeholder="Senha"
                            onFocus={(event) => moveIcon(event.target)}
                            onBlur={(event) => returnIcon(event.target)}
                        />
                        <img 
                        src={passwordIcon} alt="Password Icon"
                        className={classNames({
                            [styles.userIcon]: true,
                            [styles.inactiveIcon]: iconInactive
                        })} 
                        />
                    </div>
                
                    <div className={classNames({
						[styles.errorContainer]: true,
						[styles.errorContainer__active]: errorActive
					})}>
						<p>Ops, usuário ou senha inválidos.</p>
						<p>Tente novamente!</p>
					</div>
                    <button onClick={() => validateForm()}>Continuar</button>
                </div>
            </form>
        </div>
    )
}