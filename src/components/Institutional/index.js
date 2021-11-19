import './style.css';
import { Link } from 'react-router-dom';

import Evento from '../../assets/institutional_event.svg';
import Revista from '../../assets/institutional_book.svg';
import Calendario from '../../assets/institutional_date.svg';
import Conduta from '../../assets/institutional_megaphone.svg';
import Atendimento from '../../assets/institutional_letter.svg';
import Aniversariantes from '../../assets/institutional_birthday.svg';

export default function Institutional() {

	const institucional = [
		{ type: 'Eventos', alt: 'Eventos', img: Evento, link: '/institucional/eventos' },
		{ type: 'Calendario', alt: 'Calendario', img: Calendario, link: '/institucional/calendario' },
		{ type: 'Aniversariantes', alt: 'Aniversariantes', img: Aniversariantes, link: '/institucional/aniversariantes' },
		{ type: 'Revista Tempo Ecos', alt: 'Revista Tempo Ecos', img: Revista, link: '/institucional/revistatempo' },
		{ type: 'Canais de Atendimento', alt: 'Canais de Atendimento', img: Atendimento, link: '/institucional/canaisdeatendimento' },
		{ type: 'Canal de Ética e Conduta', alt: 'Canal de Ética e Conduta', img: Conduta, link: '/institucional/eticaecondulta' },
	]

	return (
		<div className='institucional'>
			<p className='chamada'>Institucional</p>
			{institucional.map(inst => (
				<Link className='sessao' to={inst.link} key={`Inst_${institucional.indexOf(inst)}`}>
					<img className='image-inst' src={inst.img} alt={inst.alt} />
					<p className='text-inst'> {inst.type}</p>
				</Link>
			))}
		</div>
	)
}