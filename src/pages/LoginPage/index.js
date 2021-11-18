import './style.css';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import userTest from '../../data/test_user.json'

function LoginPage() {
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	async function onSubmit(data) {
		String(data.cpf) === String(userTest.cpf) && String(data.senha) === String(userTest.senha) ?
			history.push('/passou') :
			history.push('/perdeu');
	}

	return (
		<div className='login'>
			<Header />
			<form className='div-card' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='titulo-login'>Login</h1>
				<input className="cpf" type="text" placeholder="CPF" label="CPF" id='CPF' variant='outlined' {...register('cpf', { required: true })} /> <br />
				<input className="senha" type="password" placeholder="Senha" label="senha" id='senha' variant='outlined' {...register('senha', { required: true })} /> <br />
				<button type='submit'>Entrar</button>
				<h5>Primeira vez aqui? <Link to='ativarconta'>Ative Sua Conta</Link> </h5>
				<Link to='recuperarsenha'>Esqueci minha senha</Link>
			</form>
			<Footer />
		</div>
	);
}

export default LoginPage;