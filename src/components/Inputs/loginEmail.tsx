import classNames from 'classnames';
import userIcon from 'assets/images/user-icon.svg'
import { UserLoginContext } from 'context/UserLogin';
import { useContext, useEffect, useState } from 'react';
import styles from './Input.module.scss';

export default function InputLoginEmail() {
    const { email, 
            setEmail, 
            setEmailCorrect, 
            errorActive
        } = useContext(UserLoginContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false); 

    const regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    useEffect(() => {
        regex.test(email.toLowerCase()) ? setEmailCorrect(true) : setEmailCorrect(false);
    }, [email, setEmailCorrect]);   

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
                    [styles["userFormInput--active"]]: inputActive,
                    [styles["input--wrong"]]: errorActive
                })}
                type="text" placeholder="Usuário"
                onFocus={(event) => moveIcon(event.target)}
                onBlur={(event) => returnIcon(event.target)}
                value={ email }
                onChange={(event) => (setEmail(event.target.value))}
            />
            <img 
                src={userIcon} alt="User Icon"
                className={classNames({
                    [styles.userIcon]: true,
                    [styles.inactiveIcon]: iconInactive
                })} 
            />
        </div>
    )
}