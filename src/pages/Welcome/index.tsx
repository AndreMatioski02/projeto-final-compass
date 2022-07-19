import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from 'assets/images/login-logo-compasso.svg';
import styles from './Welcome.module.scss';

export default function WelcomePage() {
    const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname == "/" && navigate("/login");
	});
    return (
        <div className={styles.mainDiv}>
            <Outlet />
        </div>
    )
}