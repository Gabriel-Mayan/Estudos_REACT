import './style.css';

import Evento from '../../assets/institutional_event.svg';
import Calendario from '../../assets/institutional_date.svg';
import Aniversariantes from '../../assets/institutional_birthday.svg';
import Revista from '../../assets/institutional_book.svg';
import Atendimento from '../../assets/institutional_letter.svg';
import Conduta from '../../assets/institutional_megaphone.svg';

export default function Institutional() {

	const institucional = [
		{ type: 'Eventos', alt: 'Eventos', img: Evento, link: '/eventos' },
		{ type: 'Calendario', alt: 'Calendario', img: Calendario, link: '/calendario' },
		{ type: 'Aniversariantes', alt: 'Aniversariantes', img: Aniversariantes, link: '/aniversariantes' },
		{ type: 'Revista Tempo Ecos', alt: 'Revista Tempo Ecos', img: Revista, link: '/revista_tempo' },
		{ type: 'Canais de Atendimento', alt: 'Canais de Atendimento', img: Atendimento, link: '/atendimento' },
		{ type: 'Canal de Ética e Conduta', alt: 'Canal de Ética e Conduta', img: Conduta, link: '/etica_conduta' },
	]

	return (
		<div className='institucional'>
			<p className='chamada'>Institucional</p>
			{institucional.map(inst => (
				<a href={inst.link} key={`Inst_${institucional.indexOf(inst)}`}>
					<div className='sessao' >
						<img className='image-inst' src={inst.img} alt={inst.alt} />
						<p className='text-inst'> {inst.type}</p>
					</div>
				</a>
			))}
		</div>
	)
}