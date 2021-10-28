import './style.css';
import Next from '../../assets/icon_next.png';
import Back from '../../assets/icon_back.png';
import Circle from '../../assets/icon_circle.png';

export default function Banner() {

	const banners = [
		{ link: 'https://fundacaoecos.org.br/wp-content/uploads/2021/10/OUTUBRO-ROSA-2.jpg', linkRef: '' },
		{ link: 'https://fundacaoecos.org.br/wp-content/uploads/2021/07/OSID-COM-LINK.jpg', linkRef: '' },
		{ link: 'https://fundacaoecos.org.br/wp-content/uploads/2021/09/PRIMAVERA-OK.jpg', linkRef: '' }
	];

	const nextImage = () => {
	}

	const backImage = () => {
	}

	const changeImage = () => {

	}

	return (
		<div className='banner' style={{ backgroundImage: `url(${banners[0].link})` }}>
			{banners.length > 1 ? <img className='back' src={Back} alt='Banner Anterior' /> : ''}
			{banners.length > 1 ? <img className='next' src={Next} alt='Próximo Banner' /> : ''}
			<div className='div-circle'>
				{banners.map(() => (<img className='circle' src={Circle} alt='Selecione o Banner' key='a' />))}
			</div>
		</div>
	)
}