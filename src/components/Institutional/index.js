import './style.css';

import Evento from '../../assets/institutional_event.png';
import Calendario from '../../assets/institutional_date.png';
import Aniversariantes from '../../assets/institutional_birthday.png';
import Revista from '../../assets/institutional_book.png';
import Atendimento from '../../assets/institutional_letter.png';
import Conduta from '../../assets/institutional_megaphone.png';

export default function Institutional() {

	const inst = [
		{ type: 'Eventos', img: Evento, link: '/' },
		{ type: 'Calendario', img: Calendario, link: '/' },
		{ type: 'Aniversariantes', img: Aniversariantes, link: '/' },
		{ type: 'Revista Tempo Ecos', img: Revista, link: '/' },
		{ type: 'Canais de Atendimento', img: Atendimento, link: '/' },
		{ type: 'Canal de Ética e Conduta', img: Conduta, link: '/' },
	]

	return (
		<div className='institucional'>
			<h4 className='chamada'>Institucional</h4>
			{inst.map(inst => (
				<a href={inst.link}>
					<div className='sessao' >
						<img className='image-inst' src={inst.img} />
						<p className='text-inst'> {inst.type}</p>
					</div>
				</a>
			))}
		</div>
	)
}