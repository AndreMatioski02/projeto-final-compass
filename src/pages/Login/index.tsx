import styles from './Login.module.scss'
import Image from '../../components/Login/Image'
import Form from '../../components/Login/Form'

export default function Login() {
    return (   
        <>        
            <body className={styles.bodyLogin}>                
                <main className={styles.mainLogin}>
                    <Form />
                    <Image />
                </main>
            </body> 
        </>
    
    )
}