import './style.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


function NovaSenhaPage() {
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	async function onSubmit() {
		history.push('/perdeu');
	}

	return (
		<div className='nova-senha'>
			<Header />
			<form className='div-card' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='titulo-nova-senha'>Recuperação de Senha</h1>
				<p>Inscrição da Ecos </p><input className="cpf" type="text" label="CPF" id='CPF' variant='outlined' {...register('cpf', { required: true })} />
				<p>Aniversário </p><input className="senha" type="password" label="senha" id='senha' variant='outlined' {...register('senha', { required: true })} />
				<p>Seu CPF </p><input className="senha" type="password" label="senha" id='senha' variant='outlined' {...register('senha', { required: true })} />
				<button className='btn-recuperacao' type='submit'>Entrar</button>
			</form>
			<Footer />
		</div>
	);
}

export default NovaSenhaPage;