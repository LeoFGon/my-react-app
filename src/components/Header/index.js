import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.esquerda}>
                <img src="/images/logo.gif" alt="ReactFlix logo" className={styles.logo} />
                <span className={styles.titulo}>ReactFlix</span>
            </div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/assistir">Assistir</Link>
            </nav>
        </header>
    );
}

export default Header;