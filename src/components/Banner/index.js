import './style.css';
import { useHistory } from 'react-router';
import Next from '../../assets/icon_next.svg';
import Back from '../../assets/icon_back.svg';
import Circle from '../../assets/icon_circle.svg';

export default function Banner() {

	const history = useHistory();

	const banners = [
		{ id: '01', imgLink: 'https://fundacaoecos.org.br/wp-content/uploads/2021/07/OSID-COM-LINK.jpg', refLink: 'https://www.youtube.com/watch?v=um1Tv7dMCDw' },
		{ id: '02', imgLink: 'https://fundacaoecos.org.br/wp-content/uploads/2021/10/OUTUBRO-ROSA-2.jpg', refLink: '' },
		{ id: '03', imgLink: 'https://fundacaoecos.org.br/wp-content/uploads/2021/09/PRIMAVERA-OK.jpg', refLink: '' }
	];

	const nextImage = () => {
		history.push('/login');
	}

	const backImage = () => {
		history.push('/');
	}

	return (
		<div className='banner' style={{ backgroundImage: `url(${banners[0].imgLink})` }}>
			{banners.length > 1 ? <img className='banner_anterior' src={Back} alt='Banner Anterior' onClick={backImage} key='banner_anterior' /> : ''}
			{banners.length > 1 ? <img className='banner_proximo' src={Next} alt='Próximo Banner' onClick={nextImage} key='banner_proximo' /> : ''}
			<div className='div-circle'>
				{banners.map(banner => (<img className='circle' src={Circle} alt='Selecione o Banner' key={`Circle_${banners.indexOf(banner)}`} />))}
			</div>
		</div>
	)
}