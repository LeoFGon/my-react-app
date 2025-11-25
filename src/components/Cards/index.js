import React from "react";
import PropTypes from "prop-types";
import styles from "./Cards.module.css";
import listaVideos from '../Videos/videos.json';

function formatDate(iso) {
	if (!iso) return "";
	try {
		return new Date(iso).toLocaleDateString("pt-BR");
	} catch {
		return iso;
	}
}

const Cards = ({ items = listaVideos }) => {
	if (!Array.isArray(items) || items.length === 0) {
		return <div style={{ padding: 16 }}>Nenhum vídeo encontrado</div>;
	}

	return (
		<div className={styles.grid}>
			{items.map((item, idx) => {
				const videoId = item?.id?.videoId ?? item?.id;
				const snippet = item?.snippet ?? {};
				const thumb =
					snippet.thumbnails?.medium?.url ||
					snippet.thumbnails?.high?.url ||
					snippet.thumbnails?.default?.url ||
					"";

				const key = videoId || item?.etag || idx;

				return (
					<a
						key={key}
						href={`https://www.youtube.com/watch?v=${videoId}`}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.cardLink}
					>
						<div className={styles.card}>
							<div
								className={styles.thumb}
								style={{ backgroundImage: `url(${thumb})` }}
							/>
							<div className={styles.body}>
								<h3 className={styles.title}>{snippet.title}</h3>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};

Cards.propTypes = {
	items: PropTypes.array,
};

export default Cards;
