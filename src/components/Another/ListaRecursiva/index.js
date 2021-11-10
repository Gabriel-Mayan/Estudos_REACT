const ListaRecursiva = ({ className, informacao }) => {
	return <ul className={className}>{informacao.map(renderizar)}</ul>
}

const SubLista = ({ item }) => (
	<ul className='lista'>
		<li>
			<a href={item.link} key={`${item.title}-item-${item.link}`}> {item.title}  </a>
			<ul className='sublista'>{item.subitens.map(renderizar)}</ul>
		</li>
	</ul>
);

const Item = ({ title, link }) => (
	<li><a href={link} key={`${title}-item-${link}`}> {title}</a></li>
);

const renderizar = item => {
	const render = item.subitens ?
		(<SubLista item={item} key={`${item.title}-list`} />) :
		(<Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} />);

	return render;
};

export default ListaRecursiva;