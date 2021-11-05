import './style.css';
import { useHistory } from 'react-router';
import Next from '../../assets/icon_next.svg';
import Back from '../../assets/icon_back.svg';
import Circle from '../../assets/icon_circle.svg';
import Banners from '../../data/banner_image.json';

export default function Banner() {

	const history = useHistory();
	const backImage = () => history.push('/');
	const nextImage = () => history.push('/login');

	return (
		<div className='banner' style={{ backgroundImage: `url(${Banners[0].imgLink})` }}>
			{Banners.length > 1 ? <img className='banner_anterior' src={Back} alt='Banner Anterior' onClick={backImage} key='banner_anterior' /> : ''}
			{Banners.length > 1 ? <img className='banner_proximo' src={Next} alt='Próximo Banner' onClick={nextImage} key='banner_proximo' /> : ''}
			<div className='div-circle'>
				{Banners.map(banner => (<img className='circle' src={Circle} alt='Selecione o Banner' key={`Circle_${Banners.indexOf(banner)}`} />))}
			</div>
		</div>
	)
}