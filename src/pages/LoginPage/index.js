import './style.css';

function LoginPage() {

	return (
		<div className='login'>
			<div className='div-card'>
				<h1 className='chamada-login'>Login</h1>
				<input className="cpf" type="text" placeholder="CPF" /> <br />
				<input className="senha" type="password" placeholder="Senha" /> <br />
				<button>Entrar</button>
				<a>Esqueci minha senha</a>

				<h4>Primeira vez aqui? <a>Ative Sua Conta</a> </h4>
			</div>
		</div>
	);
}

export default LoginPage;