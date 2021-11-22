import './style.css';
import { useState, useEffect } from "react";

import Next from '../../assets/icon_next.svg';
import Back from '../../assets/icon_back.svg';
import Circle from '../../assets/icon_circle.svg';
import Banners from '../../data/banner_image.json';

export default function Banner() {
	const [state, setState] = useState({ index: 0, selected: Banners[0] });

	useEffect(() => {
		const timeout = setTimeout(() => selectImage(state.index, 'next'), 10000);
		return () => clearTimeout(timeout);
	});

	const selectImage = (index, type) => setState(() => {
		clearTimeout();
		if (type === 'back')
			index = index < Banners.length - 1 ? index + 1 : 0;

		if (type === 'next')
			index = index >= 1 ? index - 1 : Banners.length - 1;

		return { index, selected: Banners[index] };
	});

	return (
		<div className='banner'
			style={{ backgroundImage: `url(${state.selected.url})`, cursor: `${state.selected.link ? 'pointer' : 'auto'}` }}
		>
			{Banners.length > 1 ? <img className='banner_anterior' src={Back} alt='Banner Anterior' onClick={() => selectImage(state.index, 'back')} key='banner_anterior' /> : ''}
			{Banners.length > 1 ? <img className='banner_proximo' src={Next} alt='Próximo Banner' onClick={() => selectImage(state.index, 'next')} key='banner_proximo' /> : ''}
			<div className='div-circle'>
				{Banners.map(banner => (<img className={`circle ${state.index === Banners.indexOf(banner) ? 'selected' : ''}`} src={Circle} alt='Selecione o Banner' onClick={() => selectImage(Banners.indexOf(banner))} key={`Circle_${Banners.indexOf(banner)}`} />))}
			</div>
		</div>
	)
}