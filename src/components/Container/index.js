import styles from './Container.module.css';

function Container({ children }){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do javascript)
        <div className={styles.container}>
            <h1 className={styles.texto}>OS MELHORES VÍDEOS DA SEMANA</h1>
            {children}
        </div>
    );
}

export default Container;