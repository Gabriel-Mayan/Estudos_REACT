import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LoginPage() {

	return (
		<div className='login'>
			<Header />
			<div className='div-card'>
				<h1 className='chamada-login'>Login</h1>
				<input className="cpf" type="text" placeholder="CPF" /> <br />
				<input className="senha" type="password" placeholder="Senha" /> <br />
				<button>Entrar</button>
				<a href='/recuperar_senha'>Esqueci minha senha</a>

				<h4>Primeira vez aqui? <a href='/ativar_conta'>Ative Sua Conta</a> </h4>
			</div>
			<Footer />
		</div>
	);
}

export default LoginPage;