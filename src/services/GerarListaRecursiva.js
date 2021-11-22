import { Link } from "react-router-dom";

export default function GerarListaRecursiva({ className, informacao }) {
	const Item = ({ title, link }) => (
		<li>
			<Link to={link} key={`${title}-item-${link}`}> {title}</Link>
		</li>
	);

	const SubLista = ({ item }) => (
		<ul className='item'>
			<Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} />
			<li>
				<ul className='sublista' key={`${item.title}-sublista-${item.link}`}>{item.subitens.map(renderizar)}</ul>
			</li>
		</ul>
	);

	const renderizar = item => {
		const render = item.subitens ?
			(<SubLista item={item} key={`${item.title}-list`} />) :
			(<ul className='item'><Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} /></ul>);

		return render;
	};

	return (
		<ul className={className} key={`Lista-${className}`}>
			{informacao.map(renderizar)}
		</ul>
	)
}