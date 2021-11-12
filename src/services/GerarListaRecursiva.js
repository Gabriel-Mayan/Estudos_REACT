const ListaRecursiva = ({ className, informacao }) => {
	return <ul className={className}>{informacao.map(renderizar)}</ul>
}

const SubLista = ({ item }) => (
	<ul className='lista'>
		<li>
			<Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} />
			<ul className='sublista'>{item.subitens.map(renderizar)}</ul>
		</li>
	</ul>
);

const Item = ({ title, link }) => (
	<a href={link} key={`${title}-item-${link}`}> {title}</a>
);

const renderizar = item => {
	const render = item.subitens ?
		(<SubLista item={item} key={`${item.title}-list`} />) :
		(<li><Item title={item.title} link={item.link} key={`${item.title}-item-${item.link}`} /></li>);

	return render;
};

export default ListaRecursiva;