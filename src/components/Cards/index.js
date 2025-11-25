import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ videos }) => {
	if (!Array.isArray(videos) || videos.length === 0) {
		return <div style={{ padding: 16 }}>Nenhum vídeo encontrado</div>;
	}

	return (
		<div className={styles.grid}>
			{videos.map((item) => {
				const videoId = item.id;
				const thumb = item.thumbnail;
				const title = item.title;

				return (
					<a
						href={`https://www.youtube.com/watch?v=${videoId}`}
						className={styles.cardLink}
					>
						<div className={styles.card}>
							<div
								className={styles.thumb}
								style={{ backgroundImage: `url(${thumb})` }}
							/>
							<div className={styles.body}>
								<h3 className={styles.title}>{title}</h3>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default Cards;
