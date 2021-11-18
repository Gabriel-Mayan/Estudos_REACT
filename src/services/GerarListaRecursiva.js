import { Link } from "react-router-dom";

const Lista = ({ className, informacao }) => {
	return <ul className={className}>{informacao.map(renderizar)}</ul>
}

const SubLista = ({ item }) => (
	<ul className='item'>
		<Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} />
		<li>
			<ul className='sublista' key={`${item.title}-sublista-${item.link}`}>{item.subitens.map(renderizar)}</ul>
		</li>
	</ul>
);

const Item = ({ title, link }) => (
	<li>
		<Link to={link} key={`${title}-item-${link}`}> {title}</Link>
	</li>
);

const renderizar = item => {
	const render = item.subitens ?
		(<SubLista item={item} key={`${item.title}-list`} />) :
		(<ul className='item'><Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} /></ul>);

	return render;
};

export default Lista;