import './style.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LoginPage() {
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	async function onSubmit(data) {
		history.push()
	}

	return (
		<div className='login'>
			<Header />
			<form className='div-card' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='chamada-login'>Login</h1>
				<input className="cpf" type="text" placeholder="CPF" label="CPF" id='CPF' variant='outlined' {...register('CPF', { required: true })} /> <br />
				<input className="senha" type="password" placeholder="Senha" label="senha" id='senha' variant='outlined' {...register('senha', { required: true })} /> <br />
				<button type='submit'>Entrar</button>
				<h5>Primeira vez aqui? <a href='/ativar_conta'>Ative Sua Conta</a> </h5>
				<a href='/recuperar_senha'>Esqueci minha senha</a>
			</form>
			<Footer />
		</div>
	);
}

export default LoginPage;