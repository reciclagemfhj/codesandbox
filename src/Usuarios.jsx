import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Perfil from "./Profile";

function Usuarios() {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/users")
			.then((response) => response.json())
			.then((data) => {
				setInfo(data);
				console.log(data);
			});
	}, []);

	return (
		<div>
			<h2 className="usuarios-title"> Perfiles de Usuarios</h2>
			<ul>
				{info.map((user) => (
					<Link className="userslinks" to={`/perfil/${user.login}`}>
						<div>
							<img height="50px" width="50px" src={user.avatar_url} alt="" />
							<a target="_blank" href={user.html_url}>
								{" "}
								{user.login}
							</a>
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
}

export default Usuarios;
