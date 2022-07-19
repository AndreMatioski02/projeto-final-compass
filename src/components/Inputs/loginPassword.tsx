import classNames from 'classnames';
import passwordIcon from 'assets/images/password-icon.svg';
import { UserLoginContext } from 'context/UserLogin';
import { useContext, useState } from 'react';
import styles from './Input.module.scss';

export default function InputLoginPassword() {
    const { password, setPassword } = useContext(UserLoginContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

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
                    [styles.formInput]: true,
                    [styles["passFormInput--active"]]: inputActive
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