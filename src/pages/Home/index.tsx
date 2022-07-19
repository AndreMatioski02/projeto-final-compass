import styles from './Home.module.scss'
import Header from "components/Header";
import Footer from "components/Footer";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'data/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {    
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
    
    useEffect(() => {
		if(loading) return;
		if(!user) {
			navigate("/");
		}
    }, [user, loading]);

    return (
        <main className={styles.mainHome}>
            <Header />
            <div className={styles.homeContent}>                
                <div className={styles.divImage}></div>
                <div className={styles.texts}>
                    <p className={styles.englishFirst}>Our mission is</p>
                    <p className={styles.portugues}>Nossa missão é</p>
                    <p className={styles.english}>to transform the world</p>
                    <p className={styles.portugues}>transformar o mundo</p>
                    <p className={styles.english}>building digital experiences</p>
                    <p className={styles.portugues}>construindo experiências digitais</p>
                    <p className={styles.english}>that enable our client's growth</p>
                    <p className={styles.portugues}>que permitam o crescimento dos nossos clientes</p>
                </div>
            </div>
            <Footer />
        </main>
    )  
}