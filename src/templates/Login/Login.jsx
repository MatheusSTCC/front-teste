import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../src/assets/images/logoprincipal.png";
import UsuarioService from "../../services/UsuarioService";
import logologin from "../../assets/images/logoprin.png";
import usu from "../../assets/images/usuário.png";
import "./Login.css";
import LoginForgotPass from "./LoginForgotPass";

const Login = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/home");
  };

  const backto = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setErrorMessage("");
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    UsuarioService.signin(formData.email, formData.password).then(
      () => {
        const userJson = localStorage.getItem("user");
        const user = JSON.parse(userJson || "{}");
        if (user.statusUsuario == "ATIVO") {
          navigate(`/usuarioperfil/` + user.id);
        } else if (user.statusUsuario == "TROCAR_SENHA") {
          navigate(`/newpass/` + user.id);
          //window.location.reload(); ordnael@email.com.br
        }
      },
      (error) => {
        const respMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(respMessage);

        setErrorMessage(respMessage);
      }
    );
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById("loginPassword");
    const toggleButton = document.getElementById("passwordVisibility");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Ocultar";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Mostrar";
    }
  };

  return (
    <div className="container">
      {/*Menu*/}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/principal"}>
            <img
              src={logo}
              alt="logo"
              style={{ width: " 200px", marginLeft: "14%" }}
            />
          </Link>
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
                <li className="nav-item" style={{ display: "flex" }}></li>

                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/principal"}
                >
                  Home
                </Link>

               
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/*Login*/}

      <div className="masterlogin">
        <div className="conteudo">
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                to={"/usuarionovo"}
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Cadastrar
              </Link>
            </li>
          </ul>

          {/* Pills navs */}

          {/* Pills content */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={handleSubmit}>
                <p className="text-center">ou:</p>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    className="form-control"
                    required
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Email ou nome de usuário
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                      name="password"
                      value={formData.password || ""}
                      onChange={handleChange}
                    />
                    <p
                      id="passwordVisibility"
                      style={{ margin: 8 }}
                      onClick={togglePassword}
                    >
                      Mostrar
                    </p>
                  </div>
                  <span className="error-message">{errorMessage}</span>
                  <br />
                  <label className="form-label" htmlFor="loginPassword">
                    Senha
                  </label>
                </div>

                {/* 2 column grid layout */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center"></div>

                 
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Logar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
