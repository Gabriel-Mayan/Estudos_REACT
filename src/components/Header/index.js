import './style.css';
import { useHistory } from 'react-router';

import Logo from '../../assets/logo_ecos.png'

function Header() {

	const itens = [
		{ title: 'Ecos', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
		{ title: 'Gestão', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
		{ title: 'Previdência', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
		{ title: 'Comunicação', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
		{ title: 'Investimentos', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
		{ title: 'Educação Previdênciária', subitens: ['Missão, Visão, Valores', 'Nossa História', 'Estatuto', 'Governança'] },
	]
	const history = useHistory();

	const redirLogin = () => {
		history.push('/login')
	}

	const redirHome = () => {
		history.push('/')
	}

	return (
		<div className='header'>
			<img className='header_logo' src={Logo} alt='Logo da Ecos' onClick={redirHome} />
			<h1 className='header_text'>O Futuro Sempre Presente!</h1>
			<div className='header_list'>
				{itens.map(item => (<p className='header_list-item' key={item.title}> {item.title}</p>))}
			</div>
			<button onClick={redirLogin} className='header_btn'>Área do Participante </button>
		</div>
	);
}

export default Header;