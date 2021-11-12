import './style.css';
import Luto from '../../assets/news_luto.svg';
import Geral from '../../assets/news_geral.svg';
import Financas from '../../assets/news_financas.svg';
import Previdencia from '../../assets/news_previdencia.svg';

import Noticias from '../../data/news_noticias.json';

export default function News() {

	const gerarImagem = (type) => {
		switch (type) {
			case 'Luto':
				return Luto;
			case 'Geral':
				return Geral;
			case 'Previdencia':
				return Previdencia;
			case 'Financas':
				return Financas;
			default:
				return false;
		}
	}

	const gerarDescricao = (type) => {
		switch (type) {
			case 'Luto':
				return 'Noticia de Falecimento';
			case 'Geral':
				return 'Noticias Gerais';
			case 'Previdencia':
				return 'Noticias Previdencias';
			case 'Financas':
				return 'Noticias Financeiras';
			default:
				return false;
		}
	}

	const editarNoticia = (noticia) => {
		if (noticia.length > 400) {
			noticia = noticia.slice(0, 400);
			noticia += '...';
		}
		return noticia;
	}

	return (
		<div className='news'>
			<p className='chamada'>Notícias</p>
			{Noticias.map(noticia => (
				<div className='noticia' key={noticia.title}>
					<img className='image-news' src={gerarImagem(noticia.type)} alt={gerarDescricao(noticia.type)} />
					<div className='content-news'>
						<p className='title-news'> {noticia.title}</p>
						<p className='text-news'> {editarNoticia(noticia.news)}</p>
					</div>
					<a href={noticia.link} className='read-more'>Leia Mais</a>
				</div>
			))}
			<p className='more-news'>Mais Notícias</p>
		</div>
	)
}