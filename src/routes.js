import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

import LoginPage from "./pages/Login/LoginPage";
import NovaSenhaPage from "./pages/Login/NovaSenhaPage";
import AtivarContaPage from "./pages/Login/AtivarContaPage";

import EventosPage from "./pages/Institucional/EventosPage";
import CalendarioPage from "./pages/Institucional/CalendarioPage";
import RevistaTempoPage from "./pages/Institucional/RevistaTempoPage";
import EticaCondultaPage from "./pages/Institucional/EticaCondultaPage";
import AniversariantesPage from "./pages/Institucional/AniversariantesPage";
import CanaisDeAtendimentoPage from "./pages/Institucional/CanaisDeAtendimentoPage";

import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function RotasProtegidas(props) {
	const { token } = useAuth();
	return (<Route render={() => (token ? props.children : <Redirect to="/homepage" />)} />);
}

function Routes() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/homepage" exact component={HomePage} /> {/*ok*/}
					<Route path="/noticias" exact component={NewsPage} />

					<Route path="/user/login" component={LoginPage} /> {/*ok*/}
					<Route path="/user/novasenha" component={NovaSenhaPage} />
					<Route path="/user/ativarconta" component={AtivarContaPage} />

					<Route path="/institucional/eventos" component={EventosPage} />
					<Route path="/institucional/calendario" component={CalendarioPage} />
					<Route path="/institucional/revistatempo" component={RevistaTempoPage} />
					<Route path="/institucional/eticaecondulta" component={EticaCondultaPage} />
					<Route path="/institucional/aniversariantes" component={AniversariantesPage} />
					<Route path="/institucional/canaisdeatendimento" component={CanaisDeAtendimentoPage} />

					<RotasProtegidas>
						<Route path="/userpage" component={LoginPage} />
					</RotasProtegidas>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default Routes;
