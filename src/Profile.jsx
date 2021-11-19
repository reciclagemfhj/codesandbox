import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Usuarios from "./Usuarios";

function Perfil() {
  const params = useParams();
  console.log(params);

  return (
    <div className="perfil">
      <h2> {params.username} </h2>
      <Link to="/Usuarios"> Volver a Usuarios </Link>
      <Link to="/"> Home </Link>
    </div>
  );
}

export default Perfil;
