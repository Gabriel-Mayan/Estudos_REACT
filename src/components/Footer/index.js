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
		{ image: Abrapp, alt: 'Pareceiro Abrapp', link: 'https://www.abrapp.org.br/', tipo: 'pareceiros' },
		{ image: Previc, alt: 'Pareceiro Previc', link: 'https://www.gov.br/economia/pt-br/orgaos/entidades-vinculadas/autarquias/previc', tipo: 'pareceiros' },
		{ image: Autoregulacao, alt: 'Selo Autoregulação', link: '/', tipo: 'selo-ecos' },
		{ image: ConselhoFis, alt: 'Selo Conselho Fiscal', link: '/', tipo: 'selo-ecos' },
		{ image: ConselhoDel, alt: 'Selo Conselho Deliberativo', link: '/', tipo: 'selo-ecos' },
		{ image: IWhatsapp, alt: 'Whatsapp Ecos', link: 'https://api.whatsapp.com/send?phone=557181056741&text=Ecos', tipo: 'social-icon' },
		{ image: IFacebook, alt: 'Facebook Ecos', link: 'https://web.facebook.com/Funda%C3%A7%C3%A3o-ECOS-683434135123846', tipo: 'social-icon' },
		{ image: IInstagram, alt: 'Instagram Ecos', link: 'https://www.instagram.com/fundacaoecos/', tipo: 'social-icon' },
	]

	return (
		<div className='footer'>

			<div className='social-media'>
				<session>
					<h3>Faça contato com a gente através de nossas redes sociais:</h3>
				</session>
				<div className='icon'>
					{selos.map(selo => (selo.tipo === 'social-icon' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} alt={selo.alt} /></a> : ''))}
				</div>
			</div>

			<div className='selos'>
				<div>
					{selos.map(selo => (selo.tipo === 'pareceiros' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} alt={selo.alt} /></a> : ''))}
				</div>
				<div>
					{selos.map(selo => (selo.tipo === 'selo-ecos' ? <a href={selo.link} ><img className={selo.tipo} src={selo.image} alt={selo.alt} /></a> : ''))}
				</div>
			</div>

			<div className='contatos'>
				<ul>
					<li>	Telefone: (071) 3082-2600	</li>
					<li>	Whatsapp:  (71) 9 8165-6043</li>
					<li>	E-mail: ecos@fundacaoecos.org.br</li>
					<li>	Endereço: R. Torquato Bahia, 03 – Edif. Quirino J. Gomes, 2º Andar – Comércio	</li>
				</ul>
			</div>
			<div className='copyright'>
				<p>Todos os Direitos. Fundação de Seguridade Social do Banco Econômico S/A – ECOS</p>
			</div>
		</div>
	)
}