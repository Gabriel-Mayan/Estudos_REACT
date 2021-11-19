import './style.css';
import { Link, useHistory } from 'react-router-dom';
import Lista from '../../services/GerarListaRecursiva';

import Logo from '../../assets/logo_ecos.svg';
import Menu from '../../data/header_menu.json';

function Header() {

	const history = useHistory();

	const redirHome = () => history.push('/homepage');

	return (
		<div className='header'>
			<img className='header_logo' src={Logo} alt='Logo da Ecos' onClick={redirHome} />
			<h1 className='header_text'>O Futuro Sempre Presente!</h1>
			{<Lista className='header_menu' informacao={Menu} />}
			<Link to='/user/login' className='header_btn'> Área do Participante </Link>
		</div>
	);
}

export default Header;