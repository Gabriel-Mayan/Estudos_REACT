import './style.css';
import { useHistory } from 'react-router';

import Logo from '../../assets/logo_ecos.svg';
import Menu from '../../data/header_menu.json';

function Header() {

	const history = useHistory();

	const redirHome = () => history.push('/');
	const redirLogin = () => history.push('/login');

	return (
		<div className='header'>
			<img className='header_logo' src={Logo} alt='Logo da Ecos' onClick={redirHome} />
			<h1 className='header_text'>O Futuro Sempre Presente!</h1>
			<div className='header_menu'>
				<ul className='menu'>
					{Menu.map(item => (
						<a className='header_list-item' key={item.title} href={item.link}> {item.title}</a>
					))}
				</ul>
			</div>
			<button onClick={redirLogin} className='header_btn'>Área do Participante </button>
		</div>
	);
}

export default Header;