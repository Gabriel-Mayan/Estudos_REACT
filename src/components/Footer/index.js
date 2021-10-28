import './style.css';

import Previc from '../../assets/selo_previc.png';
import Abrapp from '../../assets/selo_abrapp.png';
import Autoregulacao from '../../assets/selo_autoregulação.png';
import ConselhoFis from '../../assets/selo_conselho_fiscal.png';
import ConselhoDel from '../../assets/selo_conselho_deliberativo.png';
import IWhatsapp from '../../assets/icon_whatsapp.png';
import IFacebook from '../../assets/icon_facebook.png';
import IInstagram from '../../assets/icon_instagram.png';

export default function Footer() {

	const selos = [
		{ image: Abrapp, link: 'https://www.abrapp.org.br/', tipo: 'pareceiros' },
		{ image: Previc, link: 'https://www.gov.br/economia/pt-br/orgaos/entidades-vinculadas/autarquias/previc', tipo: 'pareceiros' },
		{ image: Autoregulacao, link: '/', tipo: 'selo-ecos' },
		{ image: ConselhoFis, link: '/', tipo: 'selo-ecos' },
		{ image: ConselhoDel, link: '/', tipo: 'selo-ecos' },
		{ image: IWhatsapp, link: '/', tipo: 'social-icon' },
		{ image: IFacebook, link: '/', tipo: 'social-icon' },
		{ image: IInstagram, link: '/', tipo: 'social-icon' },
	]

	return (
		<div className='footer'>

			<div className='social-media'>
				<h3>Faça contato com a gente através de nossas redes sociais:</h3>
				<div className='icon'>
					{selos.map(selo => (selo.tipo === 'social-icon' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} /></a> : ''))}
				</div>
			</div>

			<div className='selos'>
				<div>
					{selos.map(selo => (selo.tipo === 'pareceiros' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} /></a> : ''))}
				</div>
				<div>
					{selos.map(selo => (selo.tipo === 'selo-ecos' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} /></a> : ''))}
				</div>
			</div>

			<div className='contatos'>
				<ol>
					<p>	Telefone: (071) 3082-2600	</p>
					<p>	Whatsapp:  (71) 9 8165-6043</p>
					<p>	E-mail: ecos@fundacaoecos.org.br</p>
					<p>	Endereço: R. Torquato Bahia, 03 – Edif. Quirino J. Gomes, 2º Andar – Comércio	</p>
				</ol>
			</div>
			<div className='copyright'>
				<p>Todos os Direitos. Fundação de Seguridade Social do Banco Econômico S/A – ECOS</p>
			</div>
		</div>
	)
}