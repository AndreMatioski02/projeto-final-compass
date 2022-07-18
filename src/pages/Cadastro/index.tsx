import styles from './Cadastro.module.scss';
import Image from '../../components/Cadastro/Image';
import FormCadastro from '../../components/Cadastro/FormCadastro';

export default function Cadastro() {
    return (                                 
        <main className={styles.mainCadastro}>
            <FormCadastro />
            <Image />
        </main>       
    
    )
}