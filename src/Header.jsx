import React from "react";
import { Link } from "react-router-dom";
import { rutas } from "./rutas";

function Header() {
	return (
		<nav>
			<ul className="nav-bar">
				{rutas.map((ruta, index) => {
					return (
						<Link key={index} className="nav-item" to={ruta.ruta}>
							{ruta.nombre}
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}

export default Header;
