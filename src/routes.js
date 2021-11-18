import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/AuthContext";

function RotasProtegidas(props) {
	const { token } = useAuth();
	return (
		<Route render={() => (token ? props.children : <Redirect to="/home" />)} />
	);
}

function Routes() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/home" exact component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/cadastro" component={LoginPage} />
					<Route path="/manutencaousuario" component={LoginPage} />
					<RotasProtegidas>
						<Route path="/userpage" component={LoginPage} />
					</RotasProtegidas>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default Routes;
