import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.esquerda}>
                <img src="/images/logo.gif" alt="ReactFlix logo" className={styles.logo} />
                <span className={styles.titulo}>ReactFlix</span>
            </div>
            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;