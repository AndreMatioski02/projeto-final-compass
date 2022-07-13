import styles from './Home.module.scss'
import Header from "components/Home/Header";
import Image from "components/Home/Image"
import Texts from "components/Home/Texts";
import Footer from "components/Home/Footer";

export default function Home() {
    return (
        <>        
            <body className={styles.bodyHome}>
                <main className={styles.mainHome}>
                    <Header />
                    <Image />
                    <Texts />
                    <Footer />
                </main>
            </body>
        </>
    )
}