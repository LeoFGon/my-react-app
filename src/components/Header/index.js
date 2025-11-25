import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {

    const getName = (event) => {
        return event.target.value;
    };

    const handleChange = (event) => {
        const name = getName(event);
        window.dispatchEvent(new CustomEvent("searchChange", { detail: name }));
    };

    return (
        <header className={styles.header}>
            <div className={styles.esquerda}>
                <img src="/images/logo.gif" alt="ReactFlix logo" className={styles.logo} />
                <span className={styles.titulo}>ReactFlix</span>
            </div>

            <nav className={styles.nav}>
                <input
                    type="search"
                    aria-label="Buscar Categorias"
                    placeholder="Pesquisar..."
                    className={styles.search}
                    onChange={handleChange}
                />

                <Link to="/">Home</Link>
                <Link to="/assistir">Assistir</Link>
                <Link to="/">Sobre</Link>
            </nav>
        </header>
    );
}

export default Header;
