import React, { useEffect, useState } from "react";
import videos from "../Videos/videos.json";
import styles from "./Autoplay.module.css";

function Autoplay() {
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        const allVideos = [
            ...videos.terror,
            ...videos.comedia,
            ...videos.animacao
        ];

        const randomIndex = Math.floor(Math.random() * allVideos.length);
        setVideoId(allVideos[randomIndex].id);
    }, []);

    if (!videoId) return <p>Carregando vídeo...</p>;

    return (
        <div className={styles.wrapper}>
            <iframe
                className={styles.frame}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Autoplay;
