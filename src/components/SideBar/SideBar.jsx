import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/system-logo_24_x_24.png";
import perfil from "../../assets/images/perfil_blz.jpg";
import UsuarioService from "../../services/UsuarioService";

const Sidebar = () => {
  const currentUser = UsuarioService.getCurrentUser();

  const navigate = useNavigate();

  const logout = () => {
    UsuarioService.logout();
    navigate("/");
  };

  const editar = (id) => {
    navigate(`/usuarioperfil/` + id);
  };

  return (
    <>
      {currentUser ? (
        <div className="sidebar">
          <form className="d-flex flex-column justify-content-around align-items-center m-1 py-2 border-bottom rounded">
            <img
              src={currentUser.foto ? 'data:image/jpeg;base64,' +  currentUser.foto : perfil}
              alt="logo"
              className="mt-2 w-25"
            />
            <div className="my-2">
              <span className="fw-bold fst-italic text-white">
                {currentUser.nome}
              </span>
            </div>

            <button className="sair" onClick={logout}>
              <i className="bi bi-box-arrow-left"></i> Sair
            </button>
          </form>

          <nav className="nav flex-column">
            <Link className="link" to={"/"}>
              Home
            </Link>

            {currentUser.nivelAcesso === "ADMIN" && (
              <Link className="link" to={"/usuario"}>
                Usuário
              </Link>
            )}
          </nav>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
