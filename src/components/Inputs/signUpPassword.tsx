import classNames from 'classnames';
import passwordIcon from 'assets/images/password-icon.svg';
import { UserSignUpContext } from 'context/UserSignUp';
import { useContext, useEffect, useState } from 'react';
import styles from './Input.module.scss';

export default function InputSignUpPassword() {
    const { password, 
            setPassword,
            passwordCorrect,
            setPasswordCorrect,
            minCharacters,
            setMinCharacters,      
            lowerCase,       
            setLowerCase,      
            upperCase,       
            setUpperCase,
            number,
            setNumber,
            errorActive,
        } = useContext(UserSignUpContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);
    const validations = [minCharacters, upperCase, lowerCase, number];
    
    const RegExUpperCase = /[A-Z]/;
    const RegExLowerCase = /[a-z]/;
    const RegExNumber = /[0-9]/;

    useEffect(() => {
        password.length < 6 ? setMinCharacters(false) : setMinCharacters(true);
        RegExUpperCase.test(password) ? setUpperCase(true) : setUpperCase(false);
        RegExLowerCase.test(password) ? setLowerCase(true) : setLowerCase(false);
        RegExNumber.test(password) ? setNumber(true) : setNumber(false);
    }, [password])

    function validatePassword() {
        validations.every(allTrue) ? setPasswordCorrect(true) : setPasswordCorrect(false);    
    }

    function allTrue(validation: boolean) {
        return validation == true;    
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
        <div className={styles.inputDiv}>
            <input 
                className={classNames({
                    [styles["passFormInput--active"]]: inputActive,
                    [styles["input--wrong"]]: errorActive
                })}
                type="password" placeholder="Senha"
                onFocus={(event) => moveIcon(event.target)}
                onBlur={(event) => (returnIcon(event.target), validatePassword())}
                value={ password }
                onChange={(event) => (setPassword(event.target.value))}
            />
            <img 
            src={passwordIcon} alt="Password Icon"
            className={classNames({
                [styles.userIcon]: true,
                [styles.inactiveIcon]: iconInactive
            })} 
            />
        </div>
    )
}