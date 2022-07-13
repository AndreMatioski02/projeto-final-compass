import styles from './Form.module.scss'
import userIcon from 'assets/images/user-icon.svg'
import passwordIcon from 'assets/images/password-icon.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export default function Form() {
    const navigate = useNavigate();
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
                            type="text" placeholder="Usuário"
                        />
                        <img src={userIcon} alt="User Icon"/>
                    </div>
                    <div className={styles.passwordDiv}>
                        <input type="password" placeholder="Senha"/>
                        <img src={passwordIcon} alt="Password Icon"/>
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