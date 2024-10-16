import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/system-logo_24_x_24.png";
import perfil from "../../assets/images/perfil_blz.jpg";
import UsuarioService from "../../services/UsuarioService";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [foto, setFoto] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true); // Estado de loading

  const navigate = useNavigate();
  const logout = () => {
    UsuarioService.logout();
    navigate("/");
  };

  const getCurrentUser = () => {
    const user = UsuarioService.getCurrentUser();
    console.log("side", user);
    if (user.foto?.data) {
      const byteArray = new Uint8Array(user.foto.data);
      const blob = new Blob([byteArray], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setFoto(url);
    }
    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      {currentUser ? (
        <div className="sidebar">
          <form className="d-flex flex-column justify-content-around align-items-center m-1 py-2 border-bottom rounded">
            {loading ? (
              <div className="loading">
                <p>Carregando...</p>
              </div>
            ) : (
              <>
                <img
                  src={foto ? foto : perfil}
                  alt="logo"
                  className="mt-2 w-25"
                />
                <div className="my-2">
                  <span className="fw-bold fst-italic text-white">
                    {currentUser.nome}
                  </span>
                </div>
              </>
            )}

            <button className="sair" onClick={logout}>
              <i className="bi bi-box-arrow-left"></i> Sair
            </button>
          </form>

          <nav className="nav flex-column">
            <Link className="link" to={"/"}>
              Home
            </Link>

            <Link className="link" to={"/privacidade"}>
              Política de privacidade
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
