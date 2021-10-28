import './style.css';

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

	return (
		<div className='header'>
			<img className='header_logo' src={Logo} />
			<h1 className='header_text'>O Futuro Sempre Presente!</h1>
			<div className='header_list'>
				{itens.map(item => (<p className='header_list-item'> {item.title}</p>))}
			</div>
			<a className='header_btn' href="/login">Área do Participante</a>
		</div>
	);
}

export default Header;