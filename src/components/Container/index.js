import { useEffect, useState } from "react";
import styles from './Container.module.css';
import Cards from '../Cards';
import videos from '../Videos/videos.json';

function Container() {
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handler = (event) => {
            setSearch(event.detail.toLowerCase());
        };

        window.addEventListener("searchChange", handler);

        return () => window.removeEventListener("searchChange", handler);
    }, []);

    const categorias = {
        Terror: videos.terror,
        Comédia: videos.comedia,
        Animação: videos.animacao,
    };
    
    const filtradas = Object.entries(categorias).filter(([categoria]) =>
        categoria.toLowerCase().includes(search)
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.texto}>TRAILERS</h1>

            {filtradas.length === 0 && <p>Nenhuma categoria encontrada.</p>}

            {filtradas.map(([categoria, lista]) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <Cards videos={lista} />
                </div>
            ))}
        </div>
    );
}

export default Container;
