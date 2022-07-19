import classNames from 'classnames';
import userIcon from 'assets/images/user-icon.svg'
import { UserSignUpContext } from 'context/UserSignUp';
import { useContext, useState } from 'react';
import styles from './Input.module.scss';

export default function InputSignUpEmail() {
    const { email, setEmail } = useContext(UserSignUpContext);
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
                    [styles["userFormInput--active"]]: inputActive
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