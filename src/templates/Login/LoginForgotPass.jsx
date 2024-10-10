import { Link, useNavigate } from "react-router-dom";
import image from '../../assets/images/system-logo_128_x_128.png';
import logo from '../../assets/images/logoprin.png'
import usu from '../../assets/images/usuário.png'
import './LoginForgotPass.css';

const LoginForgotPass = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/login");
    }

    const backto = () => {
        navigate("/principal");
    }


    return (
        <div>

         {/* Menu*/}
      <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/principal'}><img src={logo} alt="logo" style={{ width: "200px", marginLeft: "14%" }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/principal'}>Home</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to={'/faleconosco'}>Fale conosco</Link>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </nav>



        
        <div className="container">
            <form action="" className="login-form">
                <div className="login-logo">
                    <img src={image} alt="logo" />
                </div>
                <h5 className="text-center">Recuperação de Senha</h5>
                <div className="my-3">
                    <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                    <input type="email" id="email" className="form-control text-center fw-medium shadow" />
                </div>
                <div className="mt-1">
                    <p className="fw-bold fst-italic opacity-75 me-1">Acessar o sistema:
                        <Link to={'/login'}> Clique aqui.</Link>
                    </p>
                </div>
                <div className="d-flex justify-content-center my-1 d-none" id="infos">
                    <p className="fw-bold fst-italic text-danger">
                        Dados Incorretos!!!
                    </p>
                </div>
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <button className="btn btn-warning fw-medium shadow" type="button"
                        onClick={backto}>Cancelar</button>
                    <button className="btn btn-success fw-medium shadow" type="submit"
                        onClick={goto} >Solicitar Nova Senha</button>
                </div>
            </form>
        </div>
        </div>
        
    )
}

export default LoginForgotPass