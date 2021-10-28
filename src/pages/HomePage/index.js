import './style.css';

import News from '../../components/News';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Institutional from '../../components/Institutional';

export default function HomePage() {
	return (
		<div className='homepage'>
			<News />
			<Header />
			<Banner />
			<Footer />
			<Institutional />
		</div>
	);
}