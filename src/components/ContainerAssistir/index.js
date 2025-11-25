import Autoplay from '../Autoplay';
import styles from './ContainerAssistir.module.css';

function ContainerAssistir({  }){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do javascript)
        <div className={styles.container}>
            <Autoplay />
        </div>
    );
}

export default ContainerAssistir;