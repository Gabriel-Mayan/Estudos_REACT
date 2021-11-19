import './style.css';
import { useState, useEffect } from "react";

import Next from '../../assets/icon_next.svg';
import Back from '../../assets/icon_back.svg';
import Circle from '../../assets/icon_circle.svg';
import Banners from '../../data/banner_image.json';

export default function Banner() {
	const [state, setState] = useState({ index: 0, selected: Banners[0] });

	useEffect(() => {
		const timeout = setTimeout(() => nextImage(), 10000);
		return () => clearTimeout(timeout);
	});

	const nextImage = () => setState(() => {
		clearTimeout();
		const newIndex = state.index < Banners.length - 1 ? state.index + 1 : 0;
		return { index: newIndex, selected: Banners[newIndex] };
	});

	const backImage = () => setState(() => {
		clearTimeout();
		const newIndex = state.index >= 1 ? state.index - 1 : Banners.length - 1;
		return { index: newIndex, selected: Banners[newIndex] };
	});

	return (
		<div className='banner'
			style={{ backgroundImage: `url(${state.selected.url})`, cursor: `${state.selected.link ? 'pointer' : 'auto'}` }}
		>
			{Banners.length > 1 ? <img className='banner_anterior' src={Back} alt='Banner Anterior' onClick={backImage} key='banner_anterior' /> : ''}
			{Banners.length > 1 ? <img className='banner_proximo' src={Next} alt='Próximo Banner' onClick={nextImage} key='banner_proximo' /> : ''}
			<div className='div-circle'>
				{Banners.map(banner => (<img className='circle' src={Circle} alt='Selecione o Banner' key={`Circle_${Banners.indexOf(banner)}`} />))}
			</div>
		</div>
	)
}