import './style.css';

import Luto from '../../assets/news_luto.jpg';
import Geral from '../../assets/news_geral.jpg';
import Financas from '../../assets/news_finaças.jpg';
import Previdencia from '../../assets/news_previdencia.jpg';

export default function News() {
	const noticias = [
		{ title: 'Queda do Dolar', link: '/', type: 'Financas', news: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' },
		{ title: 'Novo evento x', link: '/', type: 'Geral', news: 'Nova evento, o plano x, será' },
		{ title: 'Nova modalidade de previdencia', link: '/', type: 'Previdencia', news: 'Nova modalidade, o plano x' },
		{ title: 'Nota de Falecimento: Aposentado X', link: '/', type: 'Luto', news: 'O aposentado x faleceu ontem...' }
	];

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
			<h4 className='chamada'>Notícias</h4>
			{noticias.map(noticia => (
				<div className='noticia'>
					<img className='image-news' src={gerarImagem(noticia.type)} />
					<p className='title-news'> {noticia.title}</p>
					<p className='text-news'> {editarNoticia(noticia.news)}</p>
					<a href={noticia.link} className='read-more'>Leia Mais</a>
				</div>
			))}
			<h5 className='more-news'>Mais Notícias</h5>
		</div>
	)
}