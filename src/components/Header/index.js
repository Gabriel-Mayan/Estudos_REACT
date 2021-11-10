import './style.css';
import { useHistory } from 'react-router';
import ListaRecursiva from '../../services/GerarListaRecursiva';

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
			{<ListaRecursiva className='header_menu' informacao={Menu} />}
			<button onClick={redirLogin} className='header_btn'>Área do Participante </button>
		</div>
	);
}

export default Header;