import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import perfil from "../../assets/images/perfil_blz.jpg";
import UsuarioService from "../../services/UsuarioService";
import logo from "../../../src/assets/images/logoprincipal.png";
const Menu = () => {
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
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/principal">
          <img
            src={logo}
            alt="logo"
            style={{ width: "200px", marginLeft: "14%" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/principal"}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                {currentUser?.nome ? (
                  <Link
                    className="currentUser"
                    to={`/usuarioperfil/${currentUser?.id}`}
                  >
                    {currentUser?.nome}
                  </Link>
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/login"}
                  >
                    Login
                  </Link>
                )}
              </li>

              <li className="nav-item dropdown">
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item" to={"/#"}>
                      Página do adm
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/#"}>
                      Política de privacidade
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {currentUser?.nome && (
                  <Link
                    className="nav-link logout"
                    to={"/principal"}
                    onClick={logout}
                  >
                    Sair
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
