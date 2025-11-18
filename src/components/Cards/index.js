import React from "react";
import PropTypes from "prop-types";
import styles from './Cards.module.css';

function formatDate(iso) {
	if (!iso) return "";
	try {
		return new Date(iso).toLocaleDateString();
	} catch {
		return iso;
	}
}

const listaVideos = [
	{
		kind: "youtube#searchResult",
		etag: "etag_real_01",
		id: { kind: "youtube#video", videoId: "18md1nwaca4" },
		snippet: {
			publishedAt: "2024-05-10T14:00:00Z",
			channelId: "UC_canal_receitaria",
			title: "21 receitas rápidas para uma noite deliciosa",
			description:
				"21 receitas muito rápidas de preparar. Poucas pessoas ainda têm o desejo e a força para cozinhar quando chegam em casa à noite...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/18md1nwaca4/default.jpg" } },
			channelTitle: "A Receitaria",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_02",
		id: { kind: "youtube#video", videoId: "yOHNH_k2n7A" },
		snippet: {
			publishedAt: "2023-11-20T18:00:00Z",
			channelId: "UC_canal_meajudagi",
			title: "10 CANAIS DE CULINÁRIA QUE VOCÊ PRECISA CONHECER! - Me Ajuda Gi #37",
			description:
				"...o primeiro é o canal da Cris que provavelmente você já conhece porque o bolo de chocolate da Cris é muito. famoso.",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/yOHNH_k2n7A/default.jpg" } },
			channelTitle: "Me Ajuda Gi",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_03",
		id: { kind: "youtube#video", videoId: "ZEDHkZ9TY6k" },
		snippet: {
			publishedAt: "2023-01-15T12:00:00Z",
			channelId: "UC_canal_record",
			title: "Culinária fácil: aprenda a preparar pratos básicos da cozinha brasileira",
			description:
				"...arroz com feijão bife ovo frito comida básica boa e barata que todo mundo deveria saber preparar mas não sabe...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/ZEDHkZ9TY6k/default.jpg" } },
			channelTitle: "Domingo Espetacular",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_04",
		id: { kind: "youtube#video", videoId: "mz1sEhTX2SE" },
		snippet: {
			publishedAt: "2024-02-02T19:00:00Z",
			channelId: "UC_canal_viajante",
			title: "The Typical Dish of Each Brazilian State",
			description:
				"alagoano para quem não sabe o sururu é um marisco de água doce que vive. no fundo das lagoas ele é preparado dentro da...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/mz1sEhTX2SE/default.jpg" } },
			channelTitle: "Viajante Culinário",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_05",
		id: { kind: "youtube#video", videoId: "7An1INQ49mI" },
		snippet: {
			publishedAt: "2024-08-30T15:00:00Z",
			channelId: "UC_canal_aventura",
			title: "EM BUSCA DA MELHOR COMIDA DO BRASIL! Ep.01 (Bahia)",
			description:
				"...vinagrete. bastante pimenta de cheiro leite de coco. peixe até banana da terra vem aqui dentro bastante. coentro...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/7An1INQ49mI/default.jpg" } },
			channelTitle: "Aventura Gastronômica",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_06",
		id: { kind: "youtube#video", videoId: "oYGXsBYrWkE" },
		snippet: {
			publishedAt: "2024-11-13T10:00:00Z",
			channelId: "UC_canal_risada",
			title: "38 VÍDEOS DE ANIMAIS ENGRACADOS PARA VOCÊ RIR - Não PODE RIR",
			description:
				"oxe ele tava cansado. velho tava tirou uma risada genuína de mim nossa esse aqui é cruel velho vamos. ver. o quê o cero usou a tartaruga...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/oYGXsBYrWkE/default.jpg" } },
			channelTitle: "Risada Animal",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_07",
		id: { kind: "youtube#video", videoId: "WwEc-V6SebA" },
		snippet: {
			publishedAt: "2023-04-24T11:00:00Z",
			channelId: "UC_canal_binhoemel",
			title: "Cães e gatos engraçados - Binho e Mel #73",
			description:
				"ei limpando a bunda no chão da mamãe ah não gostou vou fazer de novo ué ué ué ué vem vem me pegar ah que doguinho mal educado...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/WwEc-V6SebA/default.jpg" } },
			channelTitle: "Binho e Mel",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_08",
		id: { kind: "youtube#video", videoId: "AyiobvQMOaE" },
		snippet: {
			publishedAt: "2015-04-06T08:00:00Z",
			channelId: "UC_canal_funnypets",
			title: "Animais de estimação engraçado e bonito que faz o divertimento - Gatos bonitos e cães Compilation",
			description:
				"Animais de estimação engraçado e bonito que faz o divertimento - Gatos bonitos e cães Compilation. 16M views · 10 years ago...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/AyiobvQMOaE/default.jpg" } },
			channelTitle: "Funny Cats Universe",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_09",
		id: { kind: "youtube#video", videoId: "SU4Gcpd_tYg" },
		snippet: {
			publishedAt: "2024-02-02T12:00:00Z",
			channelId: "UC_canal_parodia",
			title: "40 MINUTOS DOS VIDEOS ENGRAÇADOS DE ANIMAIS - TENTE NÃO RIR (COMPILADO) PARÓDIA",
			description:
				"criu. hei peixinho vem cá rapidinho venha cá venha brincar comigo vamos brincar de comidinha eu quero comer vem cá seu...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/SU4Gcpd_tYg/default.jpg" } },
			channelTitle: "Paródias Animais",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_10",
		id: { kind: "youtube#video", videoId: "K8dLe33jLzA" },
		snippet: {
			publishedAt: "2022-12-30T13:00:00Z",
			channelId: "UC_canal_pets",
			title: "Funny Dogs And Cats Videos 2024",
			description:
				"mexendo com você tome sua vaca. socorro você é o amor da minha vida eu nunca vou te. deixar. turma me leva gorda turma...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/K8dLe33jLzA/default.jpg" } },
			channelTitle: "Funny Pets TV",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_11",
		id: { kind: "youtube#video", videoId: "wt0nHpyDV40" },
		snippet: {
			publishedAt: "2025-02-19T17:00:00Z",
			channelId: "UC_canal_techreview",
			title: "Melhor Tech do Ano. (NA MINHA OPINIÃO!)",
			description:
				"como essa neve que chegou atrasada em fevereiro em Vancouver esse daqui é o meu vídeo sobre o meu tech. favorito de 2024...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/wt0nHpyDV40/default.jpg" } },
			channelTitle: "Tech Reviewer",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_12",
		id: { kind: "youtube#video", videoId: "m8thcQs3bQg" },
		snippet: {
			publishedAt: "2024-12-26T14:00:00Z",
			channelId: "UC_canal_tecnocast",
			title: "O melhor e o pior da tecnologia em 2024",
			description:
				"acontecimentos da tecnologia esse ano então no episódio de hoje a gente traz o melhor e o pior da tecnologia. em 2024...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/m8thcQs3bQg/default.jpg" } },
			channelTitle: "Tecnocast",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_13",
		id: { kind: "youtube#video", videoId: "WUVD-D11bAM" },
		snippet: {
			publishedAt: "2023-12-11T16:00:00Z",
			channelId: "UC_canal_futuro",
			title: "10 TENDÊNCIAS TECNOLÓGICAS PARA 2024",
			description:
				"chat GPT carros autônomos imagens feitas por inteligência. artificial foram tantas tecnologias e inovações ao longo de. 2023.",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/WUVD-D11bAM/default.jpg" } },
			channelTitle: "Futuro Tech",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_14",
		id: { kind: "youtube#video", videoId: "lYrMSOE08m0" },
		snippet: {
			publishedAt: "2024-12-21T18:00:00Z",
			channelId: "UC_canal_technerd",
			title: "MY FAVORITES of 2024! (Tech Nerd Awards)",
			description: "smartphone awards já que vocês viram que esse ano eu passei um bom tempo com canal meio. desativado...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/lYrMSOE08m0/default.jpg" } },
			channelTitle: "Tech Nerd",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_real_15",
		id: { kind: "youtube#video", videoId: "3AaTEBJCVvA" },
		snippet: {
			publishedAt: "2024-11-25T19:00:00Z",
			channelId: "UC_canal_tecmundo",
			title: "Melhores do Ano 2024: confira melhor celular, TV e mais vencedores",
			description:
				"vencedores do nosso pré melhores do ano do tecudo. E é claro que a primeira categoria tinha que ser Inteligência Artificial...",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/3AaTEBJCVvA/default.jpg" } },
			channelTitle: "TecMundo",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_fake_16",
		id: { kind: "youtube#video", videoId: "XqZsoesa55w" },
		snippet: {
			publishedAt: "2016-06-17T14:00:00Z",
			channelId: "UC_canal_pinkfong",
			title: "Baby Shark Dance",
			description: "O vídeo de dança infantil mais visto de todos os tempos, com uma melodia cativante e coreografia simples.",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/XqZsoesa55w/default.jpg" } },
			channelTitle: "Pinkfong",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_fake_17",
		id: { kind: "youtube#video", videoId: "kJQP7kiw5Fk" },
		snippet: {
			publishedAt: "2017-01-13T12:00:00Z",
			channelId: "UC_canal_luisfonsi",
			title: "Despacito - Luis Fonsi ft. Daddy Yankee",
			description: "O hit global de reggaeton que quebrou recordes de visualizações em 2017, filmado em Porto Rico.",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg" } },
			channelTitle: "LuisFonsiVEVO",
		},
	},
	{
		kind: "youtube#searchResult",
		etag: "etag_fake_18",
		id: { kind: "youtube#video", videoId: "RgKAFK5djSk" },
		snippet: {
			publishedAt: "2015-04-07T10:00:00Z",
			channelId: "UC_canal_wizkhalifa",
			title: "See You Again - Wiz Khalifa ft. Charlie Puth",
			description: "A emocionante homenagem a Paul Walker da trilha sonora de Velozes e Furiosos 7.",
			thumbnails: { default: { url: "https://i.ytimg.com/vi/RgKAFK5djSk/default.jpg" } },
			channelTitle: "Wiz Khalifa",
		},
	},
];

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

				const key = videoId || item?.etag || item?.id || idx;

				return (
					<a
						key={key}
						href={videoId ? `https://www.youtube.com/watch?v=${videoId}` : "#"}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.cardLink}
					>
						<div className={styles.card}>
							<div
								className={styles.thumb}
								style={{ backgroundImage: `url(${thumb})` }}
								aria-hidden="true"
							/>
							<div className={styles.body}>
								<h3 className={styles.title}>{snippet.title || "Untitled"}</h3>
								<div className={styles.meta}>
									{snippet.channelTitle || "Unknown channel"} • {formatDate(snippet.publishedAt)}
								</div>
								<p className={styles.description}>{snippet.description || ""}</p>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}

Cards.propTypes = {
	items: PropTypes.array,
};

export default Cards;