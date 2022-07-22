import classNames from 'classnames';
import passwordIcon from 'assets/images/password-icon.svg';
import { UserLoginContext } from 'context/UserLogin';
import { useContext, useEffect, useState } from 'react';
import styles from './Input.module.scss';

export default function InputLoginPassword() {
    const { password, setPassword, setPasswordCorrect, passwordCorrect, errorActive, } = useContext(UserLoginContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    useEffect(() => {
        password.length < 6 ? setPasswordCorrect(false) : setPasswordCorrect(true);
    }, [password]);

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
                onBlur={(event) => returnIcon(event.target)}
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