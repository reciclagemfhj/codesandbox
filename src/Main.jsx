import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import CursosBasicos from "./CursosBasicos";
import CursosAvanzados from "./CursosAvanzados";
import Contactos from "./Contactos";
import Usuarios from "./Usuarios";
import Perfil from "./Profile";
import Buscador from "./Buscador";

function Main() {
	return (
		<div>
			<main>
				<Route exact path="/" component={Home} />
				<Route path="/cursosbasicos" component={CursosBasicos} />
				<Route path="/cursosavanzados" component={CursosAvanzados} />
				<Route path="/contactos" component={Contactos} />
				<Route path="/usuarios/" component={Usuarios} />
				<Route path="/perfil/:username" component={Perfil} />
				<Route path="/buscador/" component={Buscador} />
			</main>
		</div>
	);
}

export default Main;
