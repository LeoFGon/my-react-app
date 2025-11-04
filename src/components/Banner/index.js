import styles from './Banner.module.css';

function Banner(){
    return (
        // Conteúdo a ser exibido
        // JSX = html + xml (html com css dentro do javascript)
        <div className={styles.banner}>
            <span>BANNER</span>
        </div>
    );
}
export default Banner;